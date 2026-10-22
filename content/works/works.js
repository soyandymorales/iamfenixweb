import { localize, localizeHref } from "@/libs/locale";

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
    image: {
      src: "/images/Sin título-1.jpg",
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
    image: {
      src: "/images/story/7.jpg",
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
];

const worksCopy = {
  es: {
    "diario-de-un-fenix": {
      type: "Libro",
      tag: "Pronto",
      description: "Guía para renacer y elevar tu vitalidad, felicidad, paz interior, y financiera.",
      imageAlt: "Una Biblia sobre una mesa de trabajo, acompañada por una mano.",
      cta: null,
    },
    racecrew: {
      type: "Web",
      tag: "Live",
      description: "Corre el mundo, colecciona memorias inolvidables con tu crew.",
      imageAlt: "Andy Morales durante una carrera de fondo.",
      cta: "Visitar",
    },
    kingdominion: {
      type: "App",
      tag: "Pronto",
      description:
        "Prospera sin perder tu alma con principios bíblicos.",
      imageAlt: "Tres memorias de cuerpo, presencia y familia.",
      cta: null,
    },
    monkhouse: {
      type: "Web",
      tag: "Pronto",
      description: "El monasterio moderno de productos de bienestar para el arte de vivir.",
      imageAlt: "Una figura recorre en silencio un sendero entre árboles.",
      cta: null,
    },
    "diarios-del-fenix": {
      type: "Curso digital",
      tag: "Live",
      description: "Eleva la arquitectura de tu cuerpo, paz interior y financiera en 21 días.",
      imageAlt: "Una mano descansa sobre una Biblia abierta al trabajo interior.",
      cta: "Comprar $37",
    },
  },
  en: {
    "diario-de-un-fenix": {
      type: "Book",
      tag: "Soon",
      description:
        "A guide to renewal and greater vitality, happiness, inner peace, and financial well-being.",
      imageAlt: "A Bible on a worktable, accompanied by a hand.",
      cta: null,
    },
    racecrew: {
      type: "Web",
      tag: "Live",
      description: "Run the world and collect unforgettable memories with your crew.",
      imageAlt: "Andy Morales during a long-distance race.",
      cta: "Visit",
    },
    kingdominion: {
      type: "App",
      tag: "Soon",
      description: "Prosper without losing your soul through biblical principles.",
      imageAlt: "Three memories of body, presence, and family.",
      cta: null,
    },
    monkhouse: {
      type: "Web",
      tag: "Soon",
      description: "The modern monastery of wellness products for the art of living.",
      imageAlt: "A figure walks quietly along a path among trees.",
      cta: null,
    },
    "diarios-del-fenix": {
      type: "Digital course",
      tag: "Live",
      description:
        "Elevate the architecture of your body, inner peace, and finances in 21 days.",
      imageAlt: "A hand rests on a Bible opened for inner work.",
      cta: "Buy $37",
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
    href: work.href ? localizeHref(work.href, locale) : null,
  }));
}
