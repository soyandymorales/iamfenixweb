import { siteMetadata } from "@/content/metadata/site";
import { getLatestYoutubeVideo } from "@/lib/youtube";

const SUBSCRIBE_HREF =
  "https://www.youtube.com/@soyandymorales?sub_confirmation=1";

function formatPublishedAt(iso) {
  if (!iso) {
    return null;
  }

  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatViews(count) {
  if (count == null) {
    return null;
  }

  const formatted = count.toLocaleString("es-CO");
  return count === 1 ? `${formatted} vista` : `${formatted} vistas`;
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

function VideoPlate({ href, thumbnail, label, video }) {
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
      <Dispatch video={video} />
    </a>
  );
}

function Dispatch({ video }) {
  if (!video) {
    return (
      <div className="biblioteca__dispatch" data-reveal>
        <span className="biblioteca__kicker">YouTube · El último plano</span>
        <p className="biblioteca__title">El último plano</p>
        <span className="biblioteca__facts">Ver en YouTube</span>
      </div>
    );
  }

  const published = formatPublishedAt(video.publishedAt);
  const views = formatViews(video.views);
  const facts = [published, video.duration, views].filter(Boolean);

  return (
    <div className="biblioteca__dispatch" data-reveal>
      <span className="biblioteca__kicker">YouTube · El último plano</span>
      <p className="biblioteca__title">{video.title}</p>
      {facts.length > 0 ? (
        <span className="biblioteca__facts">{facts.join(" · ")}</span>
      ) : null}
    </div>
  );
}

export default async function BibliotecaArquitecto() {
  const video = await getLatestYoutubeVideo();
  const watchHref = video?.url ?? siteMetadata.social.youtube;
  const plateLabel = video
    ? `Ver en YouTube: ${video.title}`
    : "Ver el último plano en YouTube";

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
              La <em>Biblioteca</em> del Arquitecto
            </h2>
            <p className="biblioteca__lead" data-reveal>
              Una librería para el arte de vivir.
            </p>
          </div>
        </header>

        <div className="biblioteca__stage">
          <VideoPlate
            href={watchHref}
            thumbnail={video?.thumbnail}
            label={plateLabel}
            video={video}
          />
        </div>

        <footer className="biblioteca__colophon">
          <a
            href={SUBSCRIBE_HREF}
            className="btn btn--solid biblioteca__subscribe"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
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
            Suscríbete
          </a>
        </footer>
      </div>
    </section>
  );
}
