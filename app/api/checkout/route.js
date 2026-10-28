import { localizedPath, pickLocale } from "@/libs/locale";
import { createPaypalOrder, isCheckoutConfigured } from "@/libs/paypal";
import { siteOrigin } from "@/libs/site";

function checkoutOrigin(request) {
  const origin = request.headers.get("origin") || "";
  try {
    const url = new URL(origin);
    const site = new URL(siteOrigin());
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.origin === site.origin || local) return url.origin;
  } catch {
    return "";
  }
  return "";
}

export async function POST(request) {
  if (!isCheckoutConfigured()) {
    return Response.json({ ok: false, error: "checkout_unavailable" }, { status: 503 });
  }

  let locale = "es";
  try {
    const body = await request.json();
    locale = pickLocale(body?.locale);
  } catch {
    locale = "es";
  }

  const origin = checkoutOrigin(request);
  const urls = origin
    ? {
        returnUrl: `${origin}${localizedPath("/diarios/checkout", locale)}`,
        cancelUrl: `${origin}${localizedPath("/diarios/checkout", locale)}`,
      }
    : null;

  try {
    const order = await createPaypalOrder(urls);
    if (!order?.id) {
      return Response.json({ ok: false, error: "checkout_unavailable" }, { status: 503 });
    }
    return Response.json({ ok: true, id: order.id });
  } catch (error) {
    console.error("checkout_create", error?.message || "failed");
    return Response.json({ ok: false, error: "checkout_unavailable" }, { status: 503 });
  }
}
