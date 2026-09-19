"use client";

import { LocaleContext } from "@/hooks/useLocale";
import { pickLocale } from "@/libs/locale";

export default function LocaleProvider({ locale, children }) {
  return (
    <LocaleContext.Provider value={pickLocale(locale)}>
      {children}
    </LocaleContext.Provider>
  );
}
