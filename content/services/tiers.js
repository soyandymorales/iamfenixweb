import { localize, localizeHref } from "@/libs/locale";

const intro = {
  es: {
    title: "The Atelier",
    subtitle: "Arquitectura Privada Humana para fundadores, ejecutivos y atletas.",
    eyebrow: "La práctica privada",
  },
  en: {
    title: "The Atelier",
    subtitle: "Private Human Architecture for founders, executives, and athletes.",
    eyebrow: "The private practice",
  },
};

const ATELIER_WELCOME_EMBED =
  "https://www.youtube-nocookie.com/embed/gNGuCj7PUdM?rel=0";

const welcome = {
  es: {
    eyebrow: "El Atelier",
    title: "Bienvenido al Atelier",
    videoTitle: "Bienvenida al Atelier",
    embedSrc: ATELIER_WELCOME_EMBED,
    actions: [
      { label: "Diarios del Fénix", href: "/diarios", variant: "outline" },
      { label: "Agenda Privado", href: "https://wa.link/ou2gi0", variant: "solid" },
    ],
  },
  en: {
    eyebrow: "The Atelier",
    title: "Welcome to the Atelier",
    videoTitle: "Welcome to the Atelier",
    embedSrc: ATELIER_WELCOME_EMBED,
    actions: [
      { label: "Diarios del Fénix", href: "/diarios", variant: "outline" },
      { label: "Private Agenda", href: "https://wa.link/ou2gi0", variant: "solid" },
    ],
  },
};

const offersIntro = {
  es: {
    eyebrow: "Cómo funciona cada nivel de profundidad",
    title: "Fénix Atelier",
    intro:
      "Me cuentas tu problema y si es un problema que he resuelto podemos avanzar en la solución que mejor funcione para ti.",
    investment: "Inversión",
    includes: "Lo que incluye",
    applicationOnly: "Solo por aplicación",
  },
  en: {
    eyebrow: "How each level of support works",
    title: "Fénix Atelier",
    intro:
      "Tell me about your problem. If it is one I have solved before, we can move forward with the solution that works best for you.",
    investment: "Investment",
    includes: "What is included",
    applicationOnly: "By application only",
  },
};

const tiersBase = [
  {
    id: "circle",
    numeral: "01",
    investment: "US$97 / mes",
    href: "https://wa.link/h5xkb0",
    applicationOnly: false,
  },
  {
    id: "clarity",
    numeral: "02",
    investment: "US$247",
    href: "https://wa.link/gcu7nq",
    applicationOnly: false,
  },
  {
    id: "blueprint",
    numeral: "03",
    investment: "US$997",
    href: "https://wa.link/99u64r",
    applicationOnly: true,
  },
  {
    id: "build",
    numeral: "04",
    investment: "US$2,997",
    href: "https://wa.link/rsumnj",
    applicationOnly: true,
  },
  {
    id: "private-office",
    numeral: "05",
    investment: "US$3,997",
    href: "https://wa.link/36uoah",
    applicationOnly: true,
  },
];

