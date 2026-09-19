import { localize, localizeHref } from "@/libs/locale";

const copy = {
  es: {
    label: "El ecosistema Fénix",
    chambers: [
      {
        id: "atelier",
        house: "Fénix",
        room: "Atelier",
        kicker: "Práctica privada",
        description:
          "Arquitectura personalizada para fundadores, ejecutivos y atletas.",
        cta: "Entrar",
        href: "/atelier",
        illustration: {
          src: "/images/atelier.png",
          alt: "Mesa de dibujo con el Hombre de Vitruvio, lámpara de bronce y el emblema del fénix.",
          width: 700,
          height: 700,
        },
      },
      {
        id: "house",
        house: "Fénix",
        room: "House",
        kicker: "Obras",
        description: "Libros, aplicaciones y objetos para el arte de vivir.",
        cta: "Descubrir",
        href: "/house",
        illustration: {
          src: "/images/house.png",
          alt: "Umbral arqueado de piedra abierto a un paisaje, con libros y vasijas de terracota.",
          width: 700,
          height: 700,
        },
      },
    ],
  },
  en: {
    label: "The Fénix ecosystem",
    chambers: [
      {
        id: "atelier",
        house: "Fénix",
        room: "Atelier",
        kicker: "Private practice",
        description:
          "Bespoke architecture for founders, executives, and athletes.",
        cta: "Enter",
        href: "/atelier",
        illustration: {
          src: "/images/atelier.png",
          alt: "Drafting table with Vitruvian Man, a bronze lamp, and the phoenix emblem.",
          width: 700,
          height: 700,
        },
      },
      {
        id: "house",
        house: "Fénix",
        room: "House",
        kicker: "Works",
        description: "Books, tools, and objects for the art of living.",
        cta: "Discover",
        href: "/house",
        illustration: {
          src: "/images/house.png",
          alt: "Arched stone threshold opening onto a landscape, with books and terracotta vessels.",
          width: 700,
          height: 700,
        },
      },
    ],
  },
};

export function getEcosystem(locale) {
  const data = localize(copy, locale);
  return {
    ...data,
    chambers: data.chambers.map((chamber) => ({
      ...chamber,
      href: localizeHref(chamber.href, locale),
    })),
  };
}
