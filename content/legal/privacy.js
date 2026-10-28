import { localize } from "@/libs/locale";
import { operator } from "@/content/legal/operator";

const email = { email: operator.email };

const copy = {
  es: {
    title: "Política de privacidad",
    description:
      "Cómo Fénix trata los datos personales de cursos, directorios y suscripciones, y qué derechos reconocen el GDPR y la CCPA.",
    eyebrow: "Legal",
    lead: "Esta política explica qué datos trata Fénix, para qué, con quién se comparten y cómo ejercer los derechos del Reglamento General de Protección de Datos, de la ley colombiana de habeas data y de la CCPA de California.",
    contentsLabel: "Contenido",
    relatedLabel: "Documentos relacionados",
    identityTitle: "Responsable del tratamiento",
    sections: [
      {
        id: "responsable",
        heading: "Responsable",
        blocks: [
          {
            type: "p",
            parts: [
              "El responsable del tratamiento es Andres Fernando Morales Sanabria, quien opera Fénix en ",
              { href: operator.site, label: operator.siteHost },
              ". Las solicitudes de privacidad se envían a ",
              email,
              " con el asunto “Privacidad”.",
            ],
          },
          {
            type: "p",
            text: "Esta política cubre el sitio, el curso Diarios del Fénix, el software de directorios, las suscripciones dentro de las aplicaciones y los mensajes relacionados con esas compras.",
          },
        ],
      },
      {
        id: "datos",
        heading: "Datos que tratamos",
        blocks: [
          {
            type: "p",
            text: "Tratamos solo lo que hace falta para vender y operar los productos digitales.",
          },
          {
            type: "ul",
            items: [
              "Identidad y contacto: nombre, correo, teléfono y la dirección de facturación que el checkout solicite.",
              "Cuenta y acceso: idioma preferido, identificador de acceso al curso y el estado de la suscripción.",
              "Información comercial: producto comprado, importe, moneda, fecha y la referencia del pedido. No guardamos el número completo de la tarjeta ni el código de seguridad.",
              "Contenido que publicas en tu espacio del directorio o dentro de una aplicación.",
              "Datos técnicos: dirección IP, tipo de navegador, páginas visitadas y registros de seguridad.",
              "Mensajes que nos escribes.",
            ],
          },
          {
            type: "p",
            text: "No pedimos documentos de identidad, historiales médicos ni geolocalización precisa. Si nos envías ese tipo de dato por tu cuenta, lo usamos solo para responderte y luego lo borramos o lo reducimos. La ubicación que podemos inferir es aproximada, a partir de la IP o del país de facturación.",
          },
        ],
      },
      {
        id: "fines",
        heading: "Fines y bases",
        blocks: [
          {
            type: "p",
            text: "Cada tratamiento tiene un fin y una base. Cuando aplica el GDPR, la base es una de estas:",
          },
          {
            type: "ul",
            items: [
              "Contrato, o medidas previas a él: crear el acceso, entregar el curso, operar la suscripción, cobrar por medio del procesador y responder sobre un pedido.",
              "Interés legítimo: asegurar el servicio, prevenir fraude y abuso, entender el uso agregado del sitio y defender una reclamación. Puedes oponerte cuando la norma te lo permite.",
              "Consentimiento: una secuencia o un boletín que pides de forma separada. Puedes retirarlo cuando quieras, sin que eso afecte el acceso ya pagado.",
              "Obligación legal: conservar registros contables y atender requerimientos de una autoridad.",
            ],
          },
          {
            type: "p",
            text: "El correo de entrega del acceso, el recibo y los avisos de seguridad son parte del producto. Un boletín que no pediste no se envía.",
          },
        ],
      },
      {
        id: "pagos",
        heading: "Pagos y Merchant of Record",
        blocks: [
          {
            type: "p",
            text: "Fénix no cobra la tarjeta en sus propios servidores. El pago lo procesa un tercero que aparece en el checkout. Según el canal activo, ese tercero puede ser:",
          },
          { type: "processors" },
          {
            type: "note",
            parts: [
              "Cuando el procesador actúa como Merchant of Record, es el vendedor registrado de la transacción. Puede calcular y recaudar los impuestos indirectos, atender el cargo y la devolución, y tratar los datos de pago bajo su propia política.",
            ],
          },
          {
            type: "p",
            text: "En ese caso el procesador es responsable independiente del cobro y de los datos de la tarjeta. Fénix recibe una referencia del pedido, el estado del pago y los datos de contacto necesarios para entregar el producto. El nombre del recibo identifica qué procesador intervino en esa compra. Su política, enlazada arriba, explica cómo trata esos datos.",
          },
        ],
      },
      {
        id: "destinatarios",
        heading: "Destinatarios",
        blocks: [
          {
            type: "p",
            text: "Compartimos datos con proveedores que nos ayudan a operar, y solo para ese fin:",
          },
          {
            type: "ul",
            items: [
              "El procesador de pagos del pedido, de la lista anterior.",
              "Alojamiento y base de datos de accesos y compras (Vercel y Supabase).",
              "Envío del correo de acceso y de los avisos de operación, por el proveedor de correo configurado.",
              "Systeme.io, cuando pides una secuencia o un contacto por formulario.",
              "Medición de uso agregado: Google Analytics y Vercel Analytics.",
              "YouTube, cuando una página inserta un video en modo de privacidad mejorada.",
            ],
          },
          {
            type: "p",
            text: "No vendemos datos personales. Un proveedor no puede usarlos para sus propios fines de marketing a partir de nuestra instrucción. También podemos comunicar un dato si una ley, un juzgado o la red de pagos lo exige para un fraude o una disputa de cargo.",
          },
        ],
      },
      {
        id: "cookies",
        heading: "Cookies",
        blocks: [
          {
            type: "p",
            text: "El sitio usa cookies y almacenamientos pequeños.",
          },
          {
            type: "ul",
            items: [
              "fenix-locale guarda el idioma elegido, hasta un año. Es una preferencia de la casa.",
              "fenix-course guarda la sesión de acceso al curso. Es httpOnly y sirve para reconocerte como comprador.",
              "Google Analytics y Vercel Analytics miden visitas agregadas.",
              "El checkout del procesador puede instalar sus propias cookies mientras pagas. Esas cookies se rigen por la política de ese procesador.",
            ],
          },
          {
            type: "p",
            text: "Puedes bloquear cookies desde el navegador. Si bloqueas la cookie de sesión, el acceso al curso puede pedirte el enlace otra vez. Para la medición, puedes usar los controles del navegador y el complemento de inhabilitación de Google Analytics. Si nos escribes, atendemos también la objeción a la medición asociada a tu correo o a tu cuenta.",
          },
        ],
      },
      {
        id: "transferencias",
        heading: "Transferencias internacionales",
        blocks: [
          {
            type: "p",
            text: "El operador puede estar en un país distinto del tuyo, y varios proveedores tratan datos en Estados Unidos u otros países. Cuando el GDPR, el RGPD del Reino Unido o la ley suiza exigen una garantía, usamos la que el proveedor tiene publicada y vigente: una decisión de adecuación, el Marco de Privacidad de Datos UE-EE. UU. cuando cubre a ese proveedor, o cláusulas contractuales tipo.",
          },
          {
            type: "p",
            text: "Puedes pedir un resumen de esas garantías al correo de contacto.",
          },
        ],
      },
      {
        id: "conservacion",
        heading: "Conservación",
        blocks: [
          {
            type: "ul",
            items: [
              "Datos de la compra y del acceso: mientras el acceso esté vigente y, después, el tiempo que exijan la contabilidad y la defensa de reclamaciones. Ese plazo suele ser de cinco años.",
              "Sesión del curso: hasta un año, o antes si pides el cierre.",
              "Idioma: hasta un año, o hasta que lo cambies.",
              "Mensajes de soporte: hasta veinticuatro meses después de cerrar el caso.",
              "Registros de seguridad: hasta doce meses, salvo un incidente que obligue a conservarlos más.",
              "Contenido de un directorio: mientras la suscripción esté activa y durante el cierre técnico posterior.",
              "Un contacto que pediste para una secuencia: hasta que retires el consentimiento o te opongas.",
            ],
          },
        ],
      },
      {
        id: "gdpr",
        heading: "Derechos del GDPR",
        blocks: [
          {
            type: "p",
            text: "Si el GDPR se aplica a tu caso, puedes pedir acceso, rectificación, supresión, limitación, portabilidad y oposición. Cuando el tratamiento se basa en el consentimiento, puedes retirarlo. También puedes no quedar sujeto a una decisión basada solo en un tratamiento automatizado que produzca efectos jurídicos; Fénix no toma ese tipo de decisión sobre las personas.",
          },
          {
            type: "p",
            parts: [
              "Escribe a ",
              email,
              ". Respondemos en el plazo de un mes. Si el pedido es complejo, el plazo puede extenderse dos meses más, y te lo diremos dentro del primero. Podemos pedirte que confirmes que el correo es el de la compra, para no entregar datos a otra persona.",
            ],
          },
          {
            type: "p",
            text: "Puedes reclamar ante la autoridad de protección de datos de tu país de residencia, de tu lugar de trabajo o del lugar de la infracción. Ese derecho no exige que nos escribas primero, aunque hacerlo suele resolver el caso.",
          },
        ],
      },
      {
        id: "colombia",
        heading: "Colombia",
        blocks: [
          {
            type: "p",
            text: "Si la Ley 1581 de 2012 se aplica, puedes conocer, actualizar, rectificar y suprimir tus datos, y revocar la autorización cuando no exista un deber legal o contractual de conservarlos. La queja puede dirigirse a la Superintendencia de Industria y Comercio.",
          },
        ],
      },
      {
        id: "ccpa",
        heading: "CCPA y CPRA",
        blocks: [
          {
            type: "p",
            text: "Esta sección es para residentes de California. En los doce meses anteriores podemos haber recogido estas categorías: identificadores (nombre, correo, teléfono, IP), información comercial (producto, importe, estado de la suscripción), actividad de internet (páginas y uso del sitio) y geolocalización aproximada. Las fuentes son tú, tu dispositivo y el procesador de pagos. Los fines son entregar el producto, cobrar, asegurar el servicio y medir el uso agregado.",
          },
          {
            type: "p",
            text: "No vendemos información personal a cambio de dinero. No compartimos información personal para publicidad conductual de contexto cruzado como actividad del negocio. Google Analytics puede recibir eventos de uso. Un residente de California puede escribirnos para optar por que no vendamos ni compartamos su información, y atenderemos esa solicitud. No discriminamos por ejercer un derecho.",
          },
          {
            type: "p",
            text: "Puedes solicitar saber, corregir y suprimir. Puedes usar un agente autorizado si demuestra que actúa por ti. Verificamos la solicitud con el correo de la compra. Respondemos en cuarenta y cinco días y, si hace falta, avisamos una prórroga de otros cuarenta y cinco. No usamos información personal sensible para inferir características. Los datos de la tarjeta los trata el procesador.",
          },
        ],
      },
      {
        id: "menores",
        heading: "Menores",
        blocks: [
          {
            type: "p",
            text: "Los productos se dirigen a personas mayores de edad. No recogemos datos de menores de 16 años a sabiendas. Si sabemos que un menor nos dio datos, los borramos y cerramos el acceso. Si eres madre, padre o tutor, escríbenos.",
          },
        ],
      },
      {
        id: "seguridad",
        heading: "Seguridad",
        blocks: [
          {
            type: "p",
            text: "Usamos cifrado en tránsito, controles de acceso y una cookie de sesión httpOnly para el curso. El dato de la tarjeta permanece en el procesador. Ningún sistema es invulnerable. Si ocurre una brecha que la ley obligue a comunicar, la comunicaremos a las personas afectadas y a la autoridad que corresponda.",
          },
        ],
      },
      {
        id: "cambios",
        heading: "Cambios y contacto",
        blocks: [
          {
            type: "p",
            text: "Si esta política cambia, publicamos la nueva fecha al inicio de la página. Un cambio que reduzca un derecho de forma relevante se avisa en el sitio antes de entrar en vigor y, cuando tenemos el correo de un cliente activo, también por correo.",
          },
          {
            type: "p",
            parts: [
              "Para ejercer un derecho o hacer una pregunta: ",
              email,
              ". Los ",
              { href: "/terminos", label: "Términos de servicio" },
              " y la ",
              { href: "/reembolsos", label: "Política de reembolsos" },
              " completan la información de la compra.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description:
      "How Fénix handles personal data for courses, directories, and subscriptions, and the rights recognized by the GDPR and the CCPA.",
    eyebrow: "Legal",
    lead: "This policy explains what data Fénix processes, why, with whom it is shared, and how to exercise the rights in the General Data Protection Regulation, Colombian habeas data law, and the California CCPA.",
    contentsLabel: "Contents",
    relatedLabel: "Related documents",
    identityTitle: "Data controller",
    sections: [
      {
        id: "controller",
        heading: "Controller",
        blocks: [
          {
            type: "p",
            parts: [
              "The controller is Andres Fernando Morales Sanabria, operating Fénix at ",
              { href: operator.site, label: operator.siteHost },
              ". Privacy requests go to ",
              email,
              " with the subject “Privacy”.",
            ],
          },
          {
            type: "p",
            text: "This policy covers the site, the Diarios del Fénix course, the directory software, subscriptions inside the apps, and messages related to those purchases.",
          },
        ],
      },
      {
        id: "data",
        heading: "Data we process",
        blocks: [
          {
            type: "p",
            text: "We process what is needed to sell and operate the digital products.",
          },
          {
            type: "ul",
            items: [
              "Identity and contact: name, email, phone, and the billing address the checkout asks for.",
              "Account and access: preferred language, course-access identifier, and subscription status.",
              "Commercial information: product purchased, amount, currency, date, and the order reference. We do not store the full card number or the security code.",
              "Content you publish in your directory space or inside an app.",
              "Technical data: IP address, browser type, pages visited, and security logs.",
              "Messages you send us.",
            ],
          },
          {
            type: "p",
            text: "We do not ask for identity documents, medical records, or precise geolocation. If you send that kind of data on your own, we use it only to reply and then delete or reduce it. Location we may infer is approximate, from the IP address or the billing country.",
          },
        ],
      },
      {
        id: "purposes",
        heading: "Purposes and bases",
        blocks: [
          {
            type: "p",
            text: "Each processing has a purpose and a basis. Where the GDPR applies, the basis is one of these:",
          },
          {
            type: "ul",
            items: [
              "Contract, or steps before a contract: creating access, delivering the course, operating the subscription, charging through the processor, and answering about an order.",
              "Legitimate interest: securing the service, preventing fraud and abuse, understanding aggregate use of the site, and defending a claim. You may object where the law allows it.",
              "Consent: a sequence or newsletter you request separately. You may withdraw it at any time, without affecting access already paid for.",
              "Legal obligation: keeping accounting records and answering a request from an authority.",
            ],
          },
          {
            type: "p",
            text: "The access email, the receipt, and security notices are part of the product. A newsletter you did not request is not sent.",
          },
        ],
      },
      {
        id: "payments",
        heading: "Payments and the Merchant of Record",
        blocks: [
          {
            type: "p",
            text: "Fénix does not charge the card on its own servers. An external party shown at checkout processes the payment. Depending on the active channel, that party may be:",
          },
          { type: "processors" },
          {
            type: "note",
            parts: [
              "When the processor acts as Merchant of Record, it is the seller of record for the transaction. It may calculate and collect indirect taxes, handle the charge and the refund, and process payment data under its own policy.",
            ],
          },
          {
            type: "p",
            text: "In that case the processor is an independent controller of the charge and of the card data. Fénix receives an order reference, the payment status, and the contact details needed to deliver the product. The name on the receipt identifies which processor handled that purchase. Its policy, linked above, explains how it handles that data.",
          },
        ],
      },
      {
        id: "recipients",
        heading: "Recipients",
        blocks: [
          {
            type: "p",
            text: "We share data with providers that help us operate, and only for that purpose:",
          },
          {
            type: "ul",
            items: [
              "The payment processor for the order, from the list above.",
              "Hosting and the database of access and purchases (Vercel and Supabase).",
              "Delivery of the access email and operational notices, through the configured email provider.",
              "Systeme.io, when you request a sequence or a form contact.",
              "Aggregate use measurement: Google Analytics and Vercel Analytics.",
              "YouTube, when a page embeds a video in privacy-enhanced mode.",
            ],
          },
          {
            type: "p",
            text: "We do not sell personal data. A provider may not use it for its own marketing from our instruction. We may also disclose a datum if a law, a court, or a payment network requires it for fraud or a charge dispute.",
          },
        ],
      },
      {
        id: "cookies",
        heading: "Cookies",
        blocks: [
          {
            type: "p",
            text: "The site uses cookies and small storage items.",
          },
          {
            type: "ul",
            items: [
              "fenix-locale stores the chosen language, for up to one year. It is a preference of the house.",
              "fenix-course stores the course-access session. It is httpOnly and lets us recognize you as a buyer.",
              "Google Analytics and Vercel Analytics measure aggregate visits.",
              "The processor's checkout may set its own cookies while you pay. Those cookies follow that processor's policy.",
            ],
          },
          {
            type: "p",
            text: "You can block cookies in the browser. If you block the session cookie, course access may ask for the link again. For measurement, you can use browser controls and the Google Analytics opt-out add-on. If you write to us, we also honor an objection to measurement tied to your email or your account.",
          },
        ],
      },
      {
        id: "transfers",
        heading: "International transfers",
        blocks: [
          {
            type: "p",
            text: "The operator may be in a country other than yours, and several providers process data in the United States or elsewhere. Where the GDPR, the UK GDPR, or Swiss law requires a safeguard, we use the one that provider has published and in force: an adequacy decision, the EU-US Data Privacy Framework where it covers that provider, or standard contractual clauses.",
          },
          {
            type: "p",
            text: "You may ask for a summary of those safeguards at the contact email.",
          },
        ],
      },
      {
        id: "retention",
        heading: "Retention",
        blocks: [
          {
            type: "ul",
            items: [
              "Purchase and access data: while access is in force and, after that, for as long as accounting and the defense of claims require. That period is usually five years.",
              "Course session: up to one year, or sooner if you ask us to close it.",
              "Language: up to one year, or until you change it.",
              "Support messages: up to twenty-four months after the case closes.",
              "Security logs: up to twelve months, unless an incident requires us to keep them longer.",
              "Directory content: while the subscription is active and during the technical wind-down afterward.",
              "A contact you requested for a sequence: until you withdraw consent or object.",
            ],
          },
        ],
      },
      {
        id: "gdpr",
        heading: "GDPR rights",
        blocks: [
          {
            type: "p",
            text: "If the GDPR applies to you, you may request access, rectification, erasure, restriction, portability, and objection. Where processing is based on consent, you may withdraw it. You may also ask not to be subject to a decision based solely on automated processing that produces legal effects. Fénix does not make that kind of decision about people.",
          },
          {
            type: "p",
            parts: [
              "Write to ",
              email,
              ". We reply within one month. If the request is complex, the period may extend by two further months, and we will tell you within the first. We may ask you to confirm that the email is the purchase email, so we do not hand data to someone else.",
            ],
          },
          {
            type: "p",
            text: "You may lodge a complaint with the data-protection authority of your country of residence, your place of work, or the place of the alleged infringement. That right does not require you to write to us first, though writing often resolves the case.",
          },
        ],
      },
      {
        id: "colombia",
        heading: "Colombia",
        blocks: [
          {
            type: "p",
            text: "Where Law 1581 of 2012 applies, you may know, update, rectify, and erase your data, and revoke authorization when there is no legal or contractual duty to keep it. A complaint may be taken to the Superintendence of Industry and Commerce.",
          },
        ],
      },
      {
        id: "ccpa",
        heading: "CCPA and CPRA",
        blocks: [
          {
            type: "p",
            text: "This section is for California residents. In the preceding twelve months we may have collected these categories: identifiers (name, email, phone, IP address), commercial information (product, amount, subscription status), internet activity (pages and site use), and approximate geolocation. The sources are you, your device, and the payment processor. The purposes are delivering the product, charging, securing the service, and measuring aggregate use.",
          },
          {
            type: "p",
            text: "We do not sell personal information for money. We do not share personal information for cross-context behavioral advertising as a business activity. Google Analytics may receive usage events. A California resident may write to us to opt out of sale or sharing, and we will honor that request. We do not discriminate for exercising a right.",
          },
          {
            type: "p",
            text: "You may request to know, correct, and delete. You may use an authorized agent if the agent shows authority to act for you. We verify the request with the purchase email. We respond within forty-five days and, if needed, we give notice of one further forty-five-day extension. We do not use sensitive personal information to infer characteristics. The processor handles card data.",
          },
        ],
      },
      {
        id: "children",
        heading: "Children",
        blocks: [
          {
            type: "p",
            text: "The products are directed to adults. We do not knowingly collect data from anyone under 16. If we learn that a child gave us data, we delete it and close access. If you are a parent or guardian, write to us.",
          },
        ],
      },
      {
        id: "security",
        heading: "Security",
        blocks: [
          {
            type: "p",
            text: "We use encryption in transit, access controls, and an httpOnly session cookie for the course. Card data stays with the processor. No system is invulnerable. If a breach occurs that the law requires us to announce, we will announce it to the people affected and to the authority that applies.",
          },
        ],
      },
      {
        id: "changes",
        heading: "Changes and contact",
        blocks: [
          {
            type: "p",
            text: "If this policy changes, we publish the new date at the top of the page. A change that materially reduces a right is announced on the site before it takes effect and, when we have an active customer's email, by email as well.",
          },
          {
            type: "p",
            parts: [
              "To exercise a right or ask a question: ",
              email,
              ". The ",
              { href: "/terminos", label: "Terms of Service" },
              " and the ",
              { href: "/reembolsos", label: "Refund Policy" },
              " complete the purchase information.",
            ],
          },
        ],
      },
    ],
  },
};

export function getPrivacyPolicy(locale) {
  return localize(copy, locale);
}
