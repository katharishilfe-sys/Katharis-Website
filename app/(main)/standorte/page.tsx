import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe im Landkreis Böblingen – Katharis",
  description:
    "Katharis kommt zu Ihnen – in Böblingen, Stuttgart, Sindelfingen, Leonberg und Herrenberg. Professionelle Entrümpelung & Messie-Hilfe in der gesamten Region. Kostenlose Besichtigung.",
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe im Landkreis Böblingen – Katharis",
    description:
      "Wir kommen zu Ihnen in Böblingen, Stuttgart, Sindelfingen, Leonberg und Herrenberg. Diskret, schnell und fair.",
    url: "https://katharis.de/standorte",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Unser Einsatzgebiet" }],
  },
};

const staedte = [
  {
    href: "/standorte/boeblingen",
    name: "Böblingen",
    teaser:
      "Unser Firmensitz – kürzeste Reaktionszeiten und lokale Ortskenntnis für die gesamte Kreisstadt.",
  },
  {
    href: "/standorte/stuttgart",
    name: "Stuttgart",
    teaser:
      "Landeshauptstadt mit über 600.000 Einwohnern – wir sind in allen Stadtteilen für Sie da.",
  },
  {
    href: "/standorte/sindelfingen",
    name: "Sindelfingen",
    teaser:
      "Direkt angrenzend an Böblingen – innerhalb weniger Minuten bei Ihnen vor Ort.",
  },
  {
    href: "/standorte/leonberg",
    name: "Leonberg",
    teaser:
      "Im Landkreis Böblingen gut erreichbar – von der Altstadt bis zu den Außenbezirken.",
  },
  {
    href: "/standorte/herrenberg",
    name: "Herrenberg",
    teaser:
      "Im Süden des Landkreises – wir kennen die Stadt und kommen zuverlässig zu Ihnen.",
  },
];

export default function StandortePage() {
  return (
    <>
      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Unser Einsatzgebiet
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Wir kommen zu Ihnen – in Böblingen und der gesamten Region.
        </h1>
        <p className="text-lg leading-relaxed mb-14 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Katharis ist im Landkreis Böblingen und der Region Stuttgart zu Hause. Von unserem Firmensitz
          in der Olgastraße 8 in Böblingen aus sind wir schnell und zuverlässig bei Ihnen –
          ob in der Kreisstadt selbst, in der Landeshauptstadt Stuttgart, im benachbarten Sindelfingen
          oder in Leonberg und Herrenberg. Alle Einsätze laufen diskret, professionell und ohne
          versteckte Kosten.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {staedte.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col gap-4 bg-white rounded-2xl p-7 shadow-sm transition-shadow hover:shadow-md"
              style={{ border: "1px solid #1A3C3415" }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold" style={{ color: "#1A3C34" }}>
                  {s.name}
                </h2>
                <span
                  className="text-xl font-bold transition-transform group-hover:translate-x-1"
                  style={{ color: "#EBA059" }}
                >
                  →
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#1A3C34", opacity: 0.7 }}>
                {s.teaser}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: "#1A3C34" }}>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Nicht sicher, ob wir in Ihrer Nähe sind?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns – wir sagen Ihnen sofort, ob und wann wir zu
            Ihnen kommen können. Kostenlos, unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Jetzt anfragen
            </Link>
            <a
              href="tel:07031/6953604"
              className="px-8 py-3 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white hover:text-[#1A3C34]"
            >
              07031/6953604
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
