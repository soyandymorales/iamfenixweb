import FenixMark from "@/components/ui/FenixMark";
import { getLaHouseIntro } from "@/content/works/works";
import { localizeHref } from "@/libs/locale";

export default function HouseHeader({ locale }) {
  const copy = getLaHouseIntro(locale);
  const homeHref = localizeHref("/#top", locale);

  return (
    <header className="house-site-header">
      <div className="container house-site-header__inner">
        <a
          href={homeHref}
          className="house-site-header__brand"
          aria-label={copy.eyebrow}
        >
          <FenixMark className="house-site-header__mark" />
          <span className="wordmark site-header__wordmark">
            <em>F é n i x</em><em>P u b l i s h i n g</em><em>H o u s e </em> 
          </span>
        </a>
      </div>
    </header>
  );
}
