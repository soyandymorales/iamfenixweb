import DiariosCoursePage from "@/components/sections/DiariosCoursePage";
import { diariosCourseMetadata } from "@/content/diarios/courses";

export async function generateMetadata({ params, searchParams }) {
  const { locale } = await params;
  const { dia } = await searchParams;
  return diariosCourseMetadata("happeace", dia, locale);
}

export default async function HappeaceCourseRoute({ params, searchParams }) {
  const { locale } = await params;
  const { dia } = await searchParams;
  return <DiariosCoursePage slug="happeace" dia={dia} locale={locale} />;
}
