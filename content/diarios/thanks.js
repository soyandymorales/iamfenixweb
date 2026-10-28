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
      "El pago quedó en la casa. Las tres arquitecturas se abren desde aquí y también desde tu correo.",
    foundation:
      "El enlace del correo no se gasta al abrirlo. Sirve para volver desde otro dispositivo.",
    steps: [
      "Este navegador queda con la entrada abierta.",
      "El mismo acceso sale hacia el correo que escribiste.",
      "Desde las arquitecturas se abren los veintiún días.",
    ],
    enter: "Entrar a las arquitecturas",
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
      "The payment is in the house. The three architectures open from here and also from your email.",
    foundation:
      "The email link is not used up when you open it. It is there for another device.",
    steps: [
      "This browser keeps the entrance open.",
      "The same access is sent to the email you wrote.",
      "The architectures open the twenty-one days.",
    ],
    enter: "Enter the architectures",
    inboxKicker: "Now",
    inboxTitle: "Check your email.",
    inboxNote:
      "If it does not arrive within a few minutes, check spam and mark the message as safe.",
  },
};

export function getDiariosThanks(locale) {
  return localize(copy, locale);
}
