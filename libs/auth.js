import { cookies } from "next/headers";

import { findBuyerByToken } from "@/libs/buyers";
import { readPreviewSession } from "@/libs/preview-access";

export const COURSE_COOKIE = "fenix-course";
export const COURSE_LINK_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const COURSE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function courseCookieOptions(maxAge = COURSE_COOKIE_MAX_AGE) {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

export async function getCourseSession() {
  const jar = await cookies();
  const token = jar.get(COURSE_COOKIE)?.value;
  if (!token) return null;
  const preview = readPreviewSession(token);
  if (preview) return preview;
  try {
    return await findBuyerByToken(token);
  } catch (error) {
    console.error(error);
    return null;
  }
}
