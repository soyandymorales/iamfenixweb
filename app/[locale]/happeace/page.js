import { redirect } from "next/navigation";

import { localizedPath } from "@/libs/locale";

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

export default async function HappeaceCourseRoute({ params, searchParams }) {
  const { locale } = await params;
  const { dia } = await searchParams;
  const day = Number.parseInt(String(dia ?? ""), 10);
  const target =
    day >= 8 && day <= 14
      ? `/diarios/arquitecturas/happeace${day}`
      : "/diarios/arquitecturas/happeace";
  redirect(localizedPath(target, locale));
}
