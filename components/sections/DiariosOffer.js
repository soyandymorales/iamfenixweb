import Image from "next/image";

import BrandWordmark from "@/components/ui/BrandWordmark";
import ScriptureCitation from "@/components/ui/ScriptureCitation";
import { DIARIOS_VOICE_IDS, getDiariosOffer } from "@/content/diarios/offer";
import { getTestimonials } from "@/content/testimonials/testimonials";
import { localizedPath } from "@/libs/locale";

const FOLIO = ["I", "II", "III"];

function formatPrice(copy, locale) {
  if (copy.priceCurrency === "USD") return `$${copy.priceAmount}`;
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "es-MX", {
    style: "currency",
    currency: copy.priceCurrency,
    maximumFractionDigits: 0,
  }).format(copy.priceAmount);
}

function OfferCta({ copy, checkoutHref }) {
  return (
    <a className="btn btn--solid diarios-offer__cta" href={checkoutHref}>
      {copy.enter}
    </a>
  );
}

function ChapterKicker({ folio, label }) {
  return (
    <p className="diarios-offer__kicker">
      {folio ? <span className="diarios-offer__folio">{folio}</span> : null}
      <span>{label}</span>
    </p>
  );
}

export default function DiariosOffer({ locale, linkError = false }) {
  const copy = getDiariosOffer(locale);
  const price = formatPrice(copy, locale);
  const checkoutHref = localizedPath("/diarios/checkout", locale);
  const contents = [
    { name: copy.bodyName, span: copy.bodySpan, line: copy.bodyLine },
    { name: copy.happeaceName, span: copy.happeaceSpan, line: copy.happeaceLine },
    { name: copy.moneyName, span: copy.moneySpan, line: copy.moneyLine },
  ];
  const originPlates = [
    { src: "/images/Body 1.png", alt: copy.bodyName },
    { src: "/images/Happeace.png", alt: copy.happeaceName },
    { src: "/images/Money1.png", alt: copy.moneyName },
    { src: "/images/Money 2.png", alt: copy.moneyName },
  ];
  const voices = getTestimonials(locale).filter((item) => DIARIOS_VOICE_IDS.includes(item.id));

  return (
    <article className="diarios-offer">
      <section className="diarios-offer__chapter diarios-offer__hero" aria-labelledby="diarios-offer-title">
        <div className="container">
          <div className="diarios-offer__sheet">
            <header className="diarios-offer__masthead">
              <BrandWordmark className="wordmark site-header__wordmark diarios-offer__mark" priority />
              <ChapterKicker label={copy.eyebrow} />
              <h1 id="diarios-offer-title" className="diarios-offer__headline">
                <span className="diarios-offer__headline-accent">{copy.titleAccent}</span>
                <span className="diarios-offer__headline-rest">{copy.titleRest}</span>
              </h1>
              <p className="diarios-offer__deck">{copy.opening}</p>
            </header>
            {linkError ? <p className="diarios-offer__note">{copy.linkError}</p> : null}
            <OfferCta copy={copy} checkoutHref={checkoutHref} />
          </div>
        </div>
      </section>

      <section className="diarios-offer__chapter" aria-labelledby="diarios-story-title">
        <div className="container">
          <div className="diarios-offer__sheet">
            <header className="diarios-offer__masthead">
              <ChapterKicker folio="01" label={copy.storyEyebrow} />
              <h2 id="diarios-story-title" className="diarios-offer__headline diarios-offer__headline--duo">
                <span>{copy.storyTitleLine1}</span>
                <span>{copy.storyTitleLine2}</span>
              </h2>
              <p className="diarios-offer__deck">{copy.storyLead}</p>
            </header>
            <div className="diarios-offer__prose">
              {copy.storyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="diarios-offer__closing">{copy.storyClose}</p>
            </div>
            <div className="diarios-offer__plates diarios-offer__plates--origin">
              {originPlates.map((plate) => (
                <figure key={plate.src} className="diarios-offer__plate">
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    width={720}
                    height={1280}
                    sizes="(max-width: 768px) 100vw, 440px"
                  />
                </figure>
              ))}
            </div>
            <aside className="diarios-offer__pull">
              <p className="diarios-offer__pull-text">{copy.scriptureNote}</p>
              <ScriptureCitation reference={copy.scriptureReference} text={copy.scriptureText} />
            </aside>
          </div>
        </div>
      </section>

      <section className="diarios-offer__chapter" aria-labelledby="diarios-includes-title">
        <div className="container">
          <div className="diarios-offer__sheet">
            <header className="diarios-offer__masthead">
              <ChapterKicker folio="02" label={copy.architecturesLabel} />
              <h2 id="diarios-includes-title" className="diarios-offer__headline">
                {copy.includesTitle}
              </h2>
            </header>
            <ol className="diarios-offer__index" aria-label={copy.architecturesLabel}>
              {contents.map((item, index) => (
                <li key={item.name}>
                  <span className="diarios-offer__index-folio" aria-hidden="true">
                    {FOLIO[index]}
                  </span>
                  <div className="diarios-offer__index-body">
                    <div className="diarios-offer__index-head">
                      <span className="diarios-offer__index-name">{item.name}</span>
                      <span className="diarios-offer__index-span">{item.span}</span>
                    </div>
                    <p>{item.line}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="diarios-offer__colophon" aria-label={copy.philosophyTitle}>
              <p className="diarios-offer__kicker">
                <span>{copy.philosophyTitle}</span>
              </p>
              <ul>
                {copy.philosophy.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="diarios-offer__chapter" aria-labelledby="diarios-voices-title">
        <div className="container">
          <div className="diarios-offer__sheet">
            <header className="diarios-offer__masthead">
              <ChapterKicker folio="03" label={copy.voicesEyebrow} />
              <h2 id="diarios-voices-title" className="diarios-offer__headline">
                {copy.voicesTitle}
              </h2>
            </header>
            <ul className="diarios-offer__voices">
              {voices.map((voice) => (
                <li key={voice.id}>
                  <blockquote className="diarios-offer__voice">
                    <footer className="diarios-offer__voice-meta">
                      <span className="diarios-offer__voice-avatar">
                        {voice.portrait ? (
                          <Image
                            src={voice.portrait}
                            alt=""
                            width={48}
                            height={48}
                            sizes="48px"
                          />
                        ) : (
                          <span aria-hidden="true">
                            {voice.name
                              .split(" ")
                              .map((part) => part[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                        )}
                      </span>
                      <div className="diarios-offer__voice-identity">
                        <cite>
                          {voice.name}
                          {voice.country?.flag ? (
                            <Image
                              src={voice.country.flag}
                              alt={voice.country.name || ""}
                              width={18}
                              height={12}
                              className="diarios-offer__voice-flag"
                            />
                          ) : null}
                        </cite>
                        <span className="diarios-offer__voice-role">{voice.role}</span>
                        {voice.organizations?.length ? (
                          <span className="diarios-offer__voice-proof">
                            {voice.organizations.map((organization) => (
                              <Image
                                key={organization.name}
                                src={organization.logo}
                                alt={organization.name}
                                width={120}
                                height={32}
                                className={
                                  organization.compact
                                    ? "diarios-offer__voice-org diarios-offer__voice-org--compact"
                                    : "diarios-offer__voice-org"
                                }
                              />
                            ))}
                          </span>
                        ) : null}
                      </div>
                    </footer>
                    <p>{voice.quote}</p>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="diarios-offer__chapter diarios-offer__chapter--entrance" aria-label={copy.investmentLabel}>
        <div className="container">
          <div className="diarios-offer__sheet">
            <div className="diarios-offer__subscription">
              <div className="diarios-offer__subscription-meta">
                <p className="diarios-offer__kicker">
                  <span>{copy.investmentLabel}</span>
                </p>
                <p className="diarios-offer__amount">{price}</p>
                <p className="diarios-offer__meta">{copy.once}</p>
              </div>
              <div className="diarios-offer__guarantee">
                <p className="diarios-offer__kicker">
                  <span>{copy.guaranteeTitle}</span>
                </p>
                <p>{copy.guaranteeNote}</p>
              </div>
              <OfferCta copy={copy} checkoutHref={checkoutHref} />
            </div>
          </div>
        </div>
      </section>

      <section
        className="diarios-offer__chapter diarios-offer__chapter--last"
        aria-labelledby="diarios-faq-title"
      >
        <div className="container">
          <div className="diarios-offer__sheet">
            <header className="diarios-offer__masthead">
              <ChapterKicker folio="04" label={copy.faqEyebrow} />
              <h2 id="diarios-faq-title" className="diarios-offer__headline">
                {copy.faqTitle}
              </h2>
            </header>
            <div className="diarios-offer__endnotes">
              {copy.faq.map((item) => (
                <details key={item.q} className="diarios-offer__note-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
