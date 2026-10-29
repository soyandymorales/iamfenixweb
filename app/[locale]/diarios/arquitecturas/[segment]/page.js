import { notFound } from "next/navigation";

import LayoutClient from "@/components/layout/LayoutClient";
import DiariosArchitecture from "@/components/sections/DiariosArchitecture";
import DiariosCoursePage from "@/components/sections/DiariosCoursePage";
import { parseCourseSegment } from "@/content/diarios/courses";
import { pickLocale } from "@/libs/locale";

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

export default async function ArquitecturaSegmentPage({ params }) {
  const { locale: rawLocale, segment } = await params;
  const locale = pickLocale(rawLocale);
  const parsed = parseCourseSegment(segment);
  if (!parsed) notFound();

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
