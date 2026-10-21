import TierCard from "@/components/ui/TierCard";
import { getOffersIntro, getTiers } from "@/content/services/tiers";

export default function AtelierOffers({ locale }) {
  const intro = getOffersIntro(locale);
  const tiers = getTiers(locale);

  return (
    <section
      id="formas-de-trabajar"
      className="section section--hairline-top atelier-offers"
      aria-label={intro.title}
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow" data-reveal>
            {intro.eyebrow}
          </span>
          <h2 data-reveal>{intro.title}</h2>
          <p className="section-lead" data-reveal>
            {intro.intro}
          </p>
        </header>

        <div className="atelier-offers__grid">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} labels={intro} />
          ))}
        </div>
      </div>
    </section>
  );
}
