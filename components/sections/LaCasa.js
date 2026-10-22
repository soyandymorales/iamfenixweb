import Image from "next/image";

import DiariosLeadForm from "@/components/forms/DiariosLeadForm";
import WorkCard from "@/components/ui/WorkCard";
import SocialLinks from "@/components/ui/SocialLinks";
import andyBio from "@/public/images/andybio.jpg";
import { getFounder } from "@/content/entities/founder";
import { siteMetadata } from "@/content/metadata/site";
import { getLaHouseEmpty, getLaHouseIntro, getWorks } from "@/content/works/works";

export default function LaCasa({ locale }) {
  const founder = getFounder(locale);
  const laHouseIntro = getLaHouseIntro(locale);
  const laHouseEmpty = getLaHouseEmpty(locale);
  const works = getWorks(locale);

  return (
    <section
      id="la-house"
      className="house"
      aria-labelledby="house-title"
    >
      <div className="container house__layout">
        <aside className="house__profile" data-reveal>
          <div className="house__portrait">
            <Image
              src={andyBio}
              alt={founder.portrait.alt}
              fill
              priority
              sizes="192px"
              className="house__portrait-image"
            />
          </div>

          <div className="house__identity">
            <p className="house__name">{founder.name}</p>
            <p className="house__line">{founder.houseProfile.role}</p>
          </div>

          <div className="house__profile-copy">
            <p className="house__guide">{founder.houseProfile.guide}</p>
          </div>

          <DiariosLeadForm
            variant="house"
            copy={founder.houseProfile.form}
          />

          <SocialLinks links={siteMetadata.social} />
        </aside>

        <div className="house__main">
          <header className="house__header">
            <h1 id="house-title" data-reveal>
              {laHouseIntro.title}
            </h1>
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
      </div>
    </section>
  );
}
