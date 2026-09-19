import { NextResponse } from "next/server";

import {
  COOKIE_MAX_AGE,
  DEFAULT_LOCALE,
  isCrawler,
  isEnglishOnlyAcceptLanguage,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  stripLocalePrefix,
  withLocalePrefix,
} from "@/libs/locale";

const PUBLIC_FILE = /\.[^/]+$/;

function cookieOptions() {
  return {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
  };
}

function withLocaleHeader(response, locale) {
  response.headers.set(LOCALE_HEADER, locale);
  return response;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const crawler = isCrawler(request.headers.get("user-agent"));
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const acceptLanguage = request.headers.get("accept-language") || "";

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = request.nextUrl.clone();
    url.pathname = stripLocalePrefix(pathname.replace(/^\/es/, "") || "/");
    return NextResponse.redirect(url, 308);
  }

  const isPrefixedEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const barePath = isPrefixedEnglish ? stripLocalePrefix(pathname) : pathname;

  if (!isPrefixedEnglish && !crawler) {
    const wantsEnglish =
      cookieLocale === "en" ||
      (!cookieLocale && isEnglishOnlyAcceptLanguage(acceptLanguage));

    if (wantsEnglish) {
      const url = request.nextUrl.clone();
      url.pathname = withLocalePrefix(barePath, "en");
      const response = NextResponse.redirect(url);
      response.cookies.set(LOCALE_COOKIE, "en", cookieOptions());
      return withLocaleHeader(response, "en");
    }
  }

  if (!isPrefixedEnglish) {
    const url = request.nextUrl.clone();
    url.pathname = barePath === "/" ? "/es" : `/es${barePath}`;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_HEADER, DEFAULT_LOCALE);
    const response = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    return withLocaleHeader(response, DEFAULT_LOCALE);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, "en");
  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  if (!crawler) {
    response.cookies.set(LOCALE_COOKIE, "en", cookieOptions());
  }
  return withLocaleHeader(response, "en");
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
