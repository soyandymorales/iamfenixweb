import { LOCALES } from "@/libs/locale";
import { languageAlternates, publicUrl } from "@/libs/seo";

const routes = [
  "/",
  "/atelier",
  "/house",
  "/diarios",
  "/body",
  "/happeace",
  "/dinero",
];

export default function sitemap() {
  return routes.flatMap((pathname) =>
    LOCALES.map((locale) => ({
      url: publicUrl(pathname, locale),
      alternates: {
        languages: languageAlternates(pathname),
      },
    }))
  );
}
