import { redirect } from "next/navigation";

import { localizedPath } from "@/libs/locale";

export async function generateMetadata() {
  return { robots: { index: false, follow: false } };
}

export default async function DineroCourseRoute({ params, searchParams }) {
  const { locale } = await params;
  const { dia } = await searchParams;
  const day = Number.parseInt(String(dia ?? ""), 10);
  const target =
    day >= 15 && day <= 21
      ? `/diarios/arquitecturas/dinero${day}`
      : "/diarios/arquitecturas/dinero";
  redirect(localizedPath(target, locale));
}
