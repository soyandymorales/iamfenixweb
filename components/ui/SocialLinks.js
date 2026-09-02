const ICONS = {
  youtube: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M8 10.5V16M8 8.2v.02M12 16v-3.2c0-.9.7-1.6 1.6-1.6s1.4.5 1.4 1.6V16"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  ),
  strava: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d="M9 19l3.2-7.2L15.4 19M12.2 11.8L15 6l4 11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const LABELS = {
  youtube: "YouTube",
  linkedin: "LinkedIn",
  strava: "Strava",
};

export function SocialIcon({ id }) {
  return ICONS[id] ?? null;
}

export default function SocialLinks({ links }) {
  const items = Object.entries(links).filter(([id, href]) => ICONS[id] && href);

  if (items.length === 0) return null;

  return (
    <ul className="social-links">
      {items.map(([id, href]) => (
        <li key={id}>
          <a
            href={href}
            className="social-links__item"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={LABELS[id]}
          >
            {ICONS[id]}
          </a>
        </li>
      ))}
    </ul>
  );
}
