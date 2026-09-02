import { siteMetadata } from "@/content/metadata/site";

export function buildArchitectureResourceSchema(course) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": `${siteMetadata.url}${course.href}#resource`,
    name: course.title,
    description: course.definition,
    url: `${siteMetadata.url}${course.href}`,
    inLanguage: siteMetadata.locale,
    learningResourceType: "Practice",
    timeRequired: "P7D",
    isPartOf: { "@id": `${siteMetadata.url}/#diarios-del-fenix` },
    provider: { "@id": `${siteMetadata.url}/#organization` },
  };
}
