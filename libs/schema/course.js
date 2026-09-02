import { siteMetadata } from "@/content/metadata/site";

export function buildDiariosCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${siteMetadata.url}/#diarios-del-fenix`,
    name: "Diarios del Fénix",
    url: `${siteMetadata.url}/diarios`,
    description:
      "Reto gratuito de 21 días: 3 Arquitecturas y 21 prácticas diarias para diseñar la arquitectura de tu vida.",
    inLanguage: siteMetadata.locale,
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
