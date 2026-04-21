import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Shield, Clock, Heart, HandHeart, BadgeEuro, Sparkles } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import StepsSection from "@/components/StepsSection";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Erfahren meine Nachbarn von dem Einsatz?",
      acceptedAnswer: { "@type": "Answer", text: "Nein. Absolute Diskretion ist unser oberstes Gebot. Wir rücken nicht mit auffällig beschrifteten Fahrzeugen an und verhalten uns im Treppenhaus und vor dem Gebäude unauffällig. Niemand erfährt, warum wir bei Ihnen sind." },
    },
    {
      "@type": "Question",
      name: "Muss ich mich für den Zustand meiner Wohnung schämen?",
      acceptedAnswer: { "@type": "Answer", text: "Auf gar keinen Fall. Wir haben in unserer Laufbahn schon alles gesehen und wissen, dass solche Situationen oft durch Krankheit, Schicksalsschläge oder Überforderung entstehen. Unser Team arbeitet zu 100 % ohne Vorwürfe und begegnet Ihnen mit größtem Respekt." },
    },
    {
      "@type": "Question",
      name: "Wie genau funktioniert das mit der Pflegekasse?",
      acceptedAnswer: { "@type": "Answer", text: "Wenn bei Ihnen oder einem Angehörigen ein anerkannter Pflegegrad vorliegt, können Entrümpelungs- und Reinigungsarbeiten oft als wohnumfeldverbessernde Maßnahmen bezuschusst werden – bis zu einer Höhe von 4.000 € (was oft 100 % unserer Kosten deckt). Wir beraten Sie dazu gerne in unserem kostenlosen Erstgespräch." },
    },
    {
      "@type": "Question",
      name: "Werden wichtige Dokumente oder Wertsachen einfach weggeworfen?",
      acceptedAnswer: { "@type": "Answer", text: "Nein, niemals. Wir arbeiten extrem sorgfältig. Sollten wir bei der Räumung auf persönliche Dokumente, Fotos, Bargeld oder Wertsachen stoßen, sortieren wir diese systematisch aus und übergeben sie Ihnen sicher." },
    },
    {
      "@type": "Question",
      name: "Muss ich während der Räumung vor Ort sein?",
      acceptedAnswer: { "@type": "Answer", text: "Das bleibt ganz Ihnen überlassen. Wenn es Sie emotional zu sehr belastet, können Sie uns einfach die Schlüssel übergeben und wir kümmern uns um alles. Wir übergeben Ihnen am Ende die Wohnung besenrein." },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center min-h-[85vh] px-4 py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #ffffff 0%, #E8F1F2 55%, #d6e8ea 100%)",
        }}
      >
        {/* subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#1A3C34 1px, transparent 1px), linear-gradient(90deg, #1A3C34 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          {/* Eyebrow */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: "#EBA05920", color: "#EBA059" }}
          >
            <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ backgroundColor: "#EBA059" }} />
            Böblingen &amp; Stuttgart
          </span>

          {/* H1 */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight"
            style={{ color: "#1A3C34" }}
          >
            Messie-Hilfe:{" "}
            <span
              className="relative inline-block"
              style={{ color: "#EBA059" }}
            >
              Bis zu 100&nbsp;%
            </span>{" "}
            Kostenübernahme durch Ihre Pflegekasse.
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>
            Katharis: Ihre diskrete Hilfe für einen sauberen Neuanfang in Böblingen &amp; Stuttgart.
            Wir kommen zu Ihnen – ohne Vorwürfe, ohne Aufsehen.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full font-bold text-white text-base shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Kostenlose Beratung
            </Link>
            <a
              href="tel:07031/6953604"
              className="px-8 py-4 rounded-full font-bold text-base border-2 transition-all hover:bg-[#1A3C34] hover:text-white"
              style={{ color: "#1A3C34", borderColor: "#1A3C34" }}
            >
              07031/6953604
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-5 mt-2">
            {["Keine Vorabkosten", "100 % Diskret", "Kostenlose Erstberatung"].map((text) => (
              <span
                key={text}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "#1A3C34" }}
              >
                <CheckCircle2 size={17} style={{ color: "#EBA059" }} />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Banner ──────────────────────────────────────── */}
      <section className="py-5 px-4" style={{ backgroundColor: "#1A3C34" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4">
          {[
            { icon: <Clock size={18} />, text: "Schnelle Hilfe" },
            { icon: <Shield size={18} />, text: "Absolute Diskretion" },
            { icon: <BadgeEuro size={18} />, text: "Transparenter Kostenvoranschlag" },
            { icon: <Sparkles size={18} />, text: "Kostenlose Vor-Ort-Besichtigung" },
            { icon: <Heart size={18} />, text: "Ohne Vorwürfe" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white text-sm font-medium">
              <span style={{ color: "#EBA059" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Interactive ──────────────────────────────── */}
      <ServicesSection />

      {/* ── Vorteile ──────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#EBA059" }}>
              Warum Katharis?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1A3C34" }}>
              Ihr diskreter Weg zu einem sauberen Zuhause.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HandHeart size={36} />,
                title: "Empathie & Respekt",
                text: "Jede Situation ist einzigartig. Unser Team begegnet Ihnen auf Augenhöhe – ohne Urteile, ohne Druck. Wir hören zuerst zu.",
              },
              {
                icon: <BadgeEuro size={36} />,
                title: "Pflegekassen-Abrechnung",
                text: "Wir kennen den Weg durch den Antragsprozess. In vielen Fällen übernimmt Ihre Pflegekasse bis zu 100 % der Kosten – wir helfen Ihnen dabei.",
              },
              {
                icon: <Sparkles size={36} />,
                title: "Besenreine Übergabe",
                text: "Wir hören nicht auf, bis das Ergebnis stimmt. Entrümpelung, Reinigung, Übergabe – alles aus einer Hand, bis zur letzten Ecke.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ border: "1px solid #1A3C3410" }}
              >
                <span style={{ color: "#EBA059" }}>{card.icon}</span>
                <h3 className="text-xl font-bold" style={{ color: "#1A3C34" }}>
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Schritte ────────────────────────────────────────── */}
      <StepsSection />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-12 text-center"
          style={{ backgroundColor: "#1A3C34" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Lassen Sie uns gemeinsam den ersten Schritt gehen.
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Kostenlos, unverbindlich und in Ihrem eigenen Tempo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Jetzt diskret anfragen
            </Link>
            <a
              href="tel:07031/6953604"
              className="px-8 py-4 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white hover:text-[#1A3C34]"
            >
              07031/6953604
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
