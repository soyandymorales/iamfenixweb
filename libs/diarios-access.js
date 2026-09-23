import { COOKIE_MAX_AGE } from "@/libs/locale";

export const DIARIOS_ACCESS_COOKIE = "fenix-diarios";

export function grantDiariosAccess() {
  document.cookie = `${DIARIOS_ACCESS_COOKIE}=1; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function hasDiariosAccess() {
  return document.cookie
    .split("; ")
    .some((part) => part === `${DIARIOS_ACCESS_COOKIE}=1`);
}
