const MARKS = {
  journal: (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="14" height="16" rx="1.5" />
      <path d="M9 4v16" />
      <path d="M12 8h4M12 11h4" />
    </g>
  ),
  path: (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20" />
    </g>
  ),
  lamp: (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 20h6M12 20v-5" />
      <path d="M7 9.5c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5c0 2.2-1.4 3.6-2.6 4.5H9.6C8.4 13.1 7 11.7 7 9.5Z" />
    </g>
  ),
  threshold: (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 20V10.5C5 7 8 4 12 4s7 3 7 6.5V20" />
      <path d="M5 20h14" />
      <path d="M12 20v-7" />
    </g>
  ),
};

export default function WorkMark({ mark, label }) {
  const graphic = MARKS[mark] ?? MARKS.journal;

  return (
    <span className="work-mark" aria-hidden={label ? undefined : true} role={label ? "img" : undefined} aria-label={label}>
      <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
        {graphic}
      </svg>
    </span>
  );
}
