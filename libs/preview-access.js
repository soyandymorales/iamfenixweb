import { timingSafeEqual } from "crypto";

function previewToken() {
  return process.env.COURSE_PREVIEW_TOKEN?.trim() || "";
}

function previewUntilMs() {
  const raw = process.env.COURSE_PREVIEW_UNTIL?.trim() || "";
  const ms = Date.parse(raw);
  return Number.isFinite(ms) ? ms : 0;
}

function tokensMatch(provided, expected) {
  const left = Buffer.from(provided);
  const right = Buffer.from(expected);
  if (left.length === 0 || left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function previewWindowOpen() {
  const token = previewToken();
  const until = previewUntilMs();
  return Boolean(token) && until > Date.now();
}

export function readPreviewSession(token) {
  const expected = previewToken();
  if (!expected || !token || !previewWindowOpen()) return null;
  if (!tokensMatch(token, expected)) return null;
  return { id: "preview", email: "revision@iamfenix.com", preview: true };
}

export function previewCookieMaxAge() {
  const until = previewUntilMs();
  if (!until) return 0;
  return Math.max(0, Math.floor((until - Date.now()) / 1000));
}
