"use client";

import { useState } from "react";

const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";

const faqs = [
  {
    frage: "Erfahren meine Nachbarn von dem Einsatz?",
    antwort:
      "Nein. Absolute Diskretion ist unser oberstes Gebot. Wir rücken nicht mit auffällig beschrifteten Fahrzeugen an und verhalten uns im Treppenhaus und vor dem Gebäude unauffällig. Niemand erfährt, warum wir bei Ihnen sind.",
  },
  {
    frage: "Muss ich mich für den Zustand meiner Wohnung schämen?",
    antwort:
      "Auf gar keinen Fall. Wir haben in unserer Laufbahn schon alles gesehen und wissen, dass solche Situationen oft durch Krankheit, Schicksalsschläge oder Überforderung entstehen. Unser Team arbeitet zu 100 % ohne Vorwürfe und begegnet Ihnen mit größtem Respekt.",
  },
  {
    frage: "Wie genau funktioniert das mit der Pflegekasse?",
    antwort:
      "Wenn bei Ihnen oder einem Angehörigen ein anerkannter Pflegegrad vorliegt, können Entrümpelungs- und Reinigungsarbeiten oft als wohnumfeldverbessernde Maßnahmen bezuschusst werden – bis zu einer Höhe von 4.000 € (was oft 100 % unserer Kosten deckt). Wir beraten Sie dazu gerne in unserem kostenlosen Erstgespräch.",
  },
  {
    frage: "Werden wichtige Dokumente oder Wertsachen einfach weggeworfen?",
    antwort:
      "Nein, niemals. Wir arbeiten extrem sorgfältig. Sollten wir bei der Räumung auf persönliche Dokumente, Fotos, Bargeld oder Wertsachen stoßen, sortieren wir diese systematisch aus und übergeben sie Ihnen sicher.",
  },
  {
    frage: "Muss ich während der Räumung vor Ort sein?",
    antwort:
      "Das bleibt ganz Ihnen überlassen. Wenn es Sie emotional zu sehr belastet, können Sie uns einfach die Schlüssel übergeben und wir kümmern uns um alles. Wir übergeben Ihnen am Ende die Wohnung besenrein. Sie können aber natürlich auch gerne dabei sein.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
          Häufige Fragen
        </p>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-12" style={{ color: PRIMARY }}>
          Was unsere Kunden uns am häufigsten fragen.
        </h2>

        <div className="flex flex-col divide-y" style={{ borderColor: "#1A3C3420" }}>
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left transition-opacity hover:opacity-80"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base font-semibold" style={{ color: PRIMARY }}>
                  {item.frage}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    backgroundColor: open === i ? PRIMARY : ACCENT + "20",
                    color: open === i ? "#fff" : ACCENT,
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.25s, background-color 0.2s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p className="pb-5 text-base leading-relaxed" style={{ color: PRIMARY, opacity: 0.78 }}>
                  {item.antwort}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
