import DiariosConfirmation from "@/components/sections/DiariosConfirmation";
import { getDiariosThanks } from "@/content/diarios/thanks";
import { getCourseSession } from "@/libs/auth";
import { localizedPath, pickLocale } from "@/libs/locale";
import { buildPageMetadata } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const copy = getDiariosThanks(locale);
  return {
    ...buildPageMetadata({
      locale,
      pathname: "/diarios/gracias",
      title: copy.metadataTitle,
      description: copy.metadataDescription,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function DiariosThanksPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const session = await getCourseSession();
  return (
    <DiariosConfirmation
      locale={locale}
      copy={getDiariosThanks(locale)}
      hasAccess={Boolean(session)}
      courseHref={localizedPath("/diarios/arquitecturas", locale)}
    />
  );
}
