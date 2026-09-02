import LayoutClient from "@/components/layout/LayoutClient";
import DiariosWelcome from "@/components/sections/DiariosWelcome";

import { diariosWelcome } from "@/content/diarios/welcome";
import { siteMetadata } from "@/content/metadata/site";
import { buildBreadcrumbSchema } from "@/libs/schema/breadcrumb";
import { buildDiariosCourseSchema } from "@/libs/schema/course";

const pageTitle = `Diarios del Fénix — ${siteMetadata.name}`;
const pageDescription = `${diariosWelcome.title} ${diariosWelcome.question}`;
const pageUrl = `${siteMetadata.url}/diarios`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: siteMetadata.brand,
    locale: "es_CO",
    type: "website",
  },
};

export default function DiariosPage() {
  const schemas = [
    buildDiariosCourseSchema(),
    buildBreadcrumbSchema([
      { name: siteMetadata.name, url: siteMetadata.url },
      { name: "Diarios del Fénix", url: pageUrl },
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
        <DiariosWelcome />
      </main>
    </LayoutClient>
  );
}
