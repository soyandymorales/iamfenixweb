import { getAccessEmail } from "@/content/diarios/access-email";
import { pickLocale } from "@/libs/locale";

function mailConfig() {
  const apiKey = process.env.EMAIL_API_KEY?.trim();
  const from = process.env.EMAIL_FROM?.trim();
  if (!apiKey || !from) return null;
  return { apiKey, from };
}

export function isAccessEmailConfigured() {
  return Boolean(mailConfig());
}

export async function sendAccessEmail({ to, accessUrl, locale }) {
  const config = mailConfig();
  if (!config) return { ok: false, error: "email_not_configured" };

  const message = getAccessEmail(pickLocale(locale), accessUrl);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: [to],
      subject: message.subject,
      text: message.text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error(detail.slice(0, 500));
    return { ok: false, error: "email_failed" };
  }

  return { ok: true };
}
