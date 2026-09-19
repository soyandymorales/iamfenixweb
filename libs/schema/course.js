import { siteMetadata } from "@/content/metadata/site";
import { htmlLang, pickLocale } from "@/libs/locale";
import { publicUrl } from "@/libs/seo";

const descriptions = {
  es: "Reto gratuito de 21 días: 3 Arquitecturas y 21 prácticas diarias para diseñar la arquitectura de tu vida.",
  en: "A free 21-day practice: 3 Architectures and 21 daily practices to design the architecture of your life.",
};

export function buildDiariosCourseSchema(locale) {
  const lang = pickLocale(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${siteMetadata.url}/#diarios-del-fenix`,
    name: "Diarios del Fénix",
    url: publicUrl("/diarios", lang),
    description: descriptions[lang],
    inLanguage: htmlLang(lang),
    provider: { "@id": `${siteMetadata.url}/#organization` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "P21D",
    },
  };
}
