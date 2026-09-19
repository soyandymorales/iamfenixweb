import DiariosCoursePage from "@/components/sections/DiariosCoursePage";
import { diariosCourseMetadata } from "@/content/diarios/courses";

export async function generateMetadata({ params, searchParams }) {
  const { locale } = await params;
  const { dia } = await searchParams;
  return diariosCourseMetadata("body", dia, locale);
}

export default async function BodyCourseRoute({ params, searchParams }) {
  const { locale } = await params;
  const { dia } = await searchParams;
  return <DiariosCoursePage slug="body" dia={dia} locale={locale} />;
}
