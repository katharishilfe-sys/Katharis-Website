import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grundreinigung in Böblingen & Stuttgart – Katharis",
  description:
    "Tiefenreinigung und Grundreinigung für Wohnungen und Häuser in Böblingen & Stuttgart. Katharis sorgt für einen hygienischen Neuanfang.",
};

export default function GrundreinigungPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
        Unsere Leistungen
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
        Grundreinigung – für einen hygienischen Neuanfang.
      </h1>

      <p className="text-lg leading-relaxed mb-6" style={{ color: "#1A3C34", opacity: 0.8 }}>
        Nach einer Entrümpelung oder Messie-Sanierung ist eine professionelle Grundreinigung der
        entscheidende nächste Schritt. Katharis übernimmt die vollständige Tiefenreinigung Ihrer
        Räume – von Boden bis Decke, von Schränken bis Heizkörpern.
      </p>
      <p className="text-lg leading-relaxed mb-6" style={{ color: "#1A3C34", opacity: 0.8 }}>
        Wir arbeiten mit professionellen Reinigungsmitteln und modernen Geräten, die auch
        hartnäckige Verschmutzungen, Gerüche und hygienische Belastungen zuverlässig beseitigen.
        Das Ergebnis: Räume, in denen man wieder durchatmen kann – im wahrsten Sinne des Wortes.
      </p>
      <p className="text-lg leading-relaxed mb-10" style={{ color: "#1A3C34", opacity: 0.8 }}>
        Ob Einzel- oder Komplettreinigung, ob nach einem Umzug oder einer langen Vernachlässigung –
        wir erstellen Ihnen ein individuelles Angebot ohne Versteckte Kosten. Transparent, fair
        und mit dem Qualitätsanspruch, den Sie verdienen.
      </p>

      {/* CTA */}
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#1A3C34" }}>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Angebot für Ihre Grundreinigung anfordern
        </h2>
        <p className="text-white/70 mb-6">
          Kostenlos, unverbindlich und diskret. Wir freuen uns auf Ihre Nachricht.
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
