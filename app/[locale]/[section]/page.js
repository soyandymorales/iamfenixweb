import { notFound } from "next/navigation";

import HomePage, { generateMetadata as homeMetadata } from "../page";
import { HOME_SECTION_IDS, isHomeSection } from "@/libs/home-sections";

export function generateStaticParams() {
  return Object.keys(HOME_SECTION_IDS).map((section) => ({ section }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  if (!isHomeSection(section)) notFound();
  return homeMetadata({ params });
}

export default async function HomeSectionPage({ params }) {
  const { locale, section } = await params;
  if (!isHomeSection(section)) notFound();
  return <HomePage params={Promise.resolve({ locale })} />;
}
