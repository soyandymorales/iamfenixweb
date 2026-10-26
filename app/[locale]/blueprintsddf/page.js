import { redirect } from "next/navigation";

import { PlanosEntry, generateMetadata as planosMetadata } from "../planosddf/page";
import { localizedPath } from "@/libs/locale";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (locale !== "en") return {};
  return planosMetadata({ params });
}

export default async function BlueprintsPage({ params }) {
  const { locale } = await params;
  if (locale !== "en") redirect(localizedPath("/planosddf", locale));
  return <PlanosEntry />;
}
