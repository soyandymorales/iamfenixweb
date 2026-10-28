import { cookies } from "next/headers";

import { findBuyerByToken } from "@/libs/buyers";

export const COURSE_COOKIE = "fenix-course";
export const COURSE_LINK_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

export function courseCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  };
}

export async function getCourseSession() {
  const jar = await cookies();
  const token = jar.get(COURSE_COOKIE)?.value;
  if (!token) return null;
  try {
    return await findBuyerByToken(token);
  } catch (error) {
    console.error(error);
    return null;
  }
}
