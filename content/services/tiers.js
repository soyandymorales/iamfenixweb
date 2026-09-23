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

const welcome = {
  es: {
    eyebrow: "El Atelier",
    title: "Bienvenido al Atelier",
    videoTitle: "Bienvenida al Atelier",
    embedSrc: "",
    actions: [
      { label: "Diarios del Fénix", href: "/diarios", variant: "outline" },
      { label: "Agenda Privado", href: "https://wa.link/ou2gi0", variant: "solid" },
    ],
  },
  en: {
    eyebrow: "The Atelier",
    title: "Welcome to the Atelier",
    videoTitle: "Welcome to the Atelier",
    embedSrc: "",
    actions: [
      { label: "Diarios del Fénix", href: "/diarios", variant: "outline" },
      { label: "Private Agenda", href: "https://wa.link/ou2gi0", variant: "solid" },
    ],
  },
};

const facts = {
  es: {
    role: "Rol",
    outcome: "Resultado",
    duration: "Duración",
    investment: "Inversión",
  },
  en: {
    role: "Role",
    outcome: "Outcome",
    duration: "Duration",
    investment: "Investment",
  },
};

const domainLabels = {
  es: [
    { key: "body", label: "Arquitectura del Cuerpo" },
    { key: "happeace", label: "Arquitectura Happeace" },
    { key: "money", label: "Arquitectura del Dinero" },
  ],
  en: [
    { key: "body", label: "Body Architecture" },
    { key: "happeace", label: "Happeace Architecture" },
    { key: "money", label: "Money Architecture" },
  ],
};

const tiersBase = [
  {
    id: "consultation",
    duration: "90 min",
    investment: "US$197",
  },
  {
    id: "blueprint",
    duration: "4 semanas",
    durationEn: "4 weeks",
    investment: "US$997",
  },
  {
    id: "build",
    duration: "12 semanas",
    durationEn: "12 weeks",
    investment: "US$2,997",
  },
];

const tiersCopy = {
  es: {
    consultation: {
      tier: "Arquitecto",
      variant: "Consulta",
      role: "Arquitecto",
      mission: "Diagnosticar",
      outcome: "Claridad",
      cta: "Solicitar Consulta",
      domains: {
        body: "Identifica los cuellos de botella que limitan tu vitalidad.",
        happeace: "Identifica lo que perturba tu paz.",
        money: "Identifica los puntos ciegos financieros.",
      },
    },
    blueprint: {
      tier: "Plano",
      variant: "Básico",
      role: "Arquitecto Principal",
      mission: "Diseñar",
      outcome: "Arquitectura",
      cta: "Aplicar al Plano",
      domains: {
        body: "Construye la vitalidad que exige tu obra de vida.",
        happeace: "Crea mayor claridad, enfoque y presencia.",
        money: "Alinea la riqueza con libertad, propósito y mayordomía.",
      },
    },
    build: {
      tier: "Construcción",
      variant: "Premium",
      role: "Arquitecto de Implementación",
      mission: "Construir",
      outcome: "Impulso",
      cta: "Aplicar a Construcción",
      domains: {
        body: "Desarrolla fuerza, energía y resiliencia duraderas.",
        happeace: "Desarrolla resiliencia emocional y presencia sostenible.",
        money: "Construye sistemas que hacen crecer y protegen la riqueza.",
      },
    },
  },
  en: {
    consultation: {
      tier: "Architect",
      variant: "Consultation",
      role: "Architect",
      mission: "Diagnose",
      outcome: "Clarity",
      cta: "Request Consultation",
      domains: {
        body: "Identify the bottlenecks that limit your vitality.",
        happeace: "Identify what disturbs your peace.",
        money: "Identify the financial blind spots.",
      },
    },
    blueprint: {
      tier: "Blueprint",
      variant: "Basic",
      role: "Lead Architect",
      mission: "Design",
      outcome: "Architecture",
      cta: "Apply for Blueprint",
      domains: {
        body: "Build the vitality your life’s work requires.",
        happeace: "Create greater clarity, focus, and presence.",
        money: "Align wealth with freedom, purpose, and stewardship.",
      },
    },
    build: {
      tier: "Build",
      variant: "Premium",
      role: "Implementation Architect",
      mission: "Build",
      outcome: "Momentum",
      cta: "Apply for Build",
      domains: {
        body: "Develop lasting strength, energy, and resilience.",
        happeace: "Develop emotional resilience and sustainable presence.",
        money: "Build systems that grow and protect wealth.",
      },
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

export function getTierFacts(locale) {
  return localize(facts, locale);
}

export function getTierDomainLabels(locale) {
  return localize(domainLabels, locale);
}

export function getTiers(locale) {
  const localized = localize(tiersCopy, locale);
  const isEn = locale === "en";
  return tiersBase.map((tier) => ({
    ...tier,
    duration: isEn && tier.durationEn ? tier.durationEn : tier.duration,
    ...localized[tier.id],
  }));
}
