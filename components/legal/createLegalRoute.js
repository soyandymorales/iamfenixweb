import { redirect } from "next/navigation";

import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalDocument, legalPath } from "@/content/legal";
import { siteMetadata } from "@/content/metadata/site";
import { pickLocale } from "@/libs/locale";
import { buildPageMetadata } from "@/libs/seo";

export function createLegalRoute(id, slugLocale) {
  return {
    async generateMetadata({ params }) {
      const { locale } = await params;
      const lang = pickLocale(locale);
      const doc = getLegalDocument(id, lang);
      return buildPageMetadata({
        locale: lang,
        pathname: legalPath(id, lang),
        title: `${doc.title} — ${siteMetadata.name}`,
        description: doc.description,
      });
    },
    async Page({ params }) {
      const { locale } = await params;
      const lang = pickLocale(locale);
      if (lang !== slugLocale) redirect(legalPath(id, lang));
      return <LegalDocument id={id} locale={lang} />;
    },
  };
}
