import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Messie-Hilfe in Böblingen & Stuttgart – Katharis",
  description:
    "Einfühlsame Messie-Hilfe mit bis zu 100 % Kostenübernahme durch die Pflegekasse. Katharis hilft Ihnen in Böblingen & Stuttgart – ohne Verurteilung.",
};

export default function MessieHilfePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
        Unsere Leistungen
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-12" style={{ color: "#1A3C34" }}>
        Messie-Hilfe: Wir helfen – ohne zu urteilen.
      </h1>

      {/* Image + Text 50/50 */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center mb-16">
        <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg shrink-0">
          <Image
            src="/bild-1-messie.jpg"
            alt="Einfühlsame Messie-Hilfe durch das Katharis-Team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-2xl font-bold" style={{ color: "#1A3C34" }}>
            „Wir verurteilen niemanden."
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Messie-Syndrom ist keine Schwäche – es ist eine Herausforderung, die viele Menschen
            betrifft. Wer zu uns kommt, hat oft schon genug Scham erlebt. Deshalb beginnen wir
            immer mit Zuhören. Kein Kommentar, keine Bewertung. Nur echte, ruhige Unterstützung.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Unser Team geht einfühlsam vor und stimmt jeden Schritt gemeinsam mit Ihnen ab.
            Ihr Zuhause, Ihr Tempo – wir sind an Ihrer Seite, bis das Ergebnis stimmt.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Und das Beste: In vielen Fällen übernimmt Ihre Pflegekasse{" "}
            <strong>bis zu 100 % der Kosten</strong>. Wir erklären Ihnen kostenlos, ob das bei
            Ihnen möglich ist.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#1A3C34" }}>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Kostenlos und unverbindlich beraten lassen
        </h2>
        <p className="text-white/70 mb-6">
          Ihr erster Schritt muss kein großer sein. Rufen Sie an oder schreiben Sie uns.
        </p>
        <Link
          href="/kontakt"
          className="inline-block px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#EBA059" }}
        >
          Jetzt diskret anfragen
        </Link>
      </div>
    </div>
  );
}
