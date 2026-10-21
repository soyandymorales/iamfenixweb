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
      pathname: "/diarios/bienvenido",
      title: copy.metadataTitle,
      description: copy.metadataDescription,
    }),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DiariosConfirmationPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);

  return <DiariosConfirmation locale={locale} />;
}
