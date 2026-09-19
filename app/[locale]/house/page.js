import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import LaCasa from "@/components/sections/LaCasa";

import { siteMetadata } from "@/content/metadata/site";
import { getLaHouseIntro } from "@/content/works/works";
import { pickLocale } from "@/libs/locale";
import { buildPersonSchema } from "@/libs/schema/person";
import { buildBreadcrumbSchema } from "@/libs/schema/breadcrumb";
import { buildHouseCollectionSchema } from "@/libs/schema/collection";
import { buildPageMetadata, publicUrl } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const laHouseIntro = getLaHouseIntro(locale);
  return buildPageMetadata({
    locale,
    pathname: "/house",
    title: `${laHouseIntro.heading} — ${siteMetadata.name}`,
    description: laHouseIntro.subtitle,
  });
}

export default async function HousePage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const laHouseIntro = getLaHouseIntro(locale);
  const schemas = [
    buildHouseCollectionSchema(locale),
    buildPersonSchema(locale),
    buildBreadcrumbSchema([
      { name: siteMetadata.name, url: siteMetadata.url },
      { name: laHouseIntro.heading, url: publicUrl("/house", locale) },
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
        <LaCasa locale={locale} />
      </main>

      <Footer />
    </LayoutClient>
  );
}
