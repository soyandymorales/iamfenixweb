import { stripLocalePrefix } from "@/libs/locale";

// Clean paths for the homepage chapters. `home` is the former `#top` link.
export const HOME_SECTION_IDS = {
  home: "top",
  historia: "historia",
  ecosistema: "ecosistema",
  biblioteca: "biblioteca",
  "empieza-aqui": "empieza-aqui",
};

function barePath(pathname) {
  const bare = stripLocalePrefix(pathname || "/");
  if (bare.length > 1 && bare.endsWith("/")) return bare.slice(0, -1);
  return bare || "/";
}

export function isHomeSection(segment) {
  return Object.prototype.hasOwnProperty.call(HOME_SECTION_IDS, segment);
}

export function homeSectionId(pathname) {
  const path = barePath(pathname);
  if (path === "/" || path === "/home") return "top";
  if (path.indexOf("/", 1) !== -1) return null;
  return HOME_SECTION_IDS[path.slice(1)] ?? null;
}

const chapterIds = Object.fromEntries(
  Object.entries(HOME_SECTION_IDS).filter(([, id]) => id !== "top")
);

export const homeSectionHeadScript = `document.documentElement.classList.add("js");(function(){var map=${JSON.stringify(chapterIds)};function bare(){var path=location.pathname.replace(/\\/+$/,"")||"/";if(path.indexOf("/en/")===0)path=path.slice(3);else if(path==="/en")path="/";return path;}function align(){var id=map[bare().slice(1)];if(!id)return;var el=document.getElementById(id);if(!el)return;document.documentElement.style.scrollBehavior="auto";var padding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;var margin=parseFloat(getComputedStyle(el).scrollMarginTop)||0;window.scrollTo(0,Math.max(0,Math.round(el.getBoundingClientRect().top+window.scrollY-(padding+margin))));}if(map[bare().slice(1)])document.documentElement.style.scrollBehavior="auto";if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",align);else align();})();`;
