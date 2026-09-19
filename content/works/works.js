import { localize } from "@/libs/locale";

const intro = {
  es: {
    eyebrow: "Fénix House",
    heading: "La House",
    title: "Una colección de obras para el arte de vivir",
    subtitle:
      "Ideas, libros, herramientas y experiencias que creo para el arte de vivir.",
  },
  en: {
    eyebrow: "Fénix House",
    heading: "The House",
    title: "A collection of works for the art of living",
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
    id: "diario-de-un-fenix",
    title: "Diario de un Fénix",
    mark: "journal",
    status: "queue",
    href: null,
  },
  {
    id: "racecrew",
    title: "Racecrew",
    mark: "path",
    status: "live",
    href: null,
  },
  {
    id: "kingdominion",
    title: "Kingdominion",
    mark: "lamp",
    status: "queue",
    href: null,
  },
  {
    id: "monkhouse",
    title: "Monkhouse",
    mark: "threshold",
    status: "queue",
    href: null,
  },
];

const worksCopy = {
  es: {
    "diario-de-un-fenix": {
      type: "Libro",
      tag: "Pronto",
      description: "Renace cada día a través de la práctica escrita.",
      cta: null,
    },
    racecrew: {
      type: "Experiencias",
      tag: "Live",
      description: "Colecciona memorias.",
      cta: "Descubrir",
    },
    kingdominion: {
      type: "Objeto",
      tag: "Pronto",
      description:
        "Prospera sin perder tu alma con principios bíblicos. La lámpara representa La Palabra iluminando las decisiones financieras.",
      cta: null,
    },
    monkhouse: {
      type: "Atelier de objetos",
      tag: "Pronto",
      description: "El monasterio moderno de objetos útiles para el arte de vivir.",
      cta: null,
    },
  },
  en: {
    "diario-de-un-fenix": {
      type: "Book",
      tag: "Soon",
      description: "Be born again each day through written practice.",
      cta: null,
    },
    racecrew: {
      type: "Experiences",
      tag: "Live",
      description: "Collect memories.",
      cta: "Discover",
    },
    kingdominion: {
      type: "Object",
      tag: "Soon",
      description:
        "Prosper without losing your soul, by biblical principles. The lamp stands for the Word illuminating financial decisions.",
      cta: null,
    },
    monkhouse: {
      type: "Object atelier",
      tag: "Soon",
      description: "The modern monastery of useful objects for the art of living.",
      cta: null,
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
  }));
}
