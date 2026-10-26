import { notFound, redirect } from "next/navigation";

import LayoutClient from "@/components/layout/LayoutClient";
import DiariosArchitecture from "@/components/sections/DiariosArchitecture";
import DiariosCoursePage from "@/components/sections/DiariosCoursePage";
import { parseCourseSegment } from "@/content/diarios/courses";
import { getCourseSession } from "@/libs/auth";
import { localizedPath, pickLocale } from "@/libs/locale";

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

export default async function ArquitecturaSegmentPage({ params }) {
  const { locale: rawLocale, segment } = await params;
  const locale = pickLocale(rawLocale);
  const parsed = parseCourseSegment(segment);
  if (!parsed) notFound();

  const session = await getCourseSession();
  if (!session) redirect(localizedPath("/diarios", locale));

  if (parsed.kind === "architecture") {
    return (
      <LayoutClient>
        <main>
          <DiariosArchitecture slug={parsed.slug} locale={locale} />
        </main>
      </LayoutClient>
    );
  }

  return <DiariosCoursePage slug={parsed.slug} dia={parsed.day} locale={locale} />;
}
