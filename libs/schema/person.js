import { getFounder } from "@/content/entities/founder";
import { siteMetadata } from "@/content/metadata/site";

export function buildPersonSchema(locale) {
  const founder = getFounder(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteMetadata.url}/#founder`,
    name: founder.name,
    jobTitle: founder.title,
    url: siteMetadata.url,
    sameAs: [siteMetadata.social.linkedin, siteMetadata.social.youtube],
    worksFor: { "@id": `${siteMetadata.url}/#organization` },
  };
}
