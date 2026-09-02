import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import BienvenidaAtelier from "@/components/sections/BienvenidaAtelier";
import TheProblem from "@/components/sections/TheProblem";
import HowItWorks from "@/components/sections/HowItWorks";
import TheAtelier from "@/components/sections/TheAtelier";

import { siteMetadata } from "@/content/metadata/site";
import { atelierIntro } from "@/content/services/tiers";

export const metadata = {
  title: `${atelierIntro.title} — ${siteMetadata.name}`,
  description: atelierIntro.subtitle,
  alternates: { canonical: `${siteMetadata.url}/atelier` },
  openGraph: {
    title: `${atelierIntro.title} — ${siteMetadata.name}`,
    description: atelierIntro.subtitle,
    url: `${siteMetadata.url}/atelier`,
    siteName: siteMetadata.brand,
    locale: "es_CO",
    type: "website",
  },
};

export default function AtelierPage() {
  return (
    <LayoutClient>
      <Header />

      <main>
        <BienvenidaAtelier />
        <TheProblem />
        <HowItWorks />
        <TheAtelier />
      </main>

      <Footer />
    </LayoutClient>
  );
}
