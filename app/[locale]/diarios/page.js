import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LayoutClient from "@/components/layout/LayoutClient";
import DiariosOffer from "@/components/sections/DiariosOffer";
import { getDiariosOffer } from "@/content/diarios/offer";
import { siteMetadata } from "@/content/metadata/site";
import { pickLocale } from "@/libs/locale";
import { buildBreadcrumbSchema } from "@/libs/schema/breadcrumb";
import { buildDiariosCourseSchema } from "@/libs/schema/course";
import { buildPageMetadata, publicUrl } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const lang = pickLocale(locale);
  const offer = getDiariosOffer(lang);
  return buildPageMetadata({
    locale: lang,
    pathname: "/diarios",
    title: `Diarios del Fénix — ${siteMetadata.name}`,
    description: offer.metadataDescription,
  });
}

export default async function DiariosPage({ params, searchParams }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const query = await searchParams;
  const schemas = [
    buildDiariosCourseSchema(locale),
    buildBreadcrumbSchema([
      { name: siteMetadata.name, url: siteMetadata.url },
      { name: "Diarios del Fénix", url: publicUrl("/diarios", locale) },
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
        <DiariosOffer locale={locale} linkError={query?.acceso === "enlace"} />
      </main>
      <Footer />
    </LayoutClient>
  );
}
