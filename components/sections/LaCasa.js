import Image from "next/image";

import WorkCard from "@/components/ui/WorkCard";
import SocialLinks from "@/components/ui/SocialLinks";
import FenixMark from "@/components/ui/FenixMark";
import andyBio from "@/public/images/andybio.jpg";
import { founder } from "@/content/entities/founder";
import { siteMetadata } from "@/content/metadata/site";
import { laHouseEmpty, laHouseIntro, works } from "@/content/works/works";

export default function LaCasa() {
  return (
    <section
      id="la-house"
      className="house"
      aria-labelledby="house-title"
    >
      <div className="container house__layout">
        <div className="house__main">
          <header className="house__header">
            <div className="house__brand" data-reveal>
              <span className="house__seal" aria-hidden="true">
                <FenixMark className="house__seal-mark" />
              </span>
              <h1 id="house-title">{laHouseIntro.heading}</h1>
            </div>
            <p className="house__lead" data-reveal>
              {laHouseIntro.subtitle}
            </p>
          </header>

          {works.length > 0 ? (
            <div className="works__grid">
              {works.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          ) : (
            <p className="house__empty" data-reveal>
              {laHouseEmpty.title} {laHouseEmpty.body}
            </p>
          )}
        </div>

        <aside className="house__profile" data-reveal>
          <div className="house__portrait">
            <Image
              src={andyBio}
              alt={founder.portrait.alt}
              fill
              sizes="160px"
              className="house__portrait-image"
            />
          </div>

          <p className="house__name">{founder.givenName}</p>
          <p className="house__line">{founder.line}</p>
          <SocialLinks links={siteMetadata.social} />
          <p className="house__bio">{founder.bio}</p>
          <a href={founder.cta.href} className="btn btn--solid">
            {founder.cta.label}
          </a>
        </aside>
      </div>
    </section>
  );
}
