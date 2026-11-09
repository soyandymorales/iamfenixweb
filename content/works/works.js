import { statSync } from "node:fs";
import path from "node:path";

import { localize, localizeHref } from "@/libs/locale";

function withImageVersion(src) {
  if (!src?.startsWith("/")) return src;

  try {
    const file = path.join(process.cwd(), "public", src);
    const version = Math.round(statSync(file).mtimeMs);
    return `${src}?v=${version}`;
  } catch {
    return src;
  }
}

const intro = {
  es: {
    eyebrow: "Fénix Publishing House",
    heading: "La House",
    title: "Obras para el arte de vivir",
    subtitle:
      "Ideas, libros, herramientas y experiencias que creo para el arte de vivir.",
  },
  en: {
    eyebrow: "Fénix Publishing House",
    heading: "The House",
    title: "Works for the art of living",
    subtitle:
      "Ideas, books, tools, and experiences I create for the art of living.",
  },
};

const empty = {
  es: {
    title: "Las obras se están cultivando.",
    body: "Vuelve cuando estén listas para habitarse.",
  },
  en: {
    title: "The works are still being cultivated.",
    body: "Return when they are ready to be inhabited.",
  },
};

const worksBase = [
  {
    id: "racecrew",
    number: "01",
    title: "Racecrew",
    mark: "path",
    status: "live",
    poster: true,
    image: {
      src: "/images/Racecrew.png",
      position: "center",
    },
    href: "http://racecrew.io/",
  },
  {
    id: "diarios-del-fenix",
    number: "02",
    title: "Diarios del Fénix",
    mark: "journal",
    status: "live",
    poster: true,
    image: {
      src: "/images/DDFposter.png",
      position: "center",
    },
    href: "/diarios",
  },
  {
    id: "monkhouse",
    number: "03",
    title: "Monkhouse",
    mark: "threshold",
    status: "queue",
    image: {
      src: "/images/story/6.jpg",
      position: "center",
    },
    href: null,
  },
  {
    id: "diario-de-un-fenix",
    number: "04",
    title: "Diario de un Fénix",
    mark: "journal",
    status: "queue",
    image: {
      src: "/images/story/7.jpg",
      position: "center",
    },
    href: null,
  },
  {
    id: "kingdominion",
    number: "05",
    title: "Kingdominion",
    mark: "lamp",
    status: "queue",
    image: {
      src: "/images/story/9.jpg",
      position: "center",
    },
    href: null,
  },
  {
    id: "directorios",
    number: "06",
    title: "Directorios",
    mark: "wing",
    status: "queue",
    href: null,
  },
];

const worksCopy = {
  es: {
    "diario-de-un-fenix": {
      type: "Libro",
      tag: "Pronto",
      description: "Guía para renacer y elevar tu vitalidad, felicidad, paz interior, y financiera.",
      imageAlt: "Una Biblia sobre una mesa de trabajo, acompañada por una mano.",
    },
    racecrew: {
      type: "Web",
      tag: "Live",
      description: "Corre el mundo, colecciona memorias inolvidables con tu crew.",
      imageAlt:
        "Cartel de Racecrew: un triatleta de espaldas frente al mar, con nadadores al fondo.",
    },
    kingdominion: {
      type: "App",
      tag: "Pronto",
      description:
        "Prospera sin perder tu alma con principios bíblicos.",
      imageAlt: "Tres memorias de cuerpo, presencia y familia.",
    },
    monkhouse: {
      type: "Web",
      tag: "Pronto",
      description: "El monasterio moderno de productos de bienestar para el arte de vivir.",
      imageAlt: "Una figura recorre en silencio un sendero entre árboles.",
    },
    directorios: {
      type: "Software",
      tag: "Pronto",
      description: "Publica fichas en directorios web a partir de lo que cargas.",
      imageAlt: "Isologo de Fénix.",
    },
    "diarios-del-fenix": {
      type: "Curso digital",
      tag: "Live",
      description: "Eleva la arquitectura de tu cuerpo, paz interior y financiera en 21 días.",
      imageAlt:
        "Cartel de Diarios del Fénix: un hombre camina por un sendero de bosque hacia la luz.",
    },
  },
  en: {
    "diario-de-un-fenix": {
      type: "Book",
      tag: "Soon",
      description:
        "A guide to renewal and greater vitality, happiness, inner peace, and financial well-being.",
      imageAlt: "A Bible on a worktable, accompanied by a hand.",
    },
    racecrew: {
      type: "Web",
      tag: "Live",
      description: "Run the world and collect unforgettable memories with your crew.",
      imageAlt:
        "Racecrew poster: a triathlete seen from behind, facing the sea with swimmers in the distance.",
    },
    kingdominion: {
      type: "App",
      tag: "Soon",
      description: "Prosper without losing your soul through biblical principles.",
      imageAlt: "Three memories of body, presence, and family.",
    },
    monkhouse: {
      type: "Web",
      tag: "Soon",
      description: "The modern monastery of wellness products for the art of living.",
      imageAlt: "A figure walks quietly along a path among trees.",
    },
    directorios: {
      type: "Software",
      tag: "Soon",
      description: "Publish listings in web directories from what you upload.",
      imageAlt: "Fénix mark.",
    },
    "diarios-del-fenix": {
      type: "Digital course",
      tag: "Live",
      description:
        "Elevate the architecture of your body, inner peace, and finances in 21 days.",
      imageAlt:
        "Diarios del Fénix poster: a man walks a forest path toward the light.",
    },
  },
};

export function getLaHouseIntro(locale) {
  return localize(intro, locale);
}

export function getLaHouseEmpty(locale) {
  return localize(empty, locale);
}

export function getWorks(locale) {
  const localized = localize(worksCopy, locale);
  return worksBase.map((work) => ({
    ...work,
    ...localized[work.id],
    image: work.image
      ? { ...work.image, src: withImageVersion(work.image.src) }
      : work.image,
    href: work.href ? localizeHref(work.href, locale) : null,
  }));
}
