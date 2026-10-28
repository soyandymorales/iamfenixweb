import Footer from "@/components/layout/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import DiariosCart from "@/components/sections/DiariosCart";
import { getDiariosOffer } from "@/content/diarios/offer";
import { siteMetadata } from "@/content/metadata/site";
import { pickLocale } from "@/libs/locale";
import { isCheckoutConfigured, isSandbox, paypalClientId, paypalScriptUrl } from "@/libs/paypal";
import { buildPageMetadata } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const offer = getDiariosOffer(locale);
  return {
    ...buildPageMetadata({
      locale,
      pathname: "/diarios/checkout",
      title: `${offer.checkoutTitle} — Diarios del Fénix — ${siteMetadata.name}`,
      description: offer.metadataDescription,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function DiariosCheckoutPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const ready = isCheckoutConfigured();

  return (
    <LayoutClient>
      <main>
        <DiariosCart
          locale={locale}
          checkoutReady={ready}
          scriptSrc={ready ? paypalScriptUrl() : ""}
          clientId={ready ? paypalClientId() : ""}
          sandbox={isSandbox()}
        />
      </main>
      <Footer />
    </LayoutClient>
  );
}
