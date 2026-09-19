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

import { getSiteCopy } from "@/content/metadata/site";
import { buildOrganizationSchema } from "@/libs/schema/organization";
import { buildPersonSchema } from "@/libs/schema/person";
import { buildDiariosCourseSchema } from "@/libs/schema/course";
import { buildPageMetadata } from "@/libs/seo";
import { pickLocale } from "@/libs/locale";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = getSiteCopy(locale);
  return buildPageMetadata({
    locale,
    pathname: "/",
    title: copy.title,
    description: copy.description,
  });
}

export default async function HomePage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const schemas = [
    buildOrganizationSchema(locale),
    buildPersonSchema(locale),
    buildDiariosCourseSchema(locale),
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
        <SocialProofLogos locale={locale} />
        <TheEcosystem locale={locale} />
        <ArquitecturaFenix />
        <FilosofiaFenix locale={locale} />
        <CTADiariosFenix />
        <TheStory locale={locale} />
        <Testimonials locale={locale} />
        <Metrics locale={locale} />
        <BibliotecaArquitecto locale={locale} />
      </main>

      <Footer />
    </LayoutClient>
  );
}
