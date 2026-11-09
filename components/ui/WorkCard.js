import Image from "next/image";
import Link from "next/link";

import FenixMark from "@/components/ui/FenixMark";

export default function WorkCard({ work, priority = false }) {
  const isLinked = Boolean(work.href);
  const isExternal = /^https?:\/\//.test(work.href ?? "");
  const isQueue = work.status === "queue";
  const Tag = isExternal ? "a" : isLinked ? Link : "article";
  const extra = isLinked
    ? {
        href: work.href,
        ...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {}),
      }
    : {};

  return (
    <Tag
      className="work-card"
      data-status={work.status}
      data-poster={work.poster ? "" : undefined}
      data-reveal
      {...extra}
    >
      {isQueue ? (
        <FenixMark className="work-card__mark" />
      ) : (
        <Image
          src={work.image.src}
          alt={work.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 50vw, 360px"
          className="work-card__image"
        />
      )}
      {isQueue ? null : <span className="work-card__veil" aria-hidden="true" />}

      <div className="work-card__content">
        <div className="work-card__meta">
          <span className="work-card__type">{work.type}</span>
          {work.status === "live" ? null : (
            <span className="work-card__tag work-card__tag--queue">
              {work.tag}
            </span>
          )}
        </div>
      </div>
    </Tag>
  );
}
