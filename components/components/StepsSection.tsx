const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";

const steps = [
  {
    nr: "1",
    titel: "Kostenlose & diskrete Erstberatung",
    text: "Sie rufen uns unverbindlich an. Wir besprechen Ihre Situation völlig ohne Vorwürfe und klären direkt, ob Ihre Pflegekasse bis zu 100 % der Kosten übernimmt.",
  },
  {
    nr: "2",
    titel: "Entrümpelung & (optionale) Grundreinigung",
    text: "Wir kommen diskret zu Ihnen, räumen systematisch aus und entsorgen fachgerecht. Auf Wunsch führen wir direkt im Anschluss eine professionelle und hygienische Grundreinigung durch – so haben Sie für alles nur einen Ansprechpartner.",
  },
  {
    nr: "3",
    titel: "Besenreine Übergabe & Aufatmen",
    text: "Sie erhalten die Räumlichkeiten besenrein und bezugsfertig zurück. Wir unterstützen Sie bei den Formularen für die Pflegekasse, sodass Sie ein komplett befreites Gefühl und einen echten Neuanfang haben.",
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#E8F1F2" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
          So einfach geht es
        </p>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-12 max-w-2xl" style={{ color: PRIMARY }}>
          In 3 diskreten Schritten zum sauberen Zuhause.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.nr}
              className="relative bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm"
              style={{ border: "1px solid #1A3C3410" }}
            >
              {/* Connector line between boxes (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 z-10"
                  style={{ backgroundColor: ACCENT }}
                />
              )}

              {/* Number badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-black shrink-0"
                style={{ backgroundColor: ACCENT + "20", color: ACCENT }}
              >
                {s.nr}
              </div>

              <h3 className="text-lg font-bold leading-snug" style={{ color: PRIMARY }}>
                {s.titel}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: PRIMARY, opacity: 0.75 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="tel:07031/6953604"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Jetzt Schritt 1 starten: 07031/6953604
          </a>
        </div>
      </div>
    </section>
  );
}
