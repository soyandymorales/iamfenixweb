import { localize } from "@/libs/locale";

const copy = {
  es: {
    headline: [
      ["Arquitectura", "humana"],
      ["para", "el", "arte", "de", "vivir."],
    ],
    kicker: "Un cuerpo en forma. Una mente en calma. Una cuenta que te da paz",
    cta: "Diarios del Fénix",
    ctaNote: "Accede gratis a los planos",
    socialLabel: "Perfiles de Andy",
    lead: {
      eyebrow: "Diarios del Fénix",
      title: "Arquitecta tu vida como un artesano crea su obra maestra.",
      architecturesKicker: "Eleva en 21 días tus 3 Arquitecturas",
      architecturesLabel: "3 Arquitecturas",
      offer: "Acceso gratuito a los planos",
      formLabel: "Acceso a Diarios del Fénix",
      nameLabel: "Tu nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Tu correo",
      emailPlaceholder: "Tu correo",
      submit: "Iniciar Diarios del Fénix",
      submitting: "Enviando…",
      error: "Algo interrumpió el envío. Intenta de nuevo con calma.",
    },
    filosofia: {
      eyebrow: "Filosofía Fénix",
      title: "Devoción Intencional",
    },
    arquitectura: {
      eyebrow: "Arquitectura Fénix",
      misalignment: "Desalineación y Fragmentación",
      alignment: "Alineación e Integración",
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Voces del camino",
    },
    metricsLabel: "Métricas relevantes",
    proofLabel: "Trayectoria",
    biblioteca: {
      titleBefore: "La ",
      titleAccent: "Biblioteca",
      titleAfter: " del Arquitecto",
      lead: "Una librería para el arte de vivir.",
      kicker: "YouTube · El último plano",
      emptyTitle: "El último plano",
      watch: "Ver en YouTube",
      watchLatest: "Ver el último plano en YouTube",
      subscribe: "Suscríbete",
      viewsOne: "vista",
      viewsMany: "vistas",
    },
  },
  en: {
    headline: [
      ["Human", "architecture"],
      ["for", "the", "art", "of", "living."],
    ],
    kicker: "A fit body. A mind at rest. An account that gives you peace.",
    cta: "Fénix Diaries",
    ctaNote: "Free access to the blueprints",
    socialLabel: "Andy’s profiles",
    lead: {
      eyebrow: "Fénix Diaries",
      title: "Architect your life the way a craftsman creates a masterpiece.",
      architecturesKicker: "Raise your 3 Architectures in 21 days",
      architecturesLabel: "3 Architectures",
      offer: "Free access to the blueprints",
      formLabel: "Access to Diarios del Fénix",
      nameLabel: "Your name",
      namePlaceholder: "Your name",
      emailLabel: "Your email",
      emailPlaceholder: "Your email",
      submit: "Begin Fénix Diaries",
      submitting: "Sending…",
      error: "Something interrupted the sending. Try again, without hurry.",
    },
    filosofia: {
      eyebrow: "Fénix Philosophy",
      title: "Intentional Devotion",
    },
    arquitectura: {
      eyebrow: "Fénix Architecture",
      misalignment: "Misalignment and Fragmentation",
      alignment: "Alignment and Integration",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Voices along the way",
    },
    metricsLabel: "Relevant measures",
    proofLabel: "Trajectory",
    biblioteca: {
      titleBefore: "The Architect’s ",
      titleAccent: "Library",
      titleAfter: "",
      lead: "A library for the art of living.",
      kicker: "YouTube · The latest blueprint",
      emptyTitle: "The latest blueprint",
      watch: "Watch on YouTube",
      watchLatest: "Watch the latest blueprint on YouTube",
      subscribe: "Subscribe",
      viewsOne: "view",
      viewsMany: "views",
    },
  },
};

export function getHomeCopy(locale) {
  return localize(copy, locale);
}
