import {
  createAccessToken,
  markOrderEmail,
  saveAccessToken,
} from "@/libs/buyers";
import { sendAccessEmail } from "@/libs/email";
import { accessLink } from "@/libs/site";
import { pickLocale } from "@/libs/locale";

export async function deliverCourseAccess({ buyer, providerOrderId, locale }) {
  const token = createAccessToken();
  await saveAccessToken(buyer.id, token);
  const result = await sendAccessEmail({
    to: buyer.email,
    accessUrl: accessLink(token, pickLocale(locale)),
    locale,
  });
  await markOrderEmail(providerOrderId, {
    status: result.ok ? "sent" : "failed",
    errorMessage: result.ok ? null : result.error,
  });
  return { ...result, token };
}
