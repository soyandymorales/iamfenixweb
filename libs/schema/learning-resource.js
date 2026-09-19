import { siteMetadata } from "@/content/metadata/site";
import { htmlLang } from "@/libs/locale";

export function buildArchitectureResourceSchema(course, locale) {
  const url = `${siteMetadata.url}${course.href}`;

  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": `${url}#resource`,
    name: course.title,
    description: course.definition,
    url,
    inLanguage: htmlLang(locale),
    learningResourceType: "Practice",
    timeRequired: "P7D",
    isPartOf: { "@id": `${siteMetadata.url}/#diarios-del-fenix` },
    provider: { "@id": `${siteMetadata.url}/#organization` },
  };
}
