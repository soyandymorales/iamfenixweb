// The Atelier — service tiers (source of truth, never hardcoded in components).
export const atelierIntro = {
  title: "The Atelier",
  subtitle: "Arquitectura Privada Humana para fundadores, ejecutivos y atletas.",
};

export const atelierWelcome = {
  eyebrow: "El Atelier",
  title: "Bienvenida al Atelier",
  lead: " Este video te orienta antes de elegir tu arquitectura.",
  videoTitle: "Bienvenida al Atelier",
  // Paste the welcome video embed URL when ready.
  embedSrc: "",
  actions: [
    { label: "Diarios del Fénix", href: "/#empieza-aqui", variant: "outline" },
    { label: "Agenda Privado", href: "#atelier", variant: "solid" },
  ],
};

export const tiers = [
  {
    id: "consultation",
    tier: "Arquitecto",
    variant: "Consulta",
    role: "Arquitecto",
    mission: "Diagnosticar",
    outcome: "Claridad",
    duration: "90 min",
    domains: {
      body: "Identifica los cuellos de botella que limitan tu vitalidad.",
      happeace: "Identifica lo que perturba tu paz.",
      money: "Identifica los puntos ciegos financieros.",
    },
    investment: "US$197",
    cta: "Solicitar Consulta",
  },
  {
    id: "blueprint",
    tier: "Plano",
    variant: "Básico",
    role: "Arquitecto Principal",
    mission: "Diseñar",
    outcome: "Arquitectura",
    duration: "4 semanas",
    domains: {
      body: "Construye la vitalidad que exige tu obra de vida.",
      happeace: "Crea mayor claridad, enfoque y presencia.",
      money: "Alinea la riqueza con libertad, propósito y mayordomía.",
    },
    investment: "US$997",
    cta: "Aplicar al Plano",
  },
  {
    id: "build",
    tier: "Construcción",
    variant: "Premium",
    role: "Arquitecto de Implementación",
    mission: "Construir",
    outcome: "Impulso",
    duration: "12 semanas",
    domains: {
      body: "Desarrolla fuerza, energía y resiliencia duraderas.",
      happeace: "Desarrolla resiliencia emocional y presencia sostenible.",
      money: "Construye sistemas que hacen crecer y protegen la riqueza.",
    },
    investment: "US$2,997",
    cta: "Aplicar a Construcción",
  },
];

export const tierDomainLabels = [
  { key: "body", label: "Arquitectura del Cuerpo" },
  { key: "happeace", label: "Arquitectura Happeace" },
  { key: "money", label: "Arquitectura del Dinero" },
];
