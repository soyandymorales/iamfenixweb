import { getSiteCopy, siteMetadata } from "@/content/metadata/site";
import { htmlLang } from "@/libs/locale";

export function buildOrganizationSchema(locale) {
  const copy = getSiteCopy(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteMetadata.url}/#organization`,
    name: siteMetadata.name,
    url: siteMetadata.url,
    description: copy.description,
    availableLanguage: ["es", "en"],
    inLanguage: htmlLang(locale),
    sameAs: [siteMetadata.social.youtube, siteMetadata.social.linkedin],
    founder: { "@id": `${siteMetadata.url}/#founder` },
  };
}
