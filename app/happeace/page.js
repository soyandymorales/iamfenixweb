import DiariosCoursePage from "@/components/sections/DiariosCoursePage";
import { diariosCourseMetadata } from "@/content/diarios/courses";

export async function generateMetadata({ searchParams }) {
  const { dia } = await searchParams;
  return diariosCourseMetadata("happeace", dia);
}

export default async function HappeaceCourseRoute({ searchParams }) {
  const { dia } = await searchParams;
  return <DiariosCoursePage slug="happeace" dia={dia} />;
}
