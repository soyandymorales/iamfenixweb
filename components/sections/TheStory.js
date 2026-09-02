import Image from "next/image";

import { founder } from "@/content/entities/founder";
import { siteMetadata } from "@/content/metadata/site";
import andyBio from "@/public/images/andybio.jpg";

function emphasize(text, phrase) {
  if (!phrase) return text;

  const index = text.indexOf(phrase);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <em>{phrase}</em>
      {text.slice(index + phrase.length)}
    </>
  );
}

export default function TheStory() {
  const { story } = founder;
  const [openingLine, rebuildLine] = story.opening;
  const linkedinHref = siteMetadata.social.linkedin;

  return (
    <section id="historia" className="story" aria-labelledby="story-title">
      <div className="story__spread">
        <div className="story__column">
          <header className="story__intro">
            <p className="story__kicker" data-reveal>
              Historia — {founder.name}
            </p>

            <h2 id="story-title" className="story__headline" data-reveal>
              <span>{openingLine}</span>
              <em>{rebuildLine}</em>
            </h2>
          </header>

          <div className="story__narrative">
            <div className="story__copy">
              <p data-reveal>{emphasize(story.chapters.join(" "), story.emphasis)}</p>
              <p data-reveal>{story.closing.join(" ")}</p>
            </div>

            {linkedinHref && story.cta ? (
              <a
                href={linkedinHref}
                className="btn btn--solid story__cta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${story.cta.label} — ${story.cta.destination} de ${founder.name}`}
                data-reveal
              >
                {story.cta.label}
              </a>
            ) : null}
          </div>
        </div>

        <figure className="story__portrait">
          <div className="story__portrait-frame">
            <Image
              src={andyBio}
              alt="Andy Morales corriendo una carrera de fondo"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="story__image"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
