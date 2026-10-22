import FenixMark from "@/components/ui/FenixMark";
import { getLaHouseIntro } from "@/content/works/works";
import { localizeHref } from "@/libs/locale";

export default function HouseBrand({ locale }) {
  const copy = getLaHouseIntro(locale);
  const homeHref = localizeHref("/#top", locale);

  return (
    <a href={homeHref} className="house__brand" aria-label={copy.eyebrow}>
      <FenixMark className="house__brand-mark" />
      <span className="wordmark site-header__wordmark">
        <em>F é n i x</em>
        <em>P u b l i s h i n g</em>
        <em>H o u s e</em>
      </span>
    </a>
  );
}
