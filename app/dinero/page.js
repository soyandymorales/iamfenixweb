import DiariosCoursePage from "@/components/sections/DiariosCoursePage";
import { diariosCourseMetadata } from "@/content/diarios/courses";

export async function generateMetadata({ searchParams }) {
  const { dia } = await searchParams;
  return diariosCourseMetadata("dinero", dia);
}

export default async function DineroCourseRoute({ searchParams }) {
  const { dia } = await searchParams;
  return <DiariosCoursePage slug="dinero" dia={dia} />;
}