const tiersCopy = {
  es: {
    circle: {
      tier: "Fénix Circle",
      cadence: "Membresía grupal · mensual",
      promise:
        "Aprende, y avanza en una comunidad que construye con intención.",
      features: [
        "Acceso al catálogo digital de House incluido en la membresía.",
        "Cuatro sesiones grupales mensuales de 60 minutos.",
        "1 Sesión Body Architecture™",
        "1 Sesión Happeace Architecture™",
        "1 Sesión Money Architecture™",
        "1 sesión con Invitado Experto en una Arquitectura.",
        "Comunidad privada con reglas claras de participación.",
      ],
      cta: "Solicitar acceso",
    },
    clarity: {
      tier: "Fénix Clarity",
      cadence: "Sesión privada · 90 minutos",
      promise:
        "Resuelve una decisión importante con mayor claridad y criterio.",
      features: [
        "Formulario previo para delimitar la decisión.",
        "Revisión breve del contexto que compartas.",
        "Sesión privada de 90 minutos con Andy Morales.",
        "Análisis de alternativas, supuestos, riesgos y trade-offs.",
        "Recomendación razonada y siguientes pasos.",
        "Resumen escrito de decisiones, acciones y preguntas pendientes.",
      ],
      boundary:
        "No incluye implementación, seguimiento ilimitado, auditorías exhaustivas ni servicios profesionales regulados.",
      cta: "Solicitar sesión",
    },
    blueprint: {
      tier: "Fénix Blueprint",
      cadence: "Privado Digital · 4 semanas",
      promise:
        "Diseña un sistema personal claro y viable para ejecutar tus prioridades.",
      features: [
        "Diagnóstico inicial y definición del objetivo.",
        "4 llamadas privadas de 45–60 minutos.",
        "Revisión semanal de obstáculos y decisiones.",
        "Plan de implementación para los siguientes 30–60 días.",
      ],
      cta: "Aplicar a Blueprint",
    },
    build: {
      tier: "Fénix Build",
      cadence: "Privado Digital · 12 semanas",
      promise:
        "Implementa tu arquitectura personal con acompañamiento directo.",
      features: [
        "Diagnóstico inicial y definición del objetivo.",
        "12 llamadas privadas de 45–60 minutos.",
        "Revisión semanal de obstáculos y decisiones.",
        "Plan de implementación para los siguientes 30–60 días."
      ],
      cta: "Aplicar a Build",
    },
    "private-office": {
      tier: "Fénix Private Office",
      cadence: "Experiencia presencial · fin de semana",
      promise:
        "Fin de semana de pensamiento, trabajo y entrenamiento con Andy.",
      features: [
        "Cuestionario previo y conversación de preparación.",
        "Bloques de trabajo estratégico con Andy.",
        "Entrenamiento privado con Andy.",
        "Comidas compartidas y conversación privada.",
      ],
      cta: "Aplicar a Private Office",
    },
  },
  en: {
    circle: {
      tier: "Fénix Circle",
      cadence: "Group membership · monthly",
      investment: "US$97 / month",
      promise:
        "Learn and move forward in a community that builds with intention.",
      features: [
        "Access to the House digital catalog included with membership.",
        "Four monthly 60-minute group sessions.",
        "1 Body Architecture™ session.",
        "1 Happeace Architecture™ session.",
        "1 Money Architecture™ session.",
        "1 session with a Guest Expert in one of the Architectures.",
        "Private community with clear rules of participation.",
      ],
      cta: "Request access",
    },
    clarity: {
      tier: "Fénix Clarity",
      cadence: "Private session · 90 minutes",
      promise: "Resolve an important decision with greater clarity and discernment.",
      features: [
        "A pre-session form to define the decision.",
        "A brief review of the context you share.",
        "A 90-minute private session with Andy Morales.",
        "Analysis of alternatives, assumptions, risks, and trade-offs.",
        "A reasoned recommendation and next steps.",
        "A written summary of decisions, actions, and open questions.",
      ],
      boundary:
        "Implementation, unlimited follow-up, exhaustive audits, and regulated professional services are not included.",
      cta: "Request a session",
    },
    blueprint: {
      tier: "Fénix Blueprint",
      cadence: "Private online program · 4 weeks",
      promise:
        "Design a clear, viable personal system to execute your priorities.",
      features: [
        "Initial diagnosis and objective definition.",
        "4 private calls of 45–60 minutes.",
        "Weekly review of obstacles and decisions.",
        "An implementation plan for the next 30–60 days.",
      ],
      cta: "Apply for Blueprint",
    },
    build: {
      tier: "Fénix Build",
      cadence: "Private online program · 12 weeks",
      promise:
        "Implement your personal architecture with direct guidance.",
      features: [
        "Initial diagnosis and objective definition.",
        "12 private calls of 45–60 minutes.",
        "Weekly review of obstacles and decisions.",
        "An implementation plan for the next 30–60 days.",
      ],
      cta: "Apply for Build",
    },
    "private-office": {
      tier: "Fénix Private Office",
      cadence: "In-person experience · weekend",
      promise:
        "A weekend of thinking, working, and training with Andy.",
      features: [
        "Pre-work questionnaire and preparation conversation.",
        "Strategic working sessions with Andy.",
        "Private training with Andy.",
        "Shared meals and private conversation.",
      ],
      cta: "Apply for Private Office",
    },
  },
};

export function getAtelierIntro(locale) {
  return localize(intro, locale);
}

export function getAtelierWelcome(locale) {
  const data = localize(welcome, locale);
  return {
    ...data,
    actions: data.actions.map((action) => ({
      ...action,
      href: localizeHref(action.href, locale),
    })),
  };
}

export function getOffersIntro(locale) {
  return localize(offersIntro, locale);
}

export function getTiers(locale) {
  const localized = localize(tiersCopy, locale);
  return tiersBase.map((tier) => ({
    ...tier,
    ...localized[tier.id],
  }));
}
