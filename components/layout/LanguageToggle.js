"use client";

import { usePathname } from "next/navigation";

import { useLocale } from "@/hooks/useLocale";
import { getNavigationChrome } from "@/content/navigation/main";
import {
  COOKIE_MAX_AGE,
  LOCALES,
  LOCALE_COOKIE,
  localizeHref,
  stripLocalePrefix,
} from "@/libs/locale";

function persistLocale(locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname() || "/";
  const chrome = getNavigationChrome(locale);
  const barePath = stripLocalePrefix(pathname);

  return (
    <nav className="language-toggle" aria-label={chrome.languageLabel}>
      {LOCALES.map((code, index) => {
        const href = localizeHref(barePath, code);
        const current = code === locale;

        return (
          <span key={code} className="language-toggle__item">
            {index > 0 ? (
              <span className="language-toggle__rule" aria-hidden="true">
                |
              </span>
            ) : null}
            <a
              href={href}
              className="language-toggle__link"
              lang={code}
              hrefLang={code}
              aria-current={current ? "true" : undefined}
              onClick={() => persistLocale(code)}
            >
              {code.toUpperCase()}
            </a>
          </span>
        );
      })}
    </nav>
  );
}
