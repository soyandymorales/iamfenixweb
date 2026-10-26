import { getDiariosOffer } from "@/content/diarios/offer";
import { siteMetadata } from "@/content/metadata/site";
import { htmlLang, pickLocale } from "@/libs/locale";
import { publicUrl } from "@/libs/seo";

export function buildDiariosCourseSchema(locale) {
  const lang = pickLocale(locale);
  const offer = getDiariosOffer(lang);

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${siteMetadata.url}/#diarios-del-fenix`,
    name: "Diarios del Fénix",
    url: publicUrl("/diarios", lang),
    description: offer.metadataDescription,
    inLanguage: htmlLang(lang),
    provider: { "@id": `${siteMetadata.url}/#organization` },
    offers: {
      "@type": "Offer",
      price: String(offer.priceAmount),
      priceCurrency: offer.priceCurrency,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "P21D",
    },
  };
}
