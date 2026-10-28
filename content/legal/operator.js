import { localize } from "@/libs/locale";

export const operator = {
  name: "Andres Fernando Morales Sanabria",
  email: "andy@iamfenix.com",
  brand: "Fénix",
  site: "https://iamfenix.com",
  siteHost: "iamfenix.com",
  effectiveIso: "2026-10-28",
};

export const paymentProcessors = [
  { name: "Lemon Squeezy", href: "https://www.lemonsqueezy.com/privacy" },
  { name: "Stripe", href: "https://stripe.com/privacy" },
  { name: "PayPal", href: "https://www.paypal.com/legalhub/privacy-full" },
  { name: "Mercado Pago", href: "https://www.mercadopago.com/privacidad" },
  { name: "Systeme.io", href: "https://systeme.io/privacy" },
  { name: "Paddle", href: "https://www.paddle.com/legal/privacy" },
  { name: "Circle.so", href: "https://circle.so/privacy" },
];

const copy = {
  es: {
    effective: "Vigente desde el 28 de octubre de 2026",
    nameLabel: "Nombre",
    brandLabel: "Nombre comercial",
    siteLabel: "Sitio",
    emailLabel: "Contacto",
    brandLine: "Fénix (i.am Fénix)",
    navLabel: "Documentos legales",
  },
  en: {
    effective: "Effective October 28, 2026",
    nameLabel: "Name",
    brandLabel: "Trade name",
    siteLabel: "Site",
    emailLabel: "Contact",
    brandLine: "Fénix (i.am Fénix)",
    navLabel: "Legal documents",
  },
};

export function getOperator(locale) {
  return {
    ...operator,
    ...localize(copy, locale),
  };
}
