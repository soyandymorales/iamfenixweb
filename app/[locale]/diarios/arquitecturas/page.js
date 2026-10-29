import LayoutClient from "@/components/layout/LayoutClient";
import DiariosWelcome from "@/components/sections/DiariosWelcome";
import { pickLocale } from "@/libs/locale";

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

export default async function ArquitecturasPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);

  return (
    <LayoutClient>
      <main>
        <DiariosWelcome locale={locale} />
      </main>
    </LayoutClient>
  );
}
