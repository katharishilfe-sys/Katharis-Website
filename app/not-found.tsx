import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
        Fehler 404
      </p>
      <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: "#1A3C34" }}>
        Seite nicht gefunden.
      </h1>
      <p className="text-lg max-w-md mb-10" style={{ color: "#1A3C34", opacity: 0.7 }}>
        Die gesuchte Seite existiert nicht oder wurde verschoben.
        Kein Problem – wir helfen Ihnen weiter.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#EBA059" }}
        >
          Zur Startseite
        </Link>
        <a
          href="tel:07031/6953604"
          className="px-8 py-3 rounded-full font-bold border-2 text-[#1A3C34] transition-all hover:bg-[#1A3C34] hover:text-white"
          style={{ borderColor: "#1A3C34" }}
        >
          07031/6953604
        </a>
      </div>
    </div>
  );
}
