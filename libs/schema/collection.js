import { getLaHouseIntro, getWorks } from "@/content/works/works";
import { siteMetadata } from "@/content/metadata/site";
import { publicUrl } from "@/libs/seo";

export function buildHouseCollectionSchema(locale) {
  const intro = getLaHouseIntro(locale);
  const works = getWorks(locale);
  const url = publicUrl("/house", locale);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    name: intro.heading,
    description: intro.subtitle,
    url,
    isPartOf: { "@id": `${siteMetadata.url}/#organization` },
    about: { "@id": `${siteMetadata.url}/#founder` },
    mainEntity: {
      "@type": "ItemList",
      name: intro.title,
      itemListElement: works.map((work, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: work.title,
        description: work.description,
      })),
    },
  };
}
