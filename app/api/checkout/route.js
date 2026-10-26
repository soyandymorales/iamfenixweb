import { createCheckoutUrl } from "@/libs/lemonsqueezy";
import { pickLocale } from "@/libs/locale";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const url = await createCheckoutUrl(pickLocale(body?.locale));
  if (!url) {
    return Response.json({ ok: false, error: "checkout_unavailable" }, { status: 503 });
  }

  return Response.json({ ok: true, url });
}
