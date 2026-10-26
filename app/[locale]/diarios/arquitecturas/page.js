import { redirect } from "next/navigation";

import LayoutClient from "@/components/layout/LayoutClient";
import DiariosWelcome from "@/components/sections/DiariosWelcome";
import { getCourseSession } from "@/libs/auth";
import { localizedPath, pickLocale } from "@/libs/locale";

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

export default async function ArquitecturasPage({ params }) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const session = await getCourseSession();
  if (!session) redirect(localizedPath("/diarios", locale));

  return (
    <LayoutClient>
      <main>
        <DiariosWelcome locale={locale} />
      </main>
    </LayoutClient>
  );
}
