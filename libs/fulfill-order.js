import { DIARIOS_PRODUCT_CODE } from "@/content/diarios/offer";
import { recordPaidOrder, revokeOrder } from "@/libs/buyers";
import { deliverCourseAccess } from "@/libs/course-access";
import { expectedAmountMinor } from "@/libs/paypal";
import { pickLocale } from "@/libs/locale";

function cleanName(value) {
  return String(value || "")
    .replace(/[\u0000-\u001F]/g, "")
    .trim()
    .slice(0, 80);
}

function buyerFromContact(order, contact) {
  const typed = String(contact?.email || "").trim().toLowerCase();
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(typed) ? typed : String(order.email || "").trim().toLowerCase();
  const fullName = [cleanName(contact?.givenName), cleanName(contact?.familyName)].filter(Boolean).join(" ");
  return {
    email,
    fullName: fullName || order.fullName || "",
  };
}

export async function grantPaidOrder(order, locale, contact) {
  const expected = expectedAmountMinor();
  const buyerContact = buyerFromContact(order, contact);
  const paid =
    order?.status === "COMPLETED" &&
    order.captureStatus === "COMPLETED" &&
    order.customId === DIARIOS_PRODUCT_CODE &&
    order.amountMinor === expected &&
    order.currency === "USD" &&
    buyerContact.email &&
    order.orderId;

  if (!paid) return { granted: false };

  const recorded = await recordPaidOrder({
    email: buyerContact.email,
    fullName: buyerContact.fullName,
    providerOrderId: order.orderId,
    variantId: DIARIOS_PRODUCT_CODE,
    amountMinor: order.amountMinor,
    currency: order.currency,
  });

  let token = "";
  if (recorded.created || recorded.order?.email_status !== "sent") {
    const delivery = await deliverCourseAccess({
      buyer: recorded.buyer,
      providerOrderId: order.orderId,
      locale: pickLocale(locale),
    });
    token = delivery?.token || "";
  }

  return { granted: true, token };
}

export async function revokePaidOrder(orderId) {
  if (!orderId) return;
  await revokeOrder(orderId);
}
