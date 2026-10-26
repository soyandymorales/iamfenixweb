import { createHmac, timingSafeEqual } from "crypto";

import { siteMetadata } from "@/content/metadata/site";
import { localizedPath, pickLocale } from "@/libs/locale";

function required(name) {
  const value = process.env[name]?.trim();
  return value || "";
}

export function isCheckoutConfigured() {
  return Boolean(
    required("LEMONSQUEEZY_API_KEY") &&
      required("LEMONSQUEEZY_STORE_ID") &&
      required("LEMONSQUEEZY_VARIANT_ID") &&
      required("LEMONSQUEEZY_WEBHOOK_SECRET")
  );
}

export function siteOrigin() {
  return (process.env.SITE_URL || siteMetadata.url).replace(/\/$/, "");
}

export function accessLink(token, locale) {
  const url = new URL("/api/auth/callback", siteOrigin());
  url.searchParams.set("token", token);
  url.searchParams.set("locale", pickLocale(locale));
  return url.toString();
}

export async function createCheckoutUrl(locale) {
  if (!isCheckoutConfigured()) return null;
  const lang = pickLocale(locale);
  const redirectUrl = `${siteOrigin()}${localizedPath("/diarios/gracias", lang)}`;

  const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${required("LEMONSQUEEZY_API_KEY")}`,
    },
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          product_options: { redirect_url: redirectUrl },
          checkout_data: { custom: { locale: lang } },
        },
        relationships: {
          store: {
            data: { type: "stores", id: required("LEMONSQUEEZY_STORE_ID") },
          },
          variant: {
            data: { type: "variants", id: required("LEMONSQUEEZY_VARIANT_ID") },
          },
        },
      },
    }),
  });

  if (!response.ok) {
    console.error(await response.text());
    return null;
  }

  const payload = await response.json();
  return payload?.data?.attributes?.url || null;
}

export function webhookSecretReady() {
  return Boolean(required("LEMONSQUEEZY_WEBHOOK_SECRET"));
}

export function verifyWebhookSignature(rawBody, signature) {
  const secret = required("LEMONSQUEEZY_WEBHOOK_SECRET");
  if (!secret || !signature) return false;
  const digest = createHmac("sha256", secret).update(rawBody).digest("hex");
  const left = Buffer.from(digest);
  const right = Buffer.from(String(signature));
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function expectedVariantId() {
  return required("LEMONSQUEEZY_VARIANT_ID");
}

export function readOrder(payload) {
  const attributes = payload?.data?.attributes || {};
  const item = attributes.first_order_item || {};
  const variantId = item.variant_id ?? attributes.variant_id;
  return {
    eventName: payload?.meta?.event_name || "",
    eventId: payload?.meta?.event_id || `${payload?.meta?.event_name || "event"}:${payload?.data?.id || ""}`,
    orderId: payload?.data?.id ? String(payload.data.id) : "",
    email: attributes.user_email || "",
    fullName: attributes.user_name || "",
    variantId: variantId == null ? "" : String(variantId),
    amountMinor: Number(attributes.total),
    currency: String(attributes.currency || "").toUpperCase(),
    status: attributes.status || "",
    refunded: Boolean(attributes.refunded),
    locale: payload?.meta?.custom_data?.locale || "es",
  };
}
