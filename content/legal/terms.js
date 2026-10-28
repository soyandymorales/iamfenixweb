import { localize } from "@/libs/locale";
import { operator } from "@/content/legal/operator";

const email = { email: operator.email };

const copy = {
  es: {
    title: "Términos de servicio",
    description:
      "Condiciones de los cursos digitales, del software de directorios y de las suscripciones dentro de las aplicaciones de Fénix.",
    eyebrow: "Legal",
    lead: "Estos términos rigen el uso de Fénix y la compra de sus productos digitales automatizados: cursos, acceso por suscripción a directorios web y suscripciones de funciones dentro de las aplicaciones.",
    contentsLabel: "Contenido",
    relatedLabel: "Documentos relacionados",
    identityTitle: "Quién ofrece el servicio",
    sections: [
      {
        id: "aceptacion",
        heading: "Aceptación",
        blocks: [
          {
            type: "p",
            parts: [
              "Al pagar, al crear una cuenta, al marcar la aceptación del checkout o al usar el software, aceptas estos términos, la ",
              { href: "/reembolsos", label: "Política de reembolsos" },
              " y la ",
              { href: "/privacidad", label: "Política de privacidad" },
              ". Si compras para una organización, declaras que puedes obligarla.",
            ],
          },
          {
            type: "p",
            text: "Si no aceptas estas condiciones, no completes la compra y no uses el software. Los productos se contratan por personas mayores de edad.",
          },
        ],
      },
      {
        id: "operador",
        heading: "El operador",
        blocks: [
          {
            type: "p",
            parts: [
              "El servicio lo ofrece Andres Fernando Morales Sanabria, persona natural, bajo el nombre comercial Fénix, en ",
              { href: operator.site, label: operator.siteHost },
              ". El contacto es ",
              email,
              ".",
            ],
          },
        ],
      },
      {
        id: "productos",
        heading: "Qué se contrata",
        blocks: [
          {
            type: "p",
            text: "Fénix vende productos digitales automatizados. El acceso se entrega por software. No es una agencia, no es una campaña gestionada a mano y no incluye un entregable que una persona produzca después del pago, salvo que una página describa por separado una sesión privada y esa sesión se reserve por su propio canal.",
          },
          {
            type: "ul",
            items: [
              "Cursos digitales interactivos. El curso a la venta en esta casa es Diarios del Fénix: prácticas en línea sobre cuerpo, paz interior y mayordomía del dinero.",
              "Acceso por suscripción a una plataforma de directorios web automatizados.",
              "Suscripciones de funciones adicionales dentro de las aplicaciones web.",
            ],
          },
          {
            type: "p",
            text: "La página de compra describe el precio, el período y lo que incluye. Esa descripción, junto con estos términos, es el contrato de esa compra.",
          },
        ],
      },
      {
        id: "curso",
        heading: "El curso digital",
        blocks: [
          {
            type: "p",
            text: "Diarios del Fénix se entrega por acceso digital al material. La licencia es personal, limitada, no exclusiva e intransferible, para tu propio uso mientras el acceso esté vigente. No puedes revender el curso, compartir el acceso, publicar el material ni usarlo para entrenar un modelo.",
          },
          {
            type: "p",
            text: "El curso es educativo. No es consejo médico, psicológico, financiero, legal ni de inversión. No es una promesa de ingresos, de salud ni de un resultado personal. Las decisiones sobre tu cuerpo, tu dinero y tu trabajo siguen siendo tuyas.",
          },
        ],
      },
      {
        id: "directorios",
        heading: "El software de directorios",
        blocks: [
          {
            type: "p",
            text: "Una suscripción de directorio es una licencia de uso de software. El directorio publica fichas de forma automatizada a partir de lo que el usuario carga. Fénix no redacta la ficha, no negocia con un medio y no asigna una persona para colocarla.",
          },
          {
            type: "p",
            text: "No hay un volumen prometido de visitas, contactos ni ventas. El software muestra el espacio. El resultado comercial depende del contenido, del mercado y de factores ajenos al software.",
          },
        ],
      },
      {
        id: "publicidad",
        heading: "La publicidad dentro del directorio",
        blocks: [
          {
            type: "note",
            parts: [
              "La publicidad en el directorio es un espacio digital autogestionado por el usuario dentro del software. El usuario crea, edita y retira ese espacio.",
            ],
          },
          {
            type: "p",
            text: "Fénix entrega la función que aloja y muestra el espacio. El texto, la imagen y la ficha los carga quien contrata. Ese espacio no es una pauta comprada a un medio, no es un servicio publicitario manual y no es una gestión de campañas.",
          },
          {
            type: "p",
            text: "Eres responsable de que el contenido sea lícito, veraz y de que tengas derecho a usarlo. Si la ficha incluye datos de otras personas, necesitas una base lícita para publicarlos.",
          },
        ],
      },
      {
        id: "apps",
        heading: "Suscripciones dentro de las aplicaciones",
        blocks: [
          {
            type: "p",
            text: "Una suscripción dentro de una aplicación desbloquea funciones digitales automatizadas. Es software. Se cobra por período, se renueva hasta que la cancelas y sigue la misma regla de cancelación que los directorios.",
          },
        ],
      },
      {
        id: "uso",
        heading: "Uso aceptable y prohibición de spam",
        blocks: [
          {
            type: "p",
            text: "Puedes usar el software para publicar tu propio espacio y para usar las funciones contratadas. Queda prohibido usar los directorios, las aplicaciones, los datos de otros usuarios o la infraestructura de Fénix para spam o abuso.",
          },
          {
            type: "ul",
            items: [
              "Enviar correo, SMS, mensajes directos o notificaciones masivas no solicitadas.",
              "Recolectar direcciones o datos de otras personas para contactarlas fuera de lo que ellas aceptaron.",
              "Extraer el directorio de forma automatizada o construir listas de contacto a partir de él.",
              "Publicar fichas falsas, engañosas o que suplanten a otra persona o marca.",
              "Usar el espacio para phishing, malware, fraude o cualquier contenido ilícito.",
              "Compartir credenciales, revender el acceso o eludir un límite técnico del software.",
              "Sobrecargar el servicio con peticiones abusivas.",
            ],
          },
          {
            type: "p",
            text: "Si hay un incumplimiento, Fénix puede retirar la ficha, suspender el acceso y conservar las pruebas necesarias para responder a una reclamación. La suspensión por incumplimiento no reembolsa el período en curso. Cuando el caso lo permita, avisamos el motivo y dejamos una vía para corregirlo.",
          },
        ],
      },
      {
        id: "cuenta",
        heading: "Cuenta y acceso",
        blocks: [
          {
            type: "p",
            text: "El acceso viaja al correo que indicas. Ese correo debe ser tuyo y debes poder abrirlo. El enlace y la sesión son personales. Eres responsable de lo que ocurra desde tu acceso si lo compartes.",
          },
          {
            type: "p",
            text: "Podemos enviar correos de operación: entrega del acceso, recibos, avisos de seguridad y avisos del servicio. Esos mensajes forman parte del producto. Los mensajes comerciales que pidas por separado se pueden detener desde el propio mensaje o escribiendo al contacto.",
          },
        ],
      },
      {
        id: "precio",
        heading: "Precio, renovación y cancelación",
        blocks: [
          {
            type: "p",
            text: "El precio es el que ves antes de pagar, más el impuesto que el procesador calcule y muestre en el checkout. Una suscripción se renueva al final de cada período hasta que la cancelas. El cargo de renovación usa el medio de pago que dejaste autorizado.",
          },
          {
            type: "p",
            text: "Podemos cambiar el precio de un período futuro. El cambio se avisa antes de esa renovación. Si no lo aceptas, cancela antes de la fecha de renovación. El período ya pagado conserva el precio con el que se cobró.",
          },
          {
            type: "p",
            parts: [
              "Puedes cancelar en cualquier momento desde el portal del procesador o escribiendo a ",
              email,
              ". La cancelación evita el siguiente período. Los días ya utilizados del período en curso no se reembolsan, ni tampoco los días restantes de ese período. El detalle está en la ",
              { href: "/reembolsos", label: "Política de reembolsos" },
              ".",
            ],
          },
          {
            type: "p",
            text: "Si un cobro de renovación falla, el acceso puede suspenderse hasta que el pago se regularice. Un curso de pago único no se renueva.",
          },
        ],
      },
      {
        id: "propiedad",
        heading: "Propiedad intelectual",
        blocks: [
          {
            type: "p",
            text: "El curso, el software, la marca Fénix, los textos de la casa y los nombres de las arquitecturas pertenecen al operador o a sus licenciantes. Tu compra no transfiere esa propiedad. Conservas la licencia de uso descrita en estos términos.",
          },
          {
            type: "p",
            text: "El contenido que cargas en tu espacio sigue siendo tuyo. Nos concedes una licencia mundial, no exclusiva y gratuita para alojarlo, mostrarlo, copiarlo en respaldos y protegerlo mientras la suscripción esté activa y durante un plazo breve de cierre técnico después. Esa licencia termina cuando el espacio se retira, salvo copias que la ley o la seguridad obliguen a conservar por un tiempo limitado.",
          },
          {
            type: "p",
            text: "Declaras que tienes derecho a cargar ese contenido y que no infringe derechos de terceros.",
          },
        ],
      },
      {
        id: "disponibilidad",
        heading: "Disponibilidad",
        blocks: [
          {
            type: "p",
            text: "El software se ofrece según está disponible. Habrá mantenimiento, incidencias y cambios de funciones. Buscamos restaurar el servicio cuando se interrumpe. No prometemos un funcionamiento sin pausas ni una compatibilidad permanente con cada dispositivo.",
          },
        ],
      },
      {
        id: "responsabilidad",
        heading: "Responsabilidad",
        blocks: [
          {
            type: "p",
            text: "Hasta donde la ley lo permite, la responsabilidad total por una reclamación se limita a lo que hayas pagado por el producto que la origina durante los tres meses anteriores a la reclamación. Si el producto fue un pago único, el límite es el precio de ese producto.",
          },
          {
            type: "p",
            text: "Hasta donde la ley lo permite, no respondemos por lucro cesante, pérdida de datos cargados por el usuario, ni daños indirectos. Nada en estos términos limita la responsabilidad que la ley impide limitar, incluidos el dolo, los daños a la vida o la integridad cuando la norma lo ordene, y los derechos de consumo que no se pueden renunciar.",
          },
          {
            type: "p",
            text: "Si un tercero reclama por el contenido de tu espacio o por un uso contrario a la prohibición de spam, nos mantendrás al margen y cubrirás el daño que ese incumplimiento cause, hasta donde la ley lo permita.",
          },
        ],
      },
      {
        id: "ley",
        heading: "Ley aplicable",
        blocks: [
          {
            type: "p",
            text: "Estos términos se rigen por las leyes de Colombia. Esa elección no retira las normas imperativas de protección al consumidor del país donde resides, incluidas las de la Unión Europea, el Reino Unido y California, cuando esas normas no permiten un acuerdo en contrario.",
          },
          {
            type: "p",
            text: "Si la ley te permite reclamar ante los tribunales de tu residencia, puedes hacerlo. En los demás casos, conocen los tribunales de Colombia. Antes de un procedimiento formal, escribe al contacto. Buscaremos una salida en los treinta días siguientes. Ese paso no retrasa una queja ante una autoridad de consumo ni una disputa que la red de pagos exija presentar antes.",
          },
          {
            type: "p",
            text: "La versión del idioma en el que compraste rige esa compra. Si no queda registro del idioma, rige la versión en español.",
          },
        ],
      },
      {
        id: "cambios",
        heading: "Cambios y contacto",
        blocks: [
          {
            type: "p",
            text: "Podemos actualizar estos términos. La fecha de vigencia aparece al inicio de la página. Para un curso ya comprado, rigen los términos de la fecha de compra, salvo un cambio que la ley exija. Para una suscripción, el uso después de la fecha de vigencia nueva corresponde al período siguiente. Si no aceptas el cambio, cancela antes de la renovación.",
          },
          {
            type: "p",
            parts: [
              "Las preguntas sobre estos términos se envían a ",
              email,
              ".",
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service",
    description:
      "Terms for Fénix digital courses, directory software, and in-app subscriptions.",
    eyebrow: "Legal",
    lead: "These terms govern use of Fénix and the purchase of its automated digital products: courses, subscription access to web directories, and feature subscriptions inside the web apps.",
    contentsLabel: "Contents",
    relatedLabel: "Related documents",
    identityTitle: "Who offers the service",
    sections: [
      {
        id: "acceptance",
        heading: "Acceptance",
        blocks: [
          {
            type: "p",
            parts: [
              "By paying, creating an account, checking the checkout acceptance, or using the software, you accept these terms, the ",
              { href: "/reembolsos", label: "Refund Policy" },
              " and the ",
              { href: "/privacidad", label: "Privacy Policy" },
              ". If you buy for an organization, you represent that you can bind it.",
            ],
          },
          {
            type: "p",
            text: "If you do not accept these terms, do not complete the purchase and do not use the software. The products are contracted by adults.",
          },
        ],
      },
      {
        id: "operator",
        heading: "The operator",
        blocks: [
          {
            type: "p",
            parts: [
              "The service is offered by Andres Fernando Morales Sanabria, a natural person, under the trade name Fénix, at ",
              { href: operator.site, label: operator.siteHost },
              ". Contact is ",
              email,
              ".",
            ],
          },
        ],
      },
      {
        id: "products",
        heading: "What you are buying",
        blocks: [
          {
            type: "p",
            text: "Fénix sells automated digital products. Access is delivered by software. It is not an agency, not a campaign run by hand, and not a deliverable that a person produces after payment, unless a page separately describes a private session and that session is booked through its own channel.",
          },
          {
            type: "ul",
            items: [
              "Interactive digital courses. The course sold in this house is Diarios del Fénix: online practices on the body, inner peace, and the stewardship of money.",
              "Subscription access to a platform of automated web directories.",
              "Subscriptions to additional features inside the web apps.",
            ],
          },
          {
            type: "p",
            text: "The purchase page states the price, the period, and what is included. That description, together with these terms, is the contract for that purchase.",
          },
        ],
      },
      {
        id: "course",
        heading: "The digital course",
        blocks: [
          {
            type: "p",
            text: "Diarios del Fénix is delivered by digital access to the material. The license is personal, limited, non-exclusive, and non-transferable, for your own use while access remains in force. You may not resell the course, share access, publish the material, or use it to train a model.",
          },
          {
            type: "p",
            text: "The course is educational. It is not medical, psychological, financial, legal, or investment advice. It is not a promise of income, health, or a personal outcome. Decisions about your body, your money, and your work remain yours.",
          },
        ],
      },
      {
        id: "directories",
        heading: "The directory software",
        blocks: [
          {
            type: "p",
            text: "A directory subscription is a license to use software. The directory publishes listings automatically from what the user uploads. Fénix does not write the listing, does not negotiate with a media outlet, and does not assign a person to place it.",
          },
          {
            type: "p",
            text: "There is no promised volume of visits, contacts, or sales. The software displays the space. The commercial result depends on the content, the market, and factors outside the software.",
          },
        ],
      },
      {
        id: "advertising",
        heading: "Advertising inside the directory",
        blocks: [
          {
            type: "note",
            parts: [
              "Advertising in the directory is a digital space the user manages inside the software. The user creates, edits, and removes that space.",
            ],
          },
          {
            type: "p",
            text: "Fénix supplies the feature that hosts and displays the space. The subscriber uploads the text, the image, and the listing. That space is not a media buy, not a manual advertising service, and not campaign management.",
          },
          {
            type: "p",
            text: "You are responsible for the content being lawful and accurate, and for having the right to use it. If a listing includes other people's data, you need a lawful basis to publish it.",
          },
        ],
      },
      {
        id: "apps",
        heading: "Subscriptions inside the apps",
        blocks: [
          {
            type: "p",
            text: "A subscription inside an app unlocks automated digital features. It is software. It is billed by period, it renews until you cancel, and it follows the same cancellation rule as the directories.",
          },
        ],
      },
      {
        id: "use",
        heading: "Acceptable use and the spam ban",
        blocks: [
          {
            type: "p",
            text: "You may use the software to publish your own space and to use the features you bought. You may not use the directories, the apps, other users' data, or Fénix infrastructure for spam or abuse.",
          },
          {
            type: "ul",
            items: [
              "Sending unsolicited bulk email, SMS, direct messages, or notifications.",
              "Collecting addresses or data from other people in order to contact them beyond what they accepted.",
              "Scraping the directory or building contact lists from it.",
              "Publishing false or misleading listings, or listings that impersonate another person or brand.",
              "Using the space for phishing, malware, fraud, or any unlawful content.",
              "Sharing credentials, reselling access, or bypassing a technical limit of the software.",
              "Overloading the service with abusive requests.",
            ],
          },
          {
            type: "p",
            text: "If there is a breach, Fénix may remove the listing, suspend access, and keep the evidence needed to answer a claim. Suspension for breach does not refund the current period. Where the case allows it, we state the reason and leave a way to correct it.",
          },
        ],
      },
      {
        id: "account",
        heading: "Account and access",
        blocks: [
          {
            type: "p",
            text: "Access is sent to the email you provide. That email must be yours and you must be able to open it. The link and the session are personal. You are responsible for what happens from your access if you share it.",
          },
          {
            type: "p",
            text: "We may send operational email: access delivery, receipts, security notices, and service notices. Those messages are part of the product. Commercial messages you separately request can be stopped from the message itself or by writing to the contact address.",
          },
        ],
      },
      {
        id: "price",
        heading: "Price, renewal, and cancellation",
        blocks: [
          {
            type: "p",
            text: "The price is the one you see before you pay, plus any tax the processor calculates and shows at checkout. A subscription renews at the end of each period until you cancel. The renewal charge uses the payment method you authorized.",
          },
          {
            type: "p",
            text: "We may change the price of a future period. The change is announced before that renewal. If you do not accept it, cancel before the renewal date. A period already paid keeps the price at which it was charged.",
          },
          {
            type: "p",
            parts: [
              "You may cancel at any time from the processor's portal or by writing to ",
              email,
              ". Cancellation stops the next period. Days already used in the current period are not refunded, and neither are the remaining days of that period. The detail is in the ",
              { href: "/reembolsos", label: "Refund Policy" },
              ".",
            ],
          },
          {
            type: "p",
            text: "If a renewal charge fails, access may be suspended until payment is put in order. A one-time course does not renew.",
          },
        ],
      },
      {
        id: "ip",
        heading: "Intellectual property",
        blocks: [
          {
            type: "p",
            text: "The course, the software, the Fénix mark, the house texts, and the architecture names belong to the operator or to its licensors. Your purchase does not transfer that ownership. You keep the license of use described in these terms.",
          },
          {
            type: "p",
            text: "Content you upload to your space remains yours. You grant us a worldwide, non-exclusive, royalty-free license to host it, display it, copy it in backups, and protect it while the subscription is active and for a short technical wind-down afterward. That license ends when the space is removed, except copies that law or security require us to keep for a limited time.",
          },
          {
            type: "p",
            text: "You represent that you have the right to upload that content and that it does not infringe the rights of others.",
          },
        ],
      },
      {
        id: "availability",
        heading: "Availability",
        blocks: [
          {
            type: "p",
            text: "The software is offered as available. There will be maintenance, incidents, and changes to features. We work to restore the service when it is interrupted. We do not promise uninterrupted operation or permanent compatibility with every device.",
          },
        ],
      },
      {
        id: "liability",
        heading: "Liability",
        blocks: [
          {
            type: "p",
            text: "To the extent the law allows, total liability for a claim is limited to what you paid for the product giving rise to it during the three months before the claim. If the product was a one-time purchase, the limit is the price of that product.",
          },
          {
            type: "p",
            text: "To the extent the law allows, we are not liable for lost profits, for loss of data the user uploaded, or for indirect damages. Nothing in these terms limits liability that the law forbids limiting, including fraud, harm to life or bodily integrity where the law so requires, and consumer rights that cannot be waived.",
          },
          {
            type: "p",
            text: "If a third party claims against us because of the content of your space or a use that breaks the spam ban, you will hold us harmless and cover the loss that breach causes, to the extent the law allows.",
          },
        ],
      },
      {
        id: "law",
        heading: "Governing law",
        blocks: [
          {
            type: "p",
            text: "These terms are governed by the laws of Colombia. That choice does not remove mandatory consumer-protection rules of the country where you live, including those of the European Union, the United Kingdom, and California, where those rules do not allow an agreement to the contrary.",
          },
          {
            type: "p",
            text: "If the law lets you bring a claim in the courts of your residence, you may do so. Otherwise the courts of Colombia have jurisdiction. Before a formal proceeding, write to the contact address. We will look for a resolution within the following thirty days. That step does not delay a complaint to a consumer authority or a dispute that a payment network requires you to file sooner.",
          },
          {
            type: "p",
            text: "The language version in which you bought governs that purchase. If there is no record of the language, the Spanish version governs.",
          },
        ],
      },
      {
        id: "changes",
        heading: "Changes and contact",
        blocks: [
          {
            type: "p",
            text: "We may update these terms. The effective date appears at the top of the page. For a course already purchased, the terms of the purchase date govern, except for a change the law requires. For a subscription, use after the new effective date applies to the following period. If you do not accept the change, cancel before renewal.",
          },
          {
            type: "p",
            parts: ["Questions about these terms go to ", email, "."],
          },
        ],
      },
    ],
  },
};

export function getTermsOfService(locale) {
  return localize(copy, locale);
}
