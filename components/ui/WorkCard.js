import Link from "next/link";

import WorkMark from "@/components/ui/WorkMark";

export default function WorkCard({ work }) {
  const isLinked = Boolean(work.href);
  const Tag = isLinked ? Link : "article";
  const extra = isLinked ? { href: work.href } : {};

  return (
    <Tag className="work-card" data-reveal {...extra}>
      <WorkMark mark={work.mark} />
      <div className="work-card__body">
        <div className="work-card__top">
          <div className="work-card__heading">
            <span className="work-card__type">{work.type}</span>
            <h2 className="work-card__title">{work.title}</h2>
          </div>
          <span
            className={`work-card__tag work-card__tag--${
              work.status === "live" ? "live" : "queue"
            }`}
          >
            {work.tag}
          </span>
        </div>
        <p className="work-card__description">{work.description}</p>
        {work.cta && isLinked ? (
          <span className="work-card__cta">{work.cta}</span>
        ) : null}
      </div>
    </Tag>
  );
}
