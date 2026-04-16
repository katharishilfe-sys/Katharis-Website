import Image from "next/image";

const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";
const BG = "#E8F1F2";

const story = [
  {
    heading: "Die Ausgangslage",
    text: "Herr H. liebte seine Tauben. Über viele Jahre hinweg war der Taubenschlag sein ganzer Stolz. Doch irgendwann ließen die körperlichen Kräfte nach. Was früher eine leichte Routine war, wurde zu einer unüberwindbaren körperlichen Belastung. Er konnte sich schlichtweg nicht mehr um die Tiere und die Instandhaltung der Hütte kümmern.",
  },
  {
    heading: "Die Herausforderung",
    text: "Die Tauben mussten schweren Herzens abgegeben werden, doch zurück blieb ein stark verschmutzter Raum. Für Herrn H. war der Anblick eine schmerzhafte Erinnerung an seine schwindenden Kräfte – und eine Quelle großer Scham. Er wusste nicht, wie er dieses Reinigungsprojekt alleine stemmen sollte.",
  },
  {
    heading: "Die Lösung durch Katharis",
    text: "Mit absolutem Respekt und ganz ohne Vorwürfe haben wir uns der Sache angenommen. Wir haben den kompletten Taubenschlag systematisch entrümpelt, den hartnäckigen Schmutz beseitigt und den Raum hygienisch gereinigt.",
  },
  {
    heading: "Das Ergebnis",
    text: "Als Herr H. das Ergebnis sah, fiel eine sichtbare Last von seinen Schultern. Er hat nicht nur einen sauberen Bereich zurückgewonnen, sondern auch ein großes Stück Lebensqualität.",
  },
];

function PhotoPair({ vorher, nachher, vorherAlt, nachherAlt }: {
  vorher: string; nachher: string; vorherAlt: string; nachherAlt: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
        <Image src={vorher} alt={vorherAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
        <span
          className="absolute top-3 left-3 text-xs font-black tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: ACCENT, color: "#fff" }}
        >
          VORHER
        </span>
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
        <Image src={nachher} alt={nachherAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
        <span
          className="absolute top-3 left-3 text-xs font-black tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: PRIMARY, color: "#fff" }}
        >
          NACHHER
        </span>
      </div>
    </div>
  );
}

export default function ProjektSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: BG }}>
      <div className="max-w-6xl mx-auto">

        {/* Page header */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
          Referenz-Projekt
        </p>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-12 max-w-3xl" style={{ color: PRIMARY }}>
          Projekt: Ein würdevoller Abschied von einer lebenslangen Leidenschaft
        </h1>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* Left – Story */}
          <div className="flex flex-col gap-6">
            {story.map((s) => (
              <div key={s.heading}>
                <h3 className="font-bold text-base mb-1" style={{ color: PRIMARY }}>{s.heading}</h3>
                <p className="text-base leading-relaxed" style={{ color: PRIMARY, opacity: 0.78 }}>{s.text}</p>
              </div>
            ))}
          </div>

          {/* Right – alle 4 Fotos */}
          <div className="flex flex-col gap-4">
            <PhotoPair
              vorher="/projekt-vorher.jpg"
              nachher="/projekt-nachher.jpg"
              vorherAlt="Vor der Reinigung – Taubenschlag"
              nachherAlt="Nach der Reinigung durch Katharis"
            />
            <PhotoPair
              vorher="/projekt-vorher-2.jpg"
              nachher="/projekt-nachher-2.jpg"
              vorherAlt="Vor der Reinigung – Taubenschlag (2)"
              nachherAlt="Nach der Reinigung durch Katharis (2)"
            />
          </div>
        </div>

        {/* CTA box */}
        <div className="rounded-2xl p-6 mt-20" style={{ backgroundColor: ACCENT }}>
          <p className="text-white font-semibold text-base leading-relaxed mb-4">
            Steckt Ihnen die Arbeit auch über den Kopf? Scham ist menschlich, aber unnötig.
            Messie-Hilfe: Bis zu 100&nbsp;% Kostenübernahme durch Ihre Pflegekasse.
          </p>
          <a
            href="tel:07031/6953604"
            className="inline-flex items-center gap-2 bg-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
            style={{ color: PRIMARY }}
          >
            Kostenlos beraten lassen: 07031/6953604
          </a>
        </div>

      </div>
    </section>
  );
}
