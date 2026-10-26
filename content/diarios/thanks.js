import { localize } from "@/libs/locale";

const copy = {
  es: {
    metadataTitle: "Gracias por tu compra",
    metadataDescription:
      "El acceso a Diarios del Fénix va en camino a tu bandeja.",
    markLabel: "i.am Fénix — inicio",
    eyebrow: "Diarios del Fénix",
    titleBefore: "Gracias por ",
    titleAccent: "tu compra.",
    promise:
      "El acceso a las tres arquitecturas va en camino a tu bandeja.",
    foundation:
      "Abre el mensaje y sigue las instrucciones que abren el curso que compraste.",
    inboxKicker: "Ahora",
    inboxTitle: "Revisa tu correo.",
    inboxNote:
      "Si no lo ves en unos minutos, mira en spam y marca el mensaje como seguro.",
  },
  en: {
    metadataTitle: "Thank you for your purchase",
    metadataDescription:
      "Access to Diarios del Fénix is on its way to your inbox.",
    markLabel: "i.am Fénix — home",
    eyebrow: "Diarios del Fénix",
    titleBefore: "Thank you for ",
    titleAccent: "your purchase.",
    promise:
      "Access to the three architectures is on its way to your inbox.",
    foundation:
      "Open the message and follow the instructions that open the course you purchased.",
    inboxKicker: "Now",
    inboxTitle: "Check your email.",
    inboxNote:
      "If it does not arrive within a few minutes, check spam and mark the message as safe.",
  },
};

export function getDiariosThanks(locale) {
  return localize(copy, locale);
}
