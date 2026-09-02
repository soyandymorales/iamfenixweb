import { siteMetadata } from "@/content/metadata/site";
import { founder } from "@/content/entities/founder";

export function buildPersonSchema() {
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
