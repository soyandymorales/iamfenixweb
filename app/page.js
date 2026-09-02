import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import Hero from "@/components/hero/Hero";
import TheEcosystem from "@/components/sections/TheEcosystem";
import SocialProofLogos from "@/components/sections/SocialProofLogos";
import FilosofiaFenix from "@/components/sections/FilosofiaFenix";
import ArquitecturaFenix from "@/components/sections/ArquitecturaFenix";
import TheStory from "@/components/sections/TheStory";
import Testimonials from "@/components/sections/Testimonials";
import Metrics from "@/components/sections/Metrics";
import BibliotecaArquitecto from "@/components/sections/BibliotecaArquitecto";
import CTADiariosFenix from "@/components/sections/CTADiariosFenix";

import { siteMetadata } from "@/content/metadata/site";
import { buildOrganizationSchema } from "@/libs/schema/organization";
import { buildPersonSchema } from "@/libs/schema/person";
import { buildDiariosCourseSchema } from "@/libs/schema/course";

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  alternates: { canonical: siteMetadata.url },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.brand,
    locale: "es_CO",
    type: "website",
  },
};

export default function HomePage() {
  const schemas = [
    buildOrganizationSchema(),
    buildPersonSchema(),
    buildDiariosCourseSchema(),
  ];

  return (
    <LayoutClient>
      {schemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />

      <main>
        <Hero />
        <SocialProofLogos />
        <TheEcosystem />
        <ArquitecturaFenix />
        <FilosofiaFenix />
        <CTADiariosFenix />
        <TheStory />
        <Testimonials />
        <Metrics />
        <BibliotecaArquitecto />
      </main>

      <Footer />
    </LayoutClient>
  );
}
