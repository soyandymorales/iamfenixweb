import { buyerHasAccess, findBuyerByEmail, latestPaidOrderId } from "@/libs/buyers";
import { deliverCourseAccess } from "@/libs/course-access";
import { pickLocale } from "@/libs/locale";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  return Response.json({ ok: true });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: true });
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const locale = pickLocale(body?.locale);
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json({ ok: true });
  }

  try {
    const buyer = await findBuyerByEmail(email);
    const orderId = buyer && (await buyerHasAccess(buyer.id))
      ? await latestPaidOrderId(buyer.id)
      : null;
    if (buyer && orderId) {
      await deliverCourseAccess({
        buyer,
        providerOrderId: orderId,
        locale,
      });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 500 });
  }

  return Response.json({ ok: true });
}
