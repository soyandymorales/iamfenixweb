import { redirect } from "next/navigation";

import { localizedPath } from "@/libs/locale";

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

export default async function BodyCourseRoute({ params, searchParams }) {
  const { locale } = await params;
  const { dia } = await searchParams;
  const day = Number.parseInt(String(dia ?? ""), 10);
  const target =
    day >= 1 && day <= 7
      ? `/diarios/arquitecturas/body${day}`
      : "/diarios/arquitecturas/body";
  redirect(localizedPath(target, locale));
}
