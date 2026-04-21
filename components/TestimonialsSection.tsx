const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";

const testimonials = [
  {
    text: "Ich hatte mich jahrelang geschämt. Das Team von Katharis hat mich sofort ernst genommen – kein Kommentar, kein Urteil. Einfach geholfen. Ich bin so dankbar.",
    name: "Frau M.",
    location: "Böblingen",
  },
  {
    text: "Die Pflegekasse hat tatsächlich fast alles übernommen. Das hätte ich nie gedacht. Katharis hat den kompletten Papierkram erledigt – wir mussten uns um nichts kümmern.",
    name: "Familie K.",
    location: "Sindelfingen",
  },
  {
    text: "Professionell, diskret und schnell. Meine Mutter war dabei und hat sich von Anfang an wohlgefühlt. Die Wohnung wurde besenrein übergeben. Absolute Weiterempfehlung.",
    name: "Herr S.",
    location: "Stuttgart",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={ACCENT}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F4F9F9" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
            Das sagen unsere Kunden
          </p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ color: PRIMARY }}>
            Echte Erfahrungen. Echte Menschen.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-sm"
              style={{ border: "1px solid #1A3C3412" }}
            >
              <StarRow />
              <p className="text-base leading-relaxed italic" style={{ color: PRIMARY, opacity: 0.82 }}>
                „{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t" style={{ borderColor: "#1A3C3415" }}>
                <p className="font-bold text-sm" style={{ color: PRIMARY }}>{t.name}</p>
                <p className="text-xs" style={{ color: PRIMARY, opacity: 0.55 }}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
