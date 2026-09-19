import Card from "@/components/ui/Card";
import FenixMark from "@/components/ui/FenixMark";
import { getFilosofiaIntro, getPilares } from "@/content/domains/filosofia";
import { getHomeCopy } from "@/content/metadata/home";

export default function FilosofiaFenix({ locale }) {
  const chrome = getHomeCopy(locale).filosofia;
  const filosofiaIntro = getFilosofiaIntro(locale);
  const pilares = getPilares(locale);
  return (
    <section
      className="section section--viewport filosofia"
      aria-labelledby="filosofia-title"
    >
      <div className="container">
        <header className="section-header section-header--center reading-body">
          <span className="eyebrow" data-reveal>
            {chrome.eyebrow}
          </span>
          <h2 id="filosofia-title" data-reveal>
            {chrome.title}
          </h2>
          <div className="filosofia__ornament" data-reveal>
            <FenixMark className="filosofia__mark" />
          </div>
          <p className="section-lead" data-reveal>
            {filosofiaIntro}
          </p>
        </header>

        <div className="filosofia__grid">
          {pilares.map((pilar) => (
            <Card
              key={pilar.id}
              numeral={pilar.numeral}
              illustration={pilar.illustration}
              title={pilar.title}
              subtitle={pilar.claim}
              description={pilar.definition}
              scripture={pilar.scripture}
              accent={pilar.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
