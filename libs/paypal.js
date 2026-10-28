import { DIARIOS_PRODUCT_CODE, getDiariosOffer } from "@/content/diarios/offer";

const SANDBOX_API = "https://api-m.sandbox.paypal.com";
const LIVE_API = "https://api-m.paypal.com";

function env(name) {
  return process.env[name]?.trim() || "";
}

export function isSandbox() {
  return env("PAYPAL_ENV") !== "live";
}

export function paypalApiBase() {
  return isSandbox() ? SANDBOX_API : LIVE_API;
}

export function paypalScriptUrl() {
  return isSandbox()
    ? "https://www.sandbox.paypal.com/web-sdk/v6/core"
    : "https://www.paypal.com/web-sdk/v6/core";
}

export function paypalClientId() {
  return env("PAYPAL_CLIENT_ID");
}

export function isCheckoutConfigured() {
  return Boolean(env("PAYPAL_CLIENT_ID") && env("PAYPAL_CLIENT_SECRET") && env("PAYPAL_WEBHOOK_ID"));
}

export function webhookIdReady() {
  return Boolean(env("PAYPAL_WEBHOOK_ID"));
}

export function expectedAmountMinor() {
  return getDiariosOffer("es").priceAmount * 100;
}

function priceValue() {
  return getDiariosOffer("es").priceAmount.toFixed(2);
}

let merchantToken = null;

