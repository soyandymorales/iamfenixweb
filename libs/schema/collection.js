import { siteMetadata } from "@/content/metadata/site";
import { laHouseIntro, works } from "@/content/works/works";

export function buildHouseCollectionSchema() {
  const url = `${siteMetadata.url}/house`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    name: laHouseIntro.heading,
    description: laHouseIntro.subtitle,
    url,
    isPartOf: { "@id": `${siteMetadata.url}/#organization` },
    about: { "@id": `${siteMetadata.url}/#founder` },
    mainEntity: {
      "@type": "ItemList",
      name: laHouseIntro.title,
      itemListElement: works.map((work, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: work.title,
        description: work.description,
      })),
    },
  };
}
