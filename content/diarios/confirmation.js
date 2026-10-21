import { localize } from "@/libs/locale";

const copy = {
  es: {
    metadataTitle: "Bienvenido a Diarios del Fénix",
    metadataDescription:
      "Tu secuencia gratuita de 21 prácticas diarias para elevar cuerpo, interior y dinero ya comenzó.",
    markLabel: "i.am Fénix — inicio",
    edition: "Diarios del Fénix",
    folio: "01—21",
    eyebrow: "Bienvenido a Diarios del Fénix.",
    titleBefore: "El fuego ya está ",
    titleAccent: "encendido.",
    promise:
      "A partir de ahora, durante 3 semanas, recibirás 21 prácticas —una cada día— para elevar tu cuerpo, tu felicidad, tu paz interior y tu arquitectura financiera.",
    foundation:
      "Cada plano está guiado por principios bíblicos para ayudarte a construir una vida firme, próspera y con alma.",
    inboxKicker: "Tu primera práctica está en camino",
    inboxTitle: "Revisa tu bandeja de entrada.",
    inboxNote:
      "Si no la ves en unos minutos, mira en Spam o correo no deseado y marca el mensaje como seguro.",
    durationLabel: "Duración",
    duration: "3 semanas",
    rhythmLabel: "Ritmo",
    rhythm: "1 práctica diaria",
    giftLabel: "Acceso",
    gift: "Gratuito",
    closing: "Ve en paz. Mañana levantamos el siguiente plano.",
  },
  en: {
    metadataTitle: "Welcome to Diarios del Fénix",
    metadataDescription:
      "Your free sequence of 21 daily practices to elevate body, inner life, and money has begun.",
    markLabel: "i.am Fénix — home",
    edition: "Diarios del Fénix",
    folio: "01—21",
    eyebrow: "Welcome to Diarios del Fénix.",
    titleBefore: "The fire is already ",
    titleAccent: "lit.",
    promise:
      "From now on, for 3 weeks, you will receive 21 practices—one each day—to elevate your body, happiness, inner peace, and financial architecture.",
    foundation:
      "Each blueprint is guided by biblical principles to help you build a life that is grounded, prosperous, and soulful.",
    inboxKicker: "Your first practice is on its way",
    inboxTitle: "Check your inbox.",
    inboxNote:
      "If it does not arrive within a few minutes, check Promotions or spam and mark the message as safe.",
    durationLabel: "Duration",
    duration: "3 weeks",
    rhythmLabel: "Rhythm",
    rhythm: "1 daily practice",
    giftLabel: "Access",
    gift: "Free",
    closing: "Go in peace. Tomorrow we raise the next blueprint.",
  },
};

export function getDiariosConfirmation(locale) {
  return localize(copy, locale);
}
