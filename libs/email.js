import nodemailer from "nodemailer";

import { getAccessEmail } from "@/content/diarios/access-email";
import { pickLocale } from "@/libs/locale";

function mailConfig() {
  const from = process.env.EMAIL_FROM?.trim();
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = Number(process.env.SMTP_PORT || 465);
  if (!from || !host || !user || !pass || !Number.isInteger(port)) return null;
  return { from, host, user, pass, port };
}

export function isAccessEmailConfigured() {
  return Boolean(mailConfig());
}

export async function sendAccessEmail({ to, accessUrl, locale }) {
  const config = mailConfig();
  if (!config) return { ok: false, error: "email_not_configured" };

  const message = getAccessEmail(pickLocale(locale), accessUrl);
  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  try {
    await transport.sendMail({
      from: config.from,
      to,
      subject: message.subject,
      text: message.text,
    });
    return { ok: true };
  } catch (error) {
    console.error("access_email", error?.code || "failed");
    return { ok: false, error: "email_failed" };
  }
}
