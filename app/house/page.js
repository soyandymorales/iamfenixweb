import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import LaCasa from "@/components/sections/LaCasa";

import { siteMetadata } from "@/content/metadata/site";
import { laHouseIntro } from "@/content/works/works";
import { buildPersonSchema } from "@/libs/schema/person";
import { buildBreadcrumbSchema } from "@/libs/schema/breadcrumb";
import { buildHouseCollectionSchema } from "@/libs/schema/collection";

export const metadata = {
  title: `${laHouseIntro.heading} — ${siteMetadata.name}`,
  description: laHouseIntro.subtitle,
  alternates: { canonical: `${siteMetadata.url}/house` },
  openGraph: {
    title: `${laHouseIntro.heading} — ${siteMetadata.name}`,
    description: laHouseIntro.subtitle,
    url: `${siteMetadata.url}/house`,
    siteName: siteMetadata.brand,
    locale: "es_CO",
    type: "website",
  },
};

export default function HousePage() {
  const schemas = [
    buildHouseCollectionSchema(),
    buildPersonSchema(),
    buildBreadcrumbSchema([
      { name: siteMetadata.name, url: siteMetadata.url },
      { name: laHouseIntro.heading, url: `${siteMetadata.url}/house` },
    ]),
  ];

  return (
    <LayoutClient>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />

      <main>
        <LaCasa />
      </main>

      <Footer />
    </LayoutClient>
  );
}
