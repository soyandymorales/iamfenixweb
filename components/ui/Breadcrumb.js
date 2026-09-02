import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav className="crumbs" aria-label="Ubicación">
      <ol className="crumbs__list">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="crumbs__item">
              {isCurrent || !item.href ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
