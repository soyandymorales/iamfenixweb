import { notFound } from "next/navigation";

import LocaleProvider from "@/components/layout/LocaleProvider";
import { isLocale, LOCALES } from "@/libs/locale";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
