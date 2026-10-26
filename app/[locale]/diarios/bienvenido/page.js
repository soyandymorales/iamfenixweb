import { redirect } from "next/navigation";

import { localizedPath } from "@/libs/locale";

export default async function LegacyDiariosWelcome({ params }) {
  const { locale } = await params;
  redirect(localizedPath("/planosddf/bienvenido", locale));
}
