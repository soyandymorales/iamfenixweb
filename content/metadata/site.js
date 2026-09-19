import { localize } from "@/libs/locale";

// Canonical site identity — names remain stable across languages.
export const siteMetadata = {
  name: "Fénix",
  brand: "i . am Fénix",
  url: "https://iamfenix.com",
  founder: "Andy Morales",
  locale: "es",
  social: {
    youtube: "https://www.youtube.com/@soyandymorales",
    linkedin: "https://www.linkedin.com/in/soyandymorales/",
    strava: "https://strava.app.link/Et4cll8Y35b",
  },
};

const copy = {
  es: {
    title: "Fénix — Una casa para el arte de vivir",
    description:
      "Arquitectura Humana. Diseña, integra, custodia y expande la arquitectura detrás de una obra de vida extraordinaria: cuerpo, paz interior y mayordomía del dinero.",
    tagline: "Una casa para el arte de vivir.",
    colophon: "Arquitectura Humana",
  },
  en: {
    title: "Fénix — A house for the art of living",
    description:
      "Human Architecture. Design, integrate, steward, and expand the architecture behind an extraordinary life’s work: body, inner peace, and the stewardship of money.",
    tagline: "A house for the art of living.",
    colophon: "Human Architecture",
  },
};

export function getSiteCopy(locale) {
  return localize(copy, locale);
}
