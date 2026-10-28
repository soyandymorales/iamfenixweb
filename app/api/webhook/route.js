import {
  claimWebhookEvent,
  releaseWebhookEvent,
} from "@/libs/buyers";
import { grantPaidOrder, revokePaidOrder } from "@/libs/fulfill-order";
import { pickLocale } from "@/libs/locale";
import {
  getPaypalOrder,
  isCheckoutConfigured,
  orderIdForCapture,
  readPaidOrder,
  verifyPaypalWebhook,
  webhookIdReady,
} from "@/libs/paypal";

export async function GET() {
  return Response.json({ ok: true });
}

export async function POST(request) {
  if (!webhookIdReady() || !isCheckoutConfigured()) {
    return Response.json({ ok: false }, { status: 503 });
  }

  const raw = await request.text();
  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const verified = await verifyPaypalWebhook({
    headers: {
      authAlgo: request.headers.get("paypal-auth-algo") || "",
      certUrl: request.headers.get("paypal-cert-url") || "",
      transmissionId: request.headers.get("paypal-transmission-id") || "",
      transmissionSig: request.headers.get("paypal-transmission-sig") || "",
      transmissionTime: request.headers.get("paypal-transmission-time") || "",
    },
    event,
  }).catch((error) => {
    console.error("paypal_verify", error?.message || "failed");
    return false;
  });

  if (!verified) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const eventId = typeof event?.id === "string" ? event.id : "";
  const eventType = typeof event?.event_type === "string" ? event.event_type : "";
  if (!eventId) return Response.json({ ok: true });

  let claimed = false;
  try {
    claimed = await claimWebhookEvent(eventId, eventType);
  } catch (error) {
    console.error("webhook_claim", error?.message || "failed");
    return Response.json({ ok: false }, { status: 500 });
  }
  if (!claimed) return Response.json({ ok: true });

  try {
    await applyPaypalEvent(eventType, event?.resource || {});
  } catch (error) {
    console.error("webhook_apply", error?.message || "failed");
    try {
      await releaseWebhookEvent(eventId);
    } catch (releaseError) {
      console.error("webhook_release", releaseError?.message || "failed");
    }
    return Response.json({ ok: false }, { status: 500 });
  }

  return Response.json({ ok: true });
}

async function applyPaypalEvent(eventType, resource) {
  if (eventType === "PAYMENT.CAPTURE.REFUNDED" || eventType === "PAYMENT.CAPTURE.REVERSED") {
    const orderId = await orderIdFromResource(resource, eventType);
    if (orderId) await revokePaidOrder(orderId);
    return;
  }

  if (eventType !== "PAYMENT.CAPTURE.COMPLETED") return;

  const orderId = await orderIdFromResource(resource, eventType);
  if (!orderId) return;

  const order = await getPaypalOrder(orderId);
  if (!order) throw new Error("order_unread");

  await grantPaidOrder(readPaidOrder(order), pickLocale("es"));
}

function captureIdFromLinks(resource) {
  const links = Array.isArray(resource?.links) ? resource.links : [];
  const up = links.find((link) => link?.rel === "up" && typeof link.href === "string");
  if (!up) return "";
  try {
    const url = new URL(up.href);
    if (!url.hostname.endsWith("paypal.com")) return "";
    const match = url.pathname.match(/\/v2\/payments\/captures\/([A-Za-z0-9]+)$/);
    return match?.[1] || "";
  } catch {
    return "";
  }
}

async function orderIdFromResource(resource, eventType) {
  const related = resource?.supplementary_data?.related_ids?.order_id;
  if (related) return String(related);
  const fromLink = captureIdFromLinks(resource);
  const captureId =
    fromLink || (eventType === "PAYMENT.CAPTURE.COMPLETED" ? String(resource?.id || "") : "");
  if (!captureId) return "";
  return orderIdForCapture(captureId);
}
