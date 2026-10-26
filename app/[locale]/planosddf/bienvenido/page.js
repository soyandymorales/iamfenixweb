import { redirect } from "next/navigation";

import DiariosConfirmation from "@/components/sections/DiariosConfirmation";
import { getDiariosConfirmation } from "@/content/diarios/confirmation";
import { pickLocale } from "@/libs/locale";
import { buildPageMetadata } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const copy = getDiariosConfirmation(locale);

  return {
    ...buildPageMetadata({
      locale,
      pathname: "/planosddf/bienvenido",
      title: copy.metadataTitle,
      description: copy.metadataDescription,
    }),
    robots: { index: false, follow: false },
  };
}

export function PlanosWelcome({ locale }) {
  return <DiariosConfirmation locale={locale} />;
}

export default async function PlanosWelcomePage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  if (locale === "en") redirect("/en/blueprintsddf/bienvenido");
  return <PlanosWelcome locale={locale} />;
}
