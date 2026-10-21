import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import BienvenidaAtelier from "@/components/sections/BienvenidaAtelier";
import HowItWorks from "@/components/sections/HowItWorks";
import AtelierOffers from "@/components/sections/AtelierOffers";

import { siteMetadata } from "@/content/metadata/site";
import { getAtelierIntro } from "@/content/services/tiers";
import { pickLocale } from "@/libs/locale";
import { buildPageMetadata } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const atelierIntro = getAtelierIntro(locale);
  return buildPageMetadata({
    locale,
    pathname: "/atelier",
    title: `${atelierIntro.title} — ${siteMetadata.name}`,
    description: atelierIntro.subtitle,
  });
}

export default async function AtelierPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);

  return (
    <LayoutClient>
      <Header />

      <main>
        <BienvenidaAtelier locale={locale} />
        <HowItWorks locale={locale} />
        <AtelierOffers locale={locale} />
      </main>

      <Footer />
    </LayoutClient>
  );
}
