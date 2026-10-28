import { cookies } from "next/headers";

import { COURSE_COOKIE, courseCookieOptions } from "@/libs/auth";
import { grantPaidOrder } from "@/libs/fulfill-order";
import { localizedPath, pickLocale } from "@/libs/locale";
import { capturePaypalOrder, isCheckoutConfigured, readPaidOrder } from "@/libs/paypal";

export async function POST(request) {
  if (!isCheckoutConfigured()) {
    return Response.json({ ok: false, error: "checkout_unavailable" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const orderId = typeof body?.orderId === "string" ? body.orderId : "";
  const locale = pickLocale(body?.locale);
  const contact = {
    email: body?.email,
    givenName: body?.givenName,
    familyName: body?.familyName,
  };

  try {
    const captured = await capturePaypalOrder(orderId);
    const paid = readPaidOrder(captured);
    const result = await grantPaidOrder(paid, locale, contact);
    if (!result.granted) {
      return Response.json({ ok: false, error: "capture_rejected" }, { status: 422 });
    }
    if (result.token) {
      const jar = await cookies();
      jar.set(COURSE_COOKIE, result.token, courseCookieOptions());
    }
  } catch (error) {
    if (error?.status === 422) {
      return Response.json({ ok: false, error: "capture_rejected" }, { status: 422 });
    }
    const status = error?.status === 400 || error?.status === 404 ? error.status : 502;
    console.error("checkout_capture", error?.message || "failed");
    return Response.json({ ok: false, error: "capture_failed" }, { status });
  }

  return Response.json({
    ok: true,
    redirect: localizedPath("/diarios/gracias", locale),
  });
}
