import { siteMetadata } from "@/content/metadata/site";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteMetadata.url}/#organization`,
    name: siteMetadata.name,
    url: siteMetadata.url,
    description: siteMetadata.description,
    sameAs: [siteMetadata.social.youtube, siteMetadata.social.linkedin],
    founder: { "@id": `${siteMetadata.url}/#founder` },
  };
}
