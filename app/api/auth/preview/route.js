import { NextResponse } from "next/server";

import { COURSE_COOKIE, courseCookieOptions } from "@/libs/auth";
import { localizedPath, pickLocale } from "@/libs/locale";
import { previewCookieMaxAge, readPreviewSession } from "@/libs/preview-access";

export async function GET(request) {
  const token = request.nextUrl.searchParams.get("token") || "";
  const locale = pickLocale(request.nextUrl.searchParams.get("locale"));
  const origin = request.nextUrl.origin;
  const session = readPreviewSession(token);

  if (!session) {
    const denied = new URL(localizedPath("/diarios", locale), origin);
    denied.searchParams.set("acceso", "enlace");
    return NextResponse.redirect(denied);
  }

  const response = NextResponse.redirect(
    new URL(localizedPath("/diarios/arquitecturas", locale), origin)
  );
  response.cookies.set(COURSE_COOKIE, token, courseCookieOptions(previewCookieMaxAge()));
  return response;
}
