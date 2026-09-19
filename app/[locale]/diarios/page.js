import LayoutClient from "@/components/layout/LayoutClient";
import DiariosWelcome from "@/components/sections/DiariosWelcome";

import { getDiariosWelcome } from "@/content/diarios/welcome";
import { siteMetadata } from "@/content/metadata/site";
import { pickLocale } from "@/libs/locale";
import { buildBreadcrumbSchema } from "@/libs/schema/breadcrumb";
import { buildDiariosCourseSchema } from "@/libs/schema/course";
import { buildPageMetadata, publicUrl } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const welcome = getDiariosWelcome(locale);
  return buildPageMetadata({
    locale,
    pathname: "/diarios",
    title: `Diarios del Fénix — ${siteMetadata.name}`,
    description: `${welcome.title} ${welcome.question}`,
  });
}

export default async function DiariosPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
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

      <main>
        <DiariosWelcome locale={locale} />
      </main>
    </LayoutClient>
  );
}
