import DiariosCoursePage from "@/components/sections/DiariosCoursePage";
import { diariosCourseMetadata } from "@/content/diarios/courses";

export async function generateMetadata({ searchParams }) {
  const { dia } = await searchParams;
  return diariosCourseMetadata("body", dia);
}

export default async function BodyCourseRoute({ searchParams }) {
  const { dia } = await searchParams;
  return <DiariosCoursePage slug="body" dia={dia} />;
}
