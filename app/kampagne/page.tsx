import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone, Shield, Clock, BadgeEuro, HandHeart, Sparkles } from "lucide-react";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";
const BG = "#E8F1F2";

export const metadata = {
  title: "Messie-Hilfe Böblingen & Stuttgart – Bis zu 100% Pflegekasse | Katharis",
  description:
    "Diskrete Messie-Hilfe in Böblingen & Stuttgart. Kostenlos anfragen – in vielen Fällen übernimmt die Pflegekasse bis zu 100 % der Kosten. Jetzt anrufen.",
  robots: "noindex, nofollow",
};

export default function KampagnePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f9fafb" }}>

      {/* ── Sticky Mini-Header ────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/katharis-logo.png" alt="Katharis" width={38} height={38} />
            <span className="text-lg font-bold" style={{ color: PRIMARY }}>Katharis</span>
          </Link>
          <a
            href="tel:07031/6953604"
            className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white text-sm shadow transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            <Phone size={16} />
            07031/6953604
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="px-4 py-16 md:py-24"
        style={{ background: `radial-gradient(ellipse at 60% 40%, #ffffff 0%, ${BG} 60%, #d6e8ea 100%)` }}
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-7">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ backgroundColor: ACCENT }} />
            Böblingen &amp; Stuttgart – schnelle Hilfe vor Ort
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.15] tracking-tight"
            style={{ color: PRIMARY }}
          >
            Messie-Hilfe:{" "}
            <span style={{ color: ACCENT }}>Bis zu 100&nbsp;%</span>{" "}
            Kostenübernahme durch Ihre Pflegekasse.
          </h1>

          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: PRIMARY, opacity: 0.75 }}>
            Diskrete, einfühlsame Hilfe – ohne Vorwürfe, ohne Aufsehen.
            Wir kommen zu Ihnen und kümmern uns um alles.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
            <a
              href="tel:07031/6953604"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-white text-base shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              <Phone size={18} />
              Jetzt anrufen
            </a>
            <Link
              href="/kontakt"
              className="flex-1 flex items-center justify-center px-6 py-4 rounded-full font-bold text-base border-2 border-[#1A3C34] text-[#1A3C34] transition-all hover:bg-[#1A3C34] hover:text-white"
            >
              Kostenlos anfragen
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-5 mt-1">
            {["Keine Vorabkosten", "100 % Diskret", "Kostenlose Erstberatung"].map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm font-medium" style={{ color: PRIMARY }}>
                <CheckCircle2 size={16} style={{ color: ACCENT }} />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────────────── */}
      <section className="py-4 px-4" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3">
          {[
            { icon: <Clock size={17} />, text: "Schnelle Hilfe" },
            { icon: <Shield size={17} />, text: "Absolute Diskretion" },
            { icon: <BadgeEuro size={17} />, text: "Transparenter Kostenvoranschlag" },
            { icon: <Sparkles size={17} />, text: "Kostenlose Vor-Ort-Besichtigung" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white text-sm font-medium">
              <span style={{ color: ACCENT }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── Pflegekasse Block ──────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
            style={{ backgroundColor: `${ACCENT}15`, border: `2px solid ${ACCENT}40` }}
          >
            <div className="text-6xl font-black" style={{ color: ACCENT }}>100%</div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: PRIMARY }}>
                Ihre Pflegekasse übernimmt die Kosten
              </h2>
              <p className="leading-relaxed" style={{ color: PRIMARY, opacity: 0.75 }}>
                In vielen Fällen trägt Ihre Pflegekasse bis zu 100 % der Kosten für die Messie-Hilfe.
                Wir kennen den Antragsprozess genau und helfen Ihnen Schritt für Schritt dabei –
                ohne bürokratischen Stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vorteile ──────────────────────────────────────────── */}
      <section className="py-4 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: PRIMARY }}>
            Warum Katharis?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <HandHeart size={32} />,
                title: "Empathie & Respekt",
                text: "Kein Urteil, kein Druck. Wir hören zuerst zu und handeln in Ihrem Tempo.",
              },
              {
                icon: <BadgeEuro size={32} />,
                title: "Pflegekassen-Abrechnung",
                text: "Wir übernehmen den gesamten Antrag – Sie müssen sich um nichts kümmern.",
              },
              {
                icon: <Sparkles size={32} />,
                title: "Alles aus einer Hand",
                text: "Entrümpelung, Reinigung und Übergabe – besenrein bis zur letzten Ecke.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-sm"
                style={{ border: `1px solid ${PRIMARY}15` }}
              >
                <span style={{ color: ACCENT }}>{card.icon}</span>
                <h3 className="text-lg font-bold" style={{ color: PRIMARY }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: PRIMARY, opacity: 0.72 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-16 px-4 mt-auto">
        <div
          className="max-w-2xl mx-auto rounded-3xl p-10 text-center"
          style={{ backgroundColor: PRIMARY }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Lassen Sie uns gemeinsam den ersten Schritt gehen.
          </h2>
          <p className="text-white/70 mb-8">
            Kostenlos, unverbindlich und in Ihrem eigenen Tempo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07031/6953604"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              <Phone size={18} />
              07031/6953604
            </a>
            <Link
              href="/kontakt"
              className="px-7 py-4 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white hover:text-[#1A3C34]"
            >
              Jetzt diskret anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sticky Mobile CTA ─────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 flex gap-3" style={{ backgroundColor: "white", boxShadow: "0 -2px 12px rgba(0,0,0,0.12)" }}>
        <a
          href="tel:07031/6953604"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-white text-sm"
          style={{ backgroundColor: ACCENT }}
        >
          <Phone size={16} />
          Jetzt anrufen
        </a>
        <Link
          href="/kontakt"
          className="flex-1 flex items-center justify-center py-3 rounded-full font-bold text-sm border-2"
          style={{ color: PRIMARY, borderColor: PRIMARY }}
        >
          Anfrage senden
        </Link>
      </div>

      {/* Spacer damit Inhalt nicht hinter dem Sticky-Bar verschwindet */}
      <div className="md:hidden h-20" />

      <AnnouncementBanner />

      {/* ── Minimal Footer ────────────────────────────────────── */}
      <footer className="py-5 px-4 text-center text-xs" style={{ color: PRIMARY, opacity: 0.5 }}>
        <div className="flex justify-center gap-4">
          <Link href="/impressum" className="hover:opacity-100">Impressum</Link>
          <span>|</span>
          <Link href="/datenschutz" className="hover:opacity-100">Datenschutz</Link>
        </div>
        <p className="mt-2">© 2026 Katharis – Olgastraße 8, 71032 Böblingen</p>
      </footer>

    </div>
  );
}
