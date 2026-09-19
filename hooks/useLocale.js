"use client";

import { createContext, useContext } from "react";

import { DEFAULT_LOCALE } from "@/libs/locale";

export const LocaleContext = createContext(DEFAULT_LOCALE);

export function useLocale() {
  return useContext(LocaleContext);
}
