import { localize } from "@/libs/locale";

const gateway = {
  es: {
    kicker: "Como funciona",
    title: "Las 3 Arquitecturas",
    product: "Diarios del Fénix",
    intro:
      "Un cuerpo con energía. Una mente en calma. Un hogar lleno de amor. Una obra de vida con propósito.",
    closing:
      "Cada arquitectura se diseña alrededor de tu realidad. Tu familia. Tu negocio. Tu vocación. Tus valores. No existen planos universales — solo arquitecturas profundamente personales.",
    cta: "Comenzar arquitectura privada",
  },
  en: {
    kicker: "How it works",
    title: "The 3 Architectures",
    product: "Diarios del Fénix",
    intro:
      "A body with energy. A mind at rest. A home filled with love. A life’s work with purpose.",
    closing:
      "Each architecture is designed around your reality. Your family. Your work. Your vocation. Your values. There are no universal blueprints — only architectures that are deeply personal.",
    cta: "Begin private architecture",
  },
};

const copy = {
  es: {
    body: {
      shortName: "Cuerpo",
      name: "Arquitectura del Cuerpo",
      definition:
        "Construye un cuerpo capaz de sostener décadas de creación, servicio y memorias.",
      imageAlt: "Andy entrenando fuerza con mancuernas",
    },
    happeace: {
      shortName: "Happeace",
      name: "Arquitectura Happeace",
      definition:
        "Cultiva claridad, presencia y paz interior para vivir con intención.",
      imageAlt: "Andy contemplando el amanecer con los brazos abiertos",
    },
    money: {
      shortName: "Dinero",
      name: "Arquitectura del Dinero",
      definition:
        "Convierte el capital en tiempo, libertad, impacto y legado.",
      imageAlt: "Andy junto a su familia durante un viaje a Nueva York",
    },
  },
  en: {
    body: {
      shortName: "Body",
      name: "Body Architecture",
      definition:
        "Build a body able to sustain decades of creation, service, and memory.",
      imageAlt: "Andy training strength with dumbbells",
    },
    happeace: {
      shortName: "Happeace",
      name: "Happeace Architecture",
      definition:
        "Cultivate clarity, presence, and inner peace in order to live with intention.",
      imageAlt: "Andy contemplating dawn with open arms",
    },
    money: {
      shortName: "Money",
      name: "Money Architecture",
      definition:
        "Turn capital into time, freedom, impact, and legacy.",
      imageAlt: "Andy with his family during a visit to New York",
    },
  },
};

const domainsBase = [
  {
    id: "body",
    numeral: "I",
    trademark: "Body Architecture™",
    image: "/images/Body.png",
  },
  {
    id: "happeace",
    numeral: "II",
    trademark: "Happeace Architecture™",
    image: "/images/Happeace.png",
  },
  {
    id: "money",
    numeral: "III",
    trademark: "Money Architecture™",
    image: "/images/Money.png",
  },
];

export function getDomainsGateway(locale) {
  return localize(gateway, locale);
}

export function getDomains(locale) {
  const localized = localize(copy, locale);
  return domainsBase.map((domain) => ({
    ...domain,
    ...localized[domain.id],
  }));
}
