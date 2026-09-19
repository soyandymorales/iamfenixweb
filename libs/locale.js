// Locale contract — two readings of one house: Spanish at `/`, English at `/en`.
// Country is not a language. Do not add es-MX, en-CA, or other regional clones.

export const LOCALES = ["es", "en"];
export const DEFAULT_LOCALE = "es";
export const PREFIX_LOCALE = "en";

export const LOCALE_COOKIE = "fenix-locale";
export const LOCALE_HEADER = "x-fenix-locale";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value) {
  return LOCALES.includes(value);
}

export function pickLocale(value) {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function localize(record, locale) {
  const key = pickLocale(locale);
  return record[key] ?? record[DEFAULT_LOCALE];
}

export function htmlLang(locale) {
  return pickLocale(locale);
}

export function ogLocale(locale) {
  return pickLocale(locale) === "en" ? "en_US" : "es_LA";
}

export function dateLocale(locale) {
  return pickLocale(locale) === "en" ? "en" : "es";
}

export function stripLocalePrefix(pathname) {
  const path = pathname || "/";
  if (path === "/en" || path === "/es") return "/";
  if (path.startsWith("/en/") || path.startsWith("/es/")) {
    const rest = path.slice(3);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return path;
}

export function withLocalePrefix(pathname, locale) {
  const path = pathname?.startsWith("/") ? pathname : `/${pathname || ""}`;
  const bare = stripLocalePrefix(path) || "/";

  if (pickLocale(locale) === DEFAULT_LOCALE) {
    return bare;
  }

  return bare === "/" ? "/en" : `/en${bare}`;
}

export function localizeHref(href, locale) {
  if (!href) return href;
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }
  if (href.startsWith("#")) return href;

  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
  const localized = withLocalePrefix(path || "/", locale);
  return `${localized}${hash}`;
}

export function isEnglishOnlyAcceptLanguage(header) {
  if (!header) return false;

  const tags = header.split(",").map((part) => {
    const [rawTag, ...params] = part.trim().split(";");
    const qParam = params.find((param) => param.trim().startsWith("q="));
    const quality = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
    return {
      tag: (rawTag || "").trim().toLowerCase(),
      quality: Number.isNaN(quality) ? 0 : quality,
    };
  });

  const relevant = tags.filter((item) => item.tag && item.quality > 0);
  if (relevant.length === 0) return false;

  const hasEn = relevant.some(
    (item) => item.tag === "en" || item.tag.startsWith("en-")
  );
  const hasEs = relevant.some(
    (item) => item.tag === "es" || item.tag.startsWith("es-")
  );

  return hasEn && !hasEs;
}

export function isCrawler(userAgent) {
  if (!userAgent) return false;
  return /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|twitterbot|facebookexternalhit|linkedinbot|slackbot|applebot|semrushbot|ahrefsbot|pingdom|uptimerobot/i.test(
    userAgent
  );
}
