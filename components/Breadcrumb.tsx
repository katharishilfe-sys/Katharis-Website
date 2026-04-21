import Link from "next/link";
import Script from "next/script";

const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://katharis.de${c.href}` } : {}),
    })),
  };

  return (
    <>
      <Script
        id={`breadcrumb-${crumbs.map(c => c.label).join("-")}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 pt-6 pb-0">
        <ol className="flex items-center gap-1.5 text-xs flex-wrap" style={{ color: PRIMARY, opacity: 0.6 }}>
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span>/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:underline" style={{ color: PRIMARY }}>
                  {c.label}
                </Link>
              ) : (
                <span style={{ color: ACCENT, opacity: 1, fontWeight: 600 }}>{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
