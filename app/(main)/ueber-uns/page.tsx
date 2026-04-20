import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns – Katharis | Diskrete Messie-Hilfe in Böblingen & Stuttgart",
  description:
    "Wer steckt hinter Katharis? Lernen Sie unser Team kennen und erfahren Sie, warum Empathie und Diskretion für uns keine Floskeln sind.",
};

export default function UeberUnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
        Wer wir sind
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8" style={{ color: "#1A3C34" }}>
        Wir verurteilen niemanden.
      </h1>

      <p className="text-lg leading-relaxed mb-6" style={{ color: "#1A3C34", opacity: 0.8 }}>
        Katharis wurde gegründet, weil wir geglaubt haben: Es braucht jemanden, der hilft –
        ohne zu richten. Wer in einer schwierigen Wohnsituation steckt, hat meistens schon
        genug Scham und Druck von außen erfahren. Was fehlt, ist ein ruhiger, verlässlicher Partner
        an der Seite.
      </p>
      <p className="text-lg leading-relaxed mb-6" style={{ color: "#1A3C34", opacity: 0.8 }}>
        Unser Team besteht aus erfahrenen Fachkräften, die nicht nur handwerklich kompetent sind,
        sondern vor allem menschlich. Jede Situation ist anders. Jeder Mensch verdient Würde –
        auch und gerade dann, wenn das eigene Zuhause aus dem Ruder geraten ist.
      </p>
      <p className="text-lg leading-relaxed mb-12" style={{ color: "#1A3C34", opacity: 0.8 }}>
        Wir sind in <strong>Böblingen und Stuttgart</strong> zu Hause und kennen die Region.
        Schnelle Einsätze, kurze Wege, persönlicher Kontakt – kein anonymes Callcenter,
        sondern echte Menschen, die sich kümmern.
      </p>

      {/* Values */}
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {[
          { title: "Diskretion", text: "Wir kommen ohne Aufsehen. Kein Auftritt, kein Urteilen – nur stille, professionelle Arbeit." },
          { title: "Empathie", text: "Wir hören zuerst zu. Jeder Schritt wird gemeinsam mit Ihnen abgestimmt." },
          { title: "Verlässlichkeit", text: "Wir halten, was wir versprechen – bei Terminen, Preisen und Ergebnissen." },
          { title: "Erfahrung", text: "Wir wissen, wie man mit Pflegekassen umgeht und komplexe Situationen löst." },
        ].map((v) => (
          <div key={v.title} className="rounded-2xl p-6" style={{ backgroundColor: "#fff", border: "1px solid #1A3C3420" }}>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>{v.title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>{v.text}</p>
          </div>
        ))}
      </div>

      {/* Region */}
      <div className="rounded-2xl p-8 mb-16" style={{ backgroundColor: "#1A3C34" }}>
        <h2 className="text-xl font-bold text-white mb-3">Unser Einsatzgebiet</h2>
        <p className="text-white/75 leading-relaxed">
          Wir sind hauptsächlich im Landkreis Böblingen sowie im Großraum Stuttgart aktiv –
          inklusive umliegender Gemeinden wie Sindelfingen, Leonberg, Herrenberg, Weil der Stadt
          und weiterer Orte. Sie sind sich nicht sicher, ob wir zu Ihnen kommen können?
          Rufen Sie uns einfach an – wir klären das schnell.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>Lernen Sie uns kennen.</h2>
        <p className="mb-6 text-lg" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Ein erstes Gespräch kostet nichts – außer ein paar Minuten Zeit.
        </p>
        <Link
          href="/kontakt"
          className="inline-block px-10 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#EBA059" }}
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </div>
    </div>
  );
}
