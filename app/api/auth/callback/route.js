import { NextResponse } from "next/server";

import { findBuyerByToken } from "@/libs/buyers";
import { COURSE_COOKIE, COURSE_LINK_MAX_AGE_MS, courseCookieOptions } from "@/libs/auth";
import { localizedPath, pickLocale } from "@/libs/locale";

export async function GET(request) {
  const token = request.nextUrl.searchParams.get("token") || "";
  const locale = pickLocale(request.nextUrl.searchParams.get("locale"));
  const origin = request.nextUrl.origin;
  const buyer = token
    ? await findBuyerByToken(token, { maxAgeMs: COURSE_LINK_MAX_AGE_MS }).catch(() => null)
    : null;

  if (!buyer) {
    const denied = new URL(localizedPath("/diarios", locale), origin);
    denied.searchParams.set("acceso", "enlace");
    return NextResponse.redirect(denied);
  }

  const response = NextResponse.redirect(
    new URL(localizedPath("/diarios/arquitecturas", locale), origin)
  );
  response.cookies.set(COURSE_COOKIE, token, courseCookieOptions());
  return response;
}
