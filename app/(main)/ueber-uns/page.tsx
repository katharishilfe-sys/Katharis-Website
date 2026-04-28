import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Über uns – Katharis | Diskrete Messie-Hilfe in Böblingen & Stuttgart",
  description:
    "Lernen Sie Daniel Altenhof und Kemal David Gülcü kennen – die Gründer von Katharis. Wir helfen Menschen in schwierigen Wohnsituationen, diskret und ohne Vorwürfe.",
  openGraph: {
    title: "Über uns – Katharis",
    description: "Lernen Sie die Gründer von Katharis kennen. Wir helfen Menschen in schwierigen Wohnsituationen – diskret, ohne Vorwürfe, in Böblingen & Stuttgart.",
    url: "https://katharis.de/ueber-uns",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Das Team" }],
  },
};

const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";

const values = [
  { title: "Diskretion", text: "Wir kommen ohne Aufsehen. Neutrale Fahrzeuge, kein Auftritt – nur stille, professionelle Arbeit." },
  { title: "Empathie", text: "Wir hören zuerst zu. Jeder Schritt wird gemeinsam mit Ihnen abgestimmt, in Ihrem Tempo." },
  { title: "Verlässlichkeit", text: "Wir halten, was wir versprechen – bei Terminen, Preisen und Ergebnissen." },
  { title: "Erfahrung", text: "Wir kennen den Antragsprozess bei Pflegekassen und lösen auch komplexe Situationen." },
];

const stats = [
  { zahl: "100+", label: "Abgeschlossene Einsätze" },
  { zahl: "100%", label: "Diskretion garantiert" },
  { zahl: "0€", label: "Kosten bei Pflegekasse" },
  { zahl: "24h", label: "Rückmeldung nach Anfrage" },
];

const team = [
  {
    name: "Daniel Altenhof",
    rolle: "Geschäftsführer & Gründer",
    foto: "/daniel.jpg",
    text: "Daniel ist das organisatorische Herz von Katharis. Er koordiniert die Einsätze, hält den Kontakt zu den Pflegekassen und sorgt dafür, dass jeder Auftrag reibungslos läuft – vom ersten Anruf bis zur Übergabe.",
  },
  {
    name: "Kemal David Gülcü",
    rolle: "Partner & Geschäftsführer",
    foto: "/kemal.jpg",
    text: "Kemal bringt jahrelange Erfahrung in der praktischen Umsetzung von Räumungen mit. Seine ruhige, respektvolle Art schafft von Anfang an Vertrauen – besonders in sensiblen Situationen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Über uns" }]} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
          Wer wir sind
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: PRIMARY }}>
          Wir verurteilen niemanden.
        </h1>
        <p className="text-lg leading-relaxed mb-4 max-w-3xl" style={{ color: PRIMARY, opacity: 0.8 }}>
          Katharis wurde gegründet, weil wir geglaubt haben: Es braucht jemanden, der hilft –
          ohne zu richten. Wer in einer schwierigen Wohnsituation steckt, hat meistens schon
          genug Scham und Druck von außen erfahren. Was fehlt, ist ein ruhiger, verlässlicher Partner.
        </p>
        <p className="text-lg leading-relaxed mb-16 max-w-3xl" style={{ color: PRIMARY, opacity: 0.8 }}>
          Wir sind in <strong>Böblingen und Stuttgart</strong> zu Hause und kennen die Region.
          Schnelle Einsätze, kurze Wege, persönlicher Kontakt – kein anonymes Callcenter,
          sondern echte Menschen, die sich kümmern.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-6 text-center bg-white shadow-sm" style={{ border: "1px solid #1A3C3410" }}>
              <p className="text-3xl font-black mb-1" style={{ color: ACCENT }}>{s.zahl}</p>
              <p className="text-xs font-medium" style={{ color: PRIMARY, opacity: 0.65 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Das Team</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: PRIMARY }}>
            Ihre direkten Ansprechpartner.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((p) => (
              <div key={p.name} className="rounded-2xl p-7 bg-white shadow-sm flex flex-col gap-4" style={{ border: "1px solid #1A3C3410" }}>
                <div className="flex items-center gap-4">
                  <Image
                    src={p.foto}
                    alt={p.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                    style={{ objectPosition: "center top" }}
                  />
                  <div>
                    <p className="font-bold text-lg leading-tight" style={{ color: PRIMARY }}>{p.name}</p>
                    <p className="text-sm" style={{ color: ACCENT, fontWeight: 600 }}>{p.rolle}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: PRIMARY, opacity: 0.75 }}>{p.text}</p>
              </div>
            ))}
          </div>

          {/* Kontakt-Infos */}
          <div className="mt-6 rounded-2xl p-6 flex flex-col sm:flex-row gap-4" style={{ backgroundColor: ACCENT + "15", border: `1px solid ${ACCENT}40` }}>
            <a href="tel:07031/6953604" className="flex items-center gap-3 font-bold transition-opacity hover:opacity-80" style={{ color: PRIMARY }}>
              <Phone size={18} style={{ color: ACCENT }} />
              07031/6953604
            </a>
            <span className="hidden sm:block opacity-30" style={{ color: PRIMARY }}>|</span>
            <a href="mailto:info@katharis.de" className="flex items-center gap-3 font-bold transition-opacity hover:opacity-80" style={{ color: PRIMARY }}>
              <Mail size={18} style={{ color: ACCENT }} />
              info@katharis.de
            </a>
            <span className="hidden sm:block opacity-30" style={{ color: PRIMARY }}>|</span>
            <span className="text-sm flex items-center" style={{ color: PRIMARY, opacity: 0.65 }}>
              Mo.–Sa. 08:00–20:00 Uhr
            </span>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Unsere Werte</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: PRIMARY }}>Was uns antreibt.</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl p-6 bg-white shadow-sm" style={{ border: "1px solid #1A3C3420" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: PRIMARY }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: PRIMARY, opacity: 0.75 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Einsatzgebiet */}
        <div className="rounded-2xl p-8 mb-16" style={{ backgroundColor: PRIMARY }}>
          <h2 className="text-xl font-bold text-white mb-3">Unser Einsatzgebiet</h2>
          <p className="text-white/75 leading-relaxed mb-4">
            Wir sind hauptsächlich im Landkreis Böblingen sowie im Großraum Stuttgart aktiv –
            inklusive Sindelfingen, Leonberg, Herrenberg, Weil der Stadt und weiterer Orte.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Böblingen", "Stuttgart", "Sindelfingen", "Leonberg", "Herrenberg", "Weil der Stadt", "Deckenpfronn", "Schönaich", "Holzgerlingen"].map((ort) => (
              <span key={ort} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: ACCENT + "30", color: ACCENT }}>
                {ort}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: PRIMARY }}>Lernen Sie uns kennen.</h2>
          <p className="mb-6 text-lg" style={{ color: PRIMARY, opacity: 0.75 }}>
            Ein erstes Gespräch kostet nichts – außer ein paar Minuten Zeit.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>

      </div>
    </>
  );
}
