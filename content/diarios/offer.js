import { localize } from "@/libs/locale";

export const DIARIOS_PRODUCT_CODE = "diarios_del_fenix";

const copy = {
  es: {
    eyebrow: "Diarios del Fénix",
    title: "Eleva tu cuerpo, tu paz y tu dinero.",
    opening:
      "Veintiún prácticas, en tres arquitecturas, para habitar el cuerpo, la paz y el capital como una sola casa.",
    architecturesLabel: "Tres arquitecturas",
    bodyName: "Body Architecture™",
    bodySpan: "Días 1 a 7",
    happeaceName: "Happeace Architecture™",
    happeaceSpan: "Días 8 a 14",
    moneyName: "Money Architecture™",
    moneySpan: "Días 15 a 21",
    investmentLabel: "Inversión",
    enter: "Entrar a Diarios del Fénix",
    entering: "Abriendo la entrada…",
    quiet: "La entrada se abre cuando la tienda esté lista.",
    checkoutError: "La entrada no se abrió. Puedes intentarlo de nuevo en un momento.",
    returningTitle: "Ya tengo acceso",
    returningNote:
      "Si esta dirección tiene una compra, el acceso vuelve a salir hacia tu bandeja.",
    returningSubmit: "Enviar el acceso",
    returningSending: "Enviando…",
    returningDone: "Si hay una compra con esta dirección, el mensaje va en camino.",
    returningError: "El envío se interrumpió. Intenta de nuevo con calma.",
    linkError: "Ese enlace no abrió la sesión. Pide el acceso otra vez.",
    metadataDescription: "Eleva tu cuerpo, tu paz y tu dinero. $37.",
  },
  en: {
    eyebrow: "Diarios del Fénix",
    title: "Elevate your body, your peace, and your money.",
    opening:
      "Twenty-one practices, in three architectures, to inhabit body, peace, and capital as one house.",
    architecturesLabel: "Three architectures",
    bodyName: "Body Architecture™",
    bodySpan: "Days 1 to 7",
    happeaceName: "Happeace Architecture™",
    happeaceSpan: "Days 8 to 14",
    moneyName: "Money Architecture™",
    moneySpan: "Days 15 to 21",
    investmentLabel: "Investment",
    enter: "Enter Diarios del Fénix",
    entering: "Opening the entrance…",
    quiet: "The entrance opens when the store is ready.",
    checkoutError: "The entrance did not open. You can try again in a moment.",
    returningTitle: "I already have access",
    returningNote:
      "If this address has a purchase, access is sent again to your inbox.",
    returningSubmit: "Send access",
    returningSending: "Sending…",
    returningDone: "If a purchase exists for this address, the message is on its way.",
    returningError: "The sending was interrupted. Try again, without hurry.",
    linkError: "That link did not open the session. Ask for access again.",
    metadataDescription: "Elevate your body, your peace, and your money. $37.",
  },
};

export function getDiariosOffer(locale) {
  return {
    ...localize(copy, locale),
    productCode: DIARIOS_PRODUCT_CODE,
    priceAmount: 37,
    priceCurrency: "USD",
  };
}
