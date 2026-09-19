import { siteMetadata, getSiteCopy } from "@/content/metadata/site";
import {
  DEFAULT_LOCALE,
  ogLocale,
  pickLocale,
  withLocalePrefix,
} from "@/libs/locale";

export function publicUrl(pathname = "/", locale = DEFAULT_LOCALE) {
  const base = siteMetadata.url.replace(/\/$/, "");
  const path = withLocalePrefix(pathname || "/", locale);
  return path === "/" ? base : `${base}${path}`;
}

export function languageAlternates(pathname = "/") {
  return {
    es: publicUrl(pathname, "es"),
    en: publicUrl(pathname, "en"),
    "x-default": publicUrl(pathname, DEFAULT_LOCALE),
  };
}

export function buildPageMetadata({
  locale,
  pathname = "/",
  title,
  description,
}) {
  const lang = pickLocale(locale);
  const copy = getSiteCopy(lang);
  const pageTitle = title || copy.title;
  const pageDescription = description || copy.description;
  const url = publicUrl(pathname, lang);
  const otherLocale = lang === "en" ? "es" : "en";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
      languages: languageAlternates(pathname),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteMetadata.brand,
      locale: ogLocale(lang),
      alternateLocale: [ogLocale(otherLocale)],
      type: "website",
    },
  };
}
