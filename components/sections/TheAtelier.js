import TierCard from "@/components/ui/TierCard";
import { getAtelierIntro, getTiers } from "@/content/services/tiers";

export default function TheAtelier({ locale }) {
  const atelierIntro = getAtelierIntro(locale);
  const tiers = getTiers(locale);

  return (
    <section
      id="atelier"
      className="section section--parchment"
      aria-labelledby="atelier-title"
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow" data-reveal>
            {atelierIntro.eyebrow}
          </span>
          <h2 id="atelier-title" data-reveal>
            {atelierIntro.title}
          </h2>
          <p className="section-lead" data-reveal>
            {atelierIntro.subtitle}
          </p>
        </header>

        <div className="atelier__grid">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
