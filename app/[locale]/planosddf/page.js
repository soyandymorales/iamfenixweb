import { redirect } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LayoutClient from "@/components/layout/LayoutClient";
import CTADiariosFenix from "@/components/sections/CTADiariosFenix";
import { siteMetadata } from "@/content/metadata/site";
import { pickLocale } from "@/libs/locale";
import { buildPageMetadata } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const lang = pickLocale(locale);
  return buildPageMetadata({
    locale: lang,
    pathname: "/planosddf",
    title: `Diarios del Fénix — ${siteMetadata.name}`,
    description:
      lang === "en"
        ? "A free sequence of 21 practices by email for body, inner peace, and money."
        : "Secuencia gratuita de 21 prácticas por correo para cuerpo, paz interior y dinero.",
  });
}

export function PlanosEntry() {
  return (
    <LayoutClient>
      <Header />
      <main>
        <CTADiariosFenix reveal={false} />
      </main>
      <Footer />
    </LayoutClient>
  );
}

export default async function PlanosPage({ params }) {
  const { locale } = await params;
  if (pickLocale(locale) === "en") redirect("/en/blueprintsddf");
  return <PlanosEntry />;
}
