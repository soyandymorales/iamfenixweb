import { browserClientToken, isCheckoutConfigured } from "@/libs/paypal";

export async function GET() {
  if (!isCheckoutConfigured()) {
    return Response.json({ ok: false }, { status: 503 });
  }

  try {
    const accessToken = await browserClientToken();
    if (!accessToken) {
      return Response.json({ ok: false }, { status: 503 });
    }
    return Response.json({ accessToken });
  } catch (error) {
    console.error("checkout_client_token", error?.message || "failed");
    return Response.json({ ok: false }, { status: 503 });
  }
}
