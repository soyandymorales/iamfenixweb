import { redirect } from "next/navigation";

import { PlanosWelcome, generateMetadata as welcomeMetadata } from "../../planosddf/bienvenido/page";
import { localizedPath, pickLocale } from "@/libs/locale";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (locale !== "en") return {};
  return welcomeMetadata({ params });
}

export default async function BlueprintsWelcomePage({ params }) {
  const { locale } = await params;
  const lang = pickLocale(locale);
  if (lang !== "en") redirect(localizedPath("/planosddf/bienvenido", lang));
  return <PlanosWelcome locale={lang} />;
}
