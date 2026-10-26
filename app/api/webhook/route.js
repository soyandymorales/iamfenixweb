import {
  claimWebhookEvent,
  recordPaidOrder,
  releaseWebhookEvent,
  revokeOrder,
} from "@/libs/buyers";
import { deliverCourseAccess } from "@/libs/course-access";
import {
  expectedVariantId,
  readOrder,
  verifyWebhookSignature,
  webhookSecretReady,
} from "@/libs/lemonsqueezy";

export async function GET() {
  return Response.json({ ok: true });
}

export async function POST(request) {
  if (!webhookSecretReady()) {
    return Response.json({ ok: false }, { status: 503 });
  }

  const raw = await request.text();
  const signature = request.headers.get("x-signature");
  if (!verifyWebhookSignature(raw, signature)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const order = readOrder(payload);
  if (!order.orderId || !order.eventId) {
    return Response.json({ ok: true });
  }

  let claimed = false;
  try {
    claimed = await claimWebhookEvent(order.eventId, order.eventName);
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 500 });
  }
  if (!claimed) return Response.json({ ok: true });

  try {
    await applyOrder(order);
  } catch (error) {
    console.error(error);
    try {
      await releaseWebhookEvent(order.eventId);
    } catch (releaseError) {
      console.error(releaseError);
    }
    return Response.json({ ok: false }, { status: 500 });
  }

  return Response.json({ ok: true });
}

async function applyOrder(order) {
  if (order.eventName === "order_refunded" || order.refunded) {
    await revokeOrder(order.orderId);
    return;
  }

  if (order.eventName !== "order_created") return;
  if (!expectedVariantId() || order.variantId !== expectedVariantId()) return;
  if (order.status && order.status !== "paid") return;
  if (!Number.isInteger(order.amountMinor) || order.amountMinor <= 0) {
    throw new Error("invalid_amount");
  }
  if (!/^[A-Z]{3}$/.test(order.currency) || !order.email) {
    throw new Error("invalid_order");
  }

  const recorded = await recordPaidOrder({
    email: order.email,
    fullName: order.fullName,
    providerOrderId: order.orderId,
    variantId: order.variantId,
    amountMinor: order.amountMinor,
    currency: order.currency,
  });

  if (recorded.created || recorded.order?.email_status !== "sent") {
    await deliverCourseAccess({
      buyer: recorded.buyer,
      providerOrderId: order.orderId,
      locale: order.locale,
    });
  }
}
