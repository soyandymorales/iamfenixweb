import { siteMetadata } from "@/content/metadata/site";
import { pickLocale } from "@/libs/locale";

export function siteOrigin() {
  return (process.env.SITE_URL || siteMetadata.url).replace(/\/$/, "");
}

export function accessLink(token, locale) {
  const url = new URL("/api/auth/callback", siteOrigin());
  url.searchParams.set("token", token);
  url.searchParams.set("locale", pickLocale(locale));
  return url.toString();
}