async function merchantAccessToken() {
  if (merchantToken && merchantToken.expiresAt > Date.now() + 60_000) {
    return merchantToken.value;
  }

  const id = env("PAYPAL_CLIENT_ID");
  const secret = env("PAYPAL_CLIENT_SECRET");
  if (!id || !secret) return "";

  const creds = Buffer.from(`${id}:${secret}`).toString("base64");
  const response = await fetch(`${paypalApiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${creds}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    console.error("paypal_oauth", response.status);
    return "";
  }

  const data = await response.json();
  if (!data?.access_token) return "";
  merchantToken = {
    value: data.access_token,
    expiresAt: Date.now() + (Number(data.expires_in) || 300) * 1000,
  };
  return merchantToken.value;
}

async function requestClientToken(body) {
  const id = env("PAYPAL_CLIENT_ID");
  const secret = env("PAYPAL_CLIENT_SECRET");
  if (!id || !secret) return "";

  const creds = Buffer.from(`${id}:${secret}`).toString("base64");
  const response = await fetch(`${paypalApiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${creds}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.access_token) {
    console.error("paypal_client_token", response.status, data?.error || "rejected");
    return "";
  }

  return data.access_token;
}

export async function browserClientToken() {
  const attempts = [
    "grant_type=client_credentials&response_type=client_token&intent=sdk_init",
    "grant_type=client_credentials&response_type=client_token",
  ];

  for (const body of attempts) {
    const token = await requestClientToken(body);
    if (token) return token;
  }

  return "";
}

async function paypalFetch(path, { method = "GET", body, requestId } = {}) {
  const token = await merchantAccessToken();
  if (!token) {
    const error = new Error("paypal_unconfigured");
    error.status = 503;
    throw error;
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  if (requestId) headers["PayPal-Request-Id"] = requestId;

  const response = await fetch(`${paypalApiBase()}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }
  }

  return { ok: response.ok, status: response.status, payload };
}

function orderBody(withShipping, urls) {
  const purchase = {
    custom_id: DIARIOS_PRODUCT_CODE,
    description: "Diarios del Fénix",
    amount: {
      currency_code: "USD",
      value: priceValue(),
    },
  };

  const body = {
    intent: "CAPTURE",
    purchase_units: [purchase],
  };

  if (withShipping) {
    body.application_context = {
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
      brand_name: "Fénix",
      ...(urls?.returnUrl ? { return_url: urls.returnUrl, cancel_url: urls.cancelUrl } : {}),
    };
  }

  return body;
}

async function postOrder(body) {
  return paypalFetch("/v2/checkout/orders", {
    method: "POST",
    requestId: crypto.randomUUID(),
    body,
  });
}

export async function createPaypalOrder(urls) {
  let result = await postOrder(orderBody(true, urls));

  if (!result.ok) {
    result = await postOrder(orderBody(false, null));
  }

  if (!result.ok || !result.payload?.id) {
    console.error("paypal_create_order", result.status);
    return null;
  }

  const confirmed = await paypalFetch(`/v2/checkout/orders/${result.payload.id}`);
  const unit = confirmed.payload?.purchase_units?.[0];
  const amountMatches =
    unit?.amount?.value === priceValue() &&
    unit?.amount?.currency_code === "USD" &&
    unit?.custom_id === DIARIOS_PRODUCT_CODE &&
    !String(unit?.description || "").includes("http");

  if (!confirmed.ok || !amountMatches) {
    console.error(
      "paypal_order_rejected",
      confirmed.status,
      unit?.amount?.value || "no-amount",
      unit?.amount?.currency_code || "no-currency",
      unit?.custom_id || "no-custom"
    );
    return null;
  }

  return { id: result.payload.id };
}

function validPaypalId(value) {
  return typeof value === "string" && /^[A-Za-z0-9]+$/.test(value) && value.length <= 64;
}

export async function capturePaypalOrder(orderId) {
  if (!validPaypalId(orderId)) {
    const error = new Error("invalid_order");
    error.status = 400;
    throw error;
  }

  const captured = await paypalFetch(`/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    requestId: crypto.randomUUID(),
    body: {},
  });

  if (captured.ok && captured.payload) return captured.payload;

  const already = captured.payload?.details?.some((item) => item.issue === "ORDER_ALREADY_CAPTURED");
  if (captured.status === 422 && already) {
    const existing = await paypalFetch(`/v2/checkout/orders/${orderId}`);
    if (existing.ok && existing.payload) return existing.payload;
  }

  console.error("paypal_capture", captured.status);
  const rejected = captured.status === 422;
  const error = new Error(rejected ? "capture_rejected" : "capture_failed");
  error.status = captured.status === 404 ? 404 : rejected ? 422 : 502;
  throw error;
}

export async function getPaypalOrder(orderId) {
  if (!validPaypalId(orderId)) return null;
  const result = await paypalFetch(`/v2/checkout/orders/${orderId}`);
  return result.ok ? result.payload : null;
}

export function readPaidOrder(order) {
  const unit = order?.purchase_units?.[0] || {};
  const captures = unit.payments?.captures || [];
  const capture = captures.find((item) => item.status === "COMPLETED") || captures[0] || {};
  const amount = capture.amount || unit.amount || {};
  const numeric = Number(amount.value);
  const payer = order?.payer || {};
  const fullName = [payer.name?.given_name, payer.name?.surname].filter(Boolean).join(" ");

  return {
    orderId: order?.id ? String(order.id) : "",
    status: order?.status || "",
    captureStatus: capture.status || "",
    customId: unit.custom_id || capture.custom_id || "",
    amountMinor: Number.isFinite(numeric) ? Math.round(numeric * 100) : 0,
    currency: String(amount.currency_code || "").toUpperCase(),
    email: payer.email_address || "",
    fullName,
  };
}

export async function orderIdForCapture(captureId) {
  if (!validPaypalId(captureId)) return "";
  const result = await paypalFetch(`/v2/payments/captures/${captureId}`);
  return result.payload?.supplementary_data?.related_ids?.order_id || "";
}

export async function verifyPaypalWebhook({ headers, event }) {
  const webhookId = env("PAYPAL_WEBHOOK_ID");
  if (!webhookId) return false;

  const result = await paypalFetch("/v1/notifications/verify-webhook-signature", {
    method: "POST",
    body: {
      auth_algo: headers.authAlgo,
      cert_url: headers.certUrl,
      transmission_id: headers.transmissionId,
      transmission_sig: headers.transmissionSig,
      transmission_time: headers.transmissionTime,
      webhook_id: webhookId,
      webhook_event: event,
    },
  });

  return result.ok && result.payload?.verification_status === "SUCCESS";
}
