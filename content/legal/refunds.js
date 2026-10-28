import { localize } from "@/libs/locale";
import { operator } from "@/content/legal/operator";

const email = { email: operator.email };

const copy = {
  es: {
    title: "Política de reembolsos",
    description:
      "Reembolsos de Diarios del Fénix y cancelación de las suscripciones digitales de directorios y aplicaciones de Fénix.",
    eyebrow: "Legal",
    lead: "Diarios del Fénix es un curso digital. Las suscripciones de directorios y aplicaciones son software. Esta política dice, antes del pago, cuándo hay reembolso y cuándo la cancelación deja el período en curso como está.",
    contentsLabel: "Contenido",
    relatedLabel: "Documentos relacionados",
    identityTitle: "Quién responde de esta política",
    sections: [
      {
        id: "alcance",
        heading: "Alcance",
        blocks: [
          {
            type: "p",
            parts: [
              "Esta política cubre las compras digitales hechas en ",
              { href: operator.site, label: operator.siteHost },
              " con Andres Fernando Morales Sanabria, quien opera Fénix. El correo para cualquier solicitud es ",
              email,
              ".",
            ],
          },
          {
            type: "p",
            text: "Cubre dos familias de productos. La primera es el curso digital Diarios del Fénix. La segunda son las suscripciones al software de directorios web y a las funciones de pago dentro de las aplicaciones. Una sesión privada descrita aparte, y reservada por su propio canal, se rige por lo acordado al reservarla.",
          },
        ],
      },
      {
        id: "curso",
        heading: "Diarios del Fénix",
        blocks: [
          {
            type: "p",
            text: "Diarios del Fénix es un curso digital interactivo. Se entrega por acceso en línea y, cuando el propio curso lo ofrece, por descarga. No es un bien físico, no es una asesoría personalizada y no es un servicio que una persona ejecute a mano después del pago.",
          },
          {
            type: "note",
            parts: [
              "Una vez abierto o descargado el material, no hay reembolso. Abrir una práctica, reproducir un video o descargar un archivo cuenta como acceso. El contenido digital ya entregado no puede devolverse.",
            ],
          },
          {
            type: "p",
            text: "Si todavía no has abierto ni descargado el material, puedes pedir el reembolso dentro de los 14 días siguientes al pago. Si el acceso se usó antes de ese plazo, la compra queda cerrada.",
          },
        ],
      },
      {
        id: "acceso-inmediato",
        heading: "Acceso inmediato",
        blocks: [
          {
            type: "p",
            text: "El curso se entrega al confirmarse el pago. En el checkout se pide una aceptación expresa: solicitas que el acceso empiece de inmediato y reconoces que, al abrir o descargar el material, pierdes el derecho de desistimiento en la medida en que la ley de consumo lo permite.",
          },
          {
            type: "p",
            text: "Esa renuncia no borra derechos que la ley impide renunciar. Si tu país concede un plazo de desistimiento y aún no has abierto ni descargado el curso, puedes usarlo dentro de ese plazo. Si ya accediste con esa aceptación, el derecho se extingue.",
          },
        ],
      },
      {
        id: "remedio",
        heading: "Cuándo sí hay remedio",
        blocks: [
          {
            type: "p",
            text: "Hay reembolso o reposición del acceso, aunque el material se haya abierto, en estos casos:",
          },
          {
            type: "ul",
            items: [
              "El pago se cobró y el acceso no llegó, y no logramos entregarlo en un plazo razonable.",
              "El cargo está duplicado.",
              "El cargo no fue autorizado por el titular del medio de pago.",
              "El curso entregado es sustancialmente distinto de lo descrito en la página de compra.",
            ],
          },
          {
            type: "p",
            text: "El remedio es restaurar el acceso o devolver el cargo afectado. Un cambio de opinión después de abrir o descargar el material no es uno de estos casos.",
          },
        ],
      },
      {
        id: "suscripciones",
        heading: "Suscripciones de directorios y aplicaciones",
        blocks: [
          {
            type: "p",
            text: "El acceso a un directorio web automatizado, y las suscripciones de funciones dentro de las aplicaciones, son software de suscripción. Puedes cancelar en cualquier momento.",
          },
          {
            type: "note",
            parts: [
              "La cancelación evita el siguiente cobro. No se reembolsan los días ya utilizados del período en curso, ni los días que resten de ese mismo período. No hay reembolso prorrateado.",
            ],
          },
          {
            type: "p",
            text: "Conservas el acceso hasta que termine el período ya pagado. Después, la renovación no ocurre y el espacio o la función dejan de estar disponibles, salvo que vuelvas a suscribirte.",
          },
          {
            type: "p",
            text: "Al empezar a usar el software en el período en curso, pides que la prestación comience de inmediato. Ese período no se devuelve. Si una ley de tu residencia exige un desistimiento anterior al uso, puedes ejercerlo solo mientras no hayas usado el software y dentro del plazo legal.",
          },
        ],
      },
      {
        id: "cancelar",
        heading: "Cómo cancelar",
        blocks: [
          {
            type: "p",
            parts: [
              "Cancela desde el portal del procesador de pagos que figura en tu recibo, o escribe a ",
              email,
              " desde el correo de la compra. Incluye el producto y, si lo tienes, el número de pedido.",
            ],
          },
          {
            type: "p",
            text: "La cancelación queda hecha cuando el portal la confirma o cuando respondemos por correo. Conviene hacerla antes de la fecha de renovación. Una cancelación posterior a un cobro ya generado corresponde al período que ese cobro cubre.",
          },
        ],
      },
      {
        id: "solicitud",
        heading: "Cómo pedir un reembolso",
        blocks: [
          {
            type: "p",
            parts: [
              "Escribe a ",
              email,
              " con el asunto “Reembolso”, el correo de la compra, el producto y el motivo. También puedes usar el canal de soporte del procesador que cobró el pedido.",
            ],
          },
          {
            type: "p",
            text: "Acusamos recibo en un plazo de cinco días hábiles y resolvemos en un plazo de catorce días, salvo que el procesador aplique un plazo propio al mismo pedido. Si el reembolso procede, se devuelve por el mismo medio de pago. Al devolver un curso, el acceso se cierra.",
          },
          {
            type: "p",
            text: "Si disputas el cargo con el banco, podemos mostrar esta política y el registro de entrega o de acceso. Escribirnos antes suele resolver el caso más rápido.",
          },
        ],
      },
      {
        id: "cobro",
        heading: "Quién cobra",
        blocks: [
          {
            type: "p",
            text: "Fénix no almacena el número completo de la tarjeta ni el código de seguridad. El cobro lo hace un procesador externo. Según el checkout activo, ese procesador puede ser uno de estos:",
          },
          { type: "processors" },
          {
            type: "p",
            text: "Cuando ese procesador actúa como Merchant of Record, es el vendedor registrado de la transacción, puede calcular y recaudar los impuestos indirectos del cobro y tramita el cargo y, si procede, la devolución. Fénix sigue siendo quien suministra el curso o el software. El nombre que aparezca en el recibo es el que procesó esa compra.",
          },
        ],
      },
      {
        id: "vigencia",
        heading: "Vigencia",
        blocks: [
          {
            type: "p",
            parts: [
              "Rige la política publicada en la fecha de tu compra. Los ",
              { href: "/terminos", label: "Términos de servicio" },
              " y la ",
              { href: "/privacidad", label: "Política de privacidad" },
              " forman parte de la misma relación.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "Refund Policy",
    description:
      "Refunds for Diarios del Fénix and cancellation of Fénix directory and web app subscriptions.",
    eyebrow: "Legal",
    lead: "Diarios del Fénix is a digital course. Directory and web app subscriptions are software. This policy states, before payment, when a refund is available and when cancellation leaves the current period as it stands.",
    contentsLabel: "Contents",
    relatedLabel: "Related documents",
    identityTitle: "Who stands behind this policy",
    sections: [
      {
        id: "scope",
        heading: "Scope",
        blocks: [
          {
            type: "p",
            parts: [
              "This policy covers digital purchases made on ",
              { href: operator.site, label: operator.siteHost },
              " from Andres Fernando Morales Sanabria, operating as Fénix. The address for every request is ",
              email,
              ".",
            ],
          },
          {
            type: "p",
            text: "It covers two product families. The first is the digital course Diarios del Fénix. The second is subscriptions to the automated web-directory software and to paid features inside the web apps. A private session described on its own page, and booked through its own channel, follows what was agreed when it was booked.",
          },
        ],
      },
      {
        id: "course",
        heading: "Diarios del Fénix",
        blocks: [
          {
            type: "p",
            text: "Diarios del Fénix is an interactive digital course. It is delivered by online access and, where the course itself offers it, by download. It is not a physical good, not personalized advice, and not a service that a person performs by hand after payment.",
          },
          {
            type: "note",
            parts: [
              "Once the material is opened or downloaded, there is no refund. Opening a practice, playing a video, or downloading a file counts as access. Digital content already delivered cannot be returned.",
            ],
          },
          {
            type: "p",
            text: "If you have not yet opened or downloaded the material, you may request a refund within 14 days of payment. If access was used before that period ends, the purchase is closed.",
          },
        ],
      },
      {
        id: "immediate-access",
        heading: "Immediate access",
        blocks: [
          {
            type: "p",
            text: "The course is delivered when payment is confirmed. Checkout asks for an express acceptance: you request that access begin immediately, and you acknowledge that opening or downloading the material ends the withdrawal right to the extent consumer law allows that waiver.",
          },
          {
            type: "p",
            text: "The waiver does not remove rights that the law forbids waiving. If your country grants a withdrawal period and you have not opened or downloaded the course, you may use it within that period. If you already accessed the course under that acceptance, the right ends.",
          },
        ],
      },
      {
        id: "remedy",
        heading: "When a remedy is due",
        blocks: [
          {
            type: "p",
            text: "A refund or restored access is due, even after the material has been opened, in these cases:",
          },
          {
            type: "ul",
            items: [
              "Payment was taken and access never arrived, and we cannot deliver it within a reasonable time.",
              "The charge is a duplicate.",
              "The charge was not authorized by the payment-method holder.",
              "The course delivered is substantially different from what the purchase page described.",
            ],
          },
          {
            type: "p",
            text: "The remedy is restored access or a refund of the affected charge. A change of mind after opening or downloading the material is not one of these cases.",
          },
        ],
      },
      {
        id: "subscriptions",
        heading: "Directory and app subscriptions",
        blocks: [
          {
            type: "p",
            text: "Access to an automated web directory, and subscriptions to features inside the web apps, are subscription software. You may cancel at any time.",
          },
          {
            type: "note",
            parts: [
              "Cancellation stops the next charge. Days already used in the current period are not refunded, and neither are the days left in that same period. There is no prorated refund.",
            ],
          },
          {
            type: "p",
            text: "You keep access until the period already paid comes to an end. After that, renewal does not occur and the space or feature becomes unavailable, unless you subscribe again.",
          },
          {
            type: "p",
            text: "By starting to use the software in the current period, you ask for performance to begin immediately. That period is not refunded. If a law of your residence requires a withdrawal right before use, you may exercise it only while you have not used the software and only within the legal period.",
          },
        ],
      },
      {
        id: "cancel",
        heading: "How to cancel",
        blocks: [
          {
            type: "p",
            parts: [
              "Cancel in the customer portal of the payment processor named on your receipt, or write to ",
              email,
              " from the purchase email. Include the product and, if you have it, the order number.",
            ],
          },
          {
            type: "p",
            text: "Cancellation is complete when the portal confirms it or when we reply by email. It is wise to cancel before the renewal date. A cancellation after a charge has already been created applies to the period that charge covers.",
          },
        ],
      },
      {
        id: "request",
        heading: "How to request a refund",
        blocks: [
          {
            type: "p",
            parts: [
              "Write to ",
              email,
              " with the subject “Refund”, the purchase email, the product, and the reason. You may also use the support channel of the processor that charged the order.",
            ],
          },
          {
            type: "p",
            text: "We acknowledge the request within five business days and resolve it within fourteen days, unless the processor applies its own timeline to the same order. When a refund is due, it returns by the same payment method. Refunding a course closes access.",
          },
          {
            type: "p",
            text: "If you dispute the charge with your bank, we may show this policy and the delivery or access record. Writing to us first usually resolves the case sooner.",
          },
        ],
      },
      {
        id: "billing",
        heading: "Who charges the payment",
        blocks: [
          {
            type: "p",
            text: "Fénix does not store the full card number or the security code. An external processor charges the payment. Depending on the active checkout, that processor may be one of these:",
          },
          { type: "processors" },
          {
            type: "p",
            text: "When that processor acts as Merchant of Record, it is the seller of record for the transaction, it may calculate and collect indirect taxes on the charge, and it processes the charge and, where due, the refund. Fénix remains the supplier of the course or the software. The name on the receipt is the processor for that purchase.",
          },
        ],
      },
      {
        id: "effect",
        heading: "Effect",
        blocks: [
          {
            type: "p",
            parts: [
              "The policy published on the date of your purchase applies. The ",
              { href: "/terms", label: "Terms of Service" },
              " and the ",
              { href: "/privacy", label: "Privacy Policy" },
              " belong to the same relationship.",
            ],
          },
        ],
      },
    ],
  },
};

export function getRefundPolicy(locale) {
  return localize(copy, locale);
}
