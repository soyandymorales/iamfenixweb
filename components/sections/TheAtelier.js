import TierCard from "@/components/ui/TierCard";
import { atelierIntro, tiers } from "@/content/services/tiers";

export default function TheAtelier() {
  return (
    <section
      id="atelier"
      className="section section--parchment"
      aria-labelledby="atelier-title"
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow" data-reveal>
            La práctica privada
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
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
