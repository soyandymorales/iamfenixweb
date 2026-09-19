import { getHomeCopy } from "@/content/metadata/home";
import { siteMetadata } from "@/content/metadata/site";
import { dateLocale } from "@/libs/locale";
import { getLatestYoutubeVideo } from "@/lib/youtube";

const SUBSCRIBE_HREF =
  "https://www.youtube.com/@soyandymorales?sub_confirmation=1";

function formatPublishedAt(iso, locale) {
  if (!iso) {
    return null;
  }

  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toLocaleDateString(dateLocale(locale), {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatViews(count, locale, copy) {
  if (count == null) {
    return null;
  }

  const formatted = count.toLocaleString(dateLocale(locale));
  return count === 1
    ? `${formatted} ${copy.viewsOne}`
    : `${formatted} ${copy.viewsMany}`;
}

function PlayMark() {
  return (
    <span className="biblioteca__play" aria-hidden="true">
      <span className="biblioteca__play-mark">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="currentColor" />
        </svg>
      </span>
    </span>
  );
}

function VideoPlate({ href, thumbnail, label, video, copy, locale }) {
  return (
    <a
      href={href}
      className="biblioteca__plate"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-reveal
    >
      <span className="biblioteca__media">
        {thumbnail ? (
          // Thumbnail from YouTube CDN; next/image would require remotePatterns.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt=""
            className="biblioteca__thumb"
            width="1280"
            height="720"
          />
        ) : null}
        <PlayMark />
      </span>
      <Dispatch video={video} copy={copy} locale={locale} />
    </a>
  );
}

function Dispatch({ video, copy, locale }) {
  if (!video) {
    return (
      <div className="biblioteca__dispatch" data-reveal>
        <span className="biblioteca__kicker">{copy.kicker}</span>
        <p className="biblioteca__title">{copy.emptyTitle}</p>
        <span className="biblioteca__facts">{copy.watch}</span>
      </div>
    );
  }

  const published = formatPublishedAt(video.publishedAt, locale);
  const views = formatViews(video.views, locale, copy);
  const facts = [published, video.duration, views].filter(Boolean);

  return (
    <div className="biblioteca__dispatch" data-reveal>
      <span className="biblioteca__kicker">{copy.kicker}</span>
      <p className="biblioteca__title">{video.title}</p>
      {facts.length > 0 ? (
        <span className="biblioteca__facts">{facts.join(" · ")}</span>
      ) : null}
    </div>
  );
}

export default async function BibliotecaArquitecto({ locale }) {
  const copy = getHomeCopy(locale).biblioteca;
  const video = await getLatestYoutubeVideo();
  const watchHref = video?.url ?? siteMetadata.social.youtube;
  const plateLabel = video
    ? `${copy.watch}: ${video.title}`
    : copy.watchLatest;

  return (
    <section
      id="biblioteca"
      className="section section--viewport biblioteca"
      aria-labelledby="biblioteca-title"
    >
      <div className="biblioteca__spread">
        <header className="biblioteca__nameplate">
          <div className="biblioteca__nameplate-title">
            <h2 id="biblioteca-title" className="biblioteca__headline" data-reveal>
              {copy.titleBefore}
              <em>{copy.titleAccent}</em>
              {copy.titleAfter}
            </h2>
            <p className="biblioteca__lead" data-reveal>
              {copy.lead}
            </p>
          </div>
        </header>

        <div className="biblioteca__stage">
          <VideoPlate
            href={watchHref}
            thumbnail={video?.thumbnail}
            label={plateLabel}
            video={video}
            copy={copy}
            locale={locale}
          />
        </div>

        <footer className="biblioteca__colophon">
          <a
            href={SUBSCRIBE_HREF}
            className="btn btn--solid biblioteca__subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 1.9 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.1 12a31 31 0 0 0-.5-4.8ZM10.2 15.2V8.8L15.5 12l-5.3 3.2Z" />
            </svg>
            {copy.subscribe}
          </a>
        </footer>
      </div>
    </section>
  );
}
