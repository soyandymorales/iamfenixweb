import { notFound, redirect } from "next/navigation";

import HomePage, { generateMetadata as homeMetadata } from "../page";
import { HOME_SECTION_IDS, isHomeSection } from "@/libs/home-sections";
import { localizedPath, pickLocale, withLocalePrefix } from "@/libs/locale";

export function generateStaticParams() {
  return Object.keys(HOME_SECTION_IDS).map((section) => ({ section }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  if (!isHomeSection(section)) notFound();
  return homeMetadata({ params });
}

export default async function HomeSectionPage({ params }) {
  const { locale: rawLocale, section } = await params;
  if (!isHomeSection(section)) notFound();

  const locale = pickLocale(rawLocale);
  const canonical = localizedPath(`/${section}`, locale);
  const requested = withLocalePrefix(`/${section}`, locale);
  if (canonical !== requested) redirect(canonical);

  return <HomePage params={Promise.resolve({ locale: rawLocale })} />;
}
