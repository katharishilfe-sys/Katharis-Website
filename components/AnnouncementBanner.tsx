import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90]"
      style={{ backgroundColor: "#EBA059", boxShadow: "0 -3px 16px rgba(0,0,0,0.18)" }}
    >
      <Link
        href="/kontakt"
        className="flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold transition-opacity hover:opacity-90"
        style={{ color: "#1A3C34" }}
      >
        Ihr Pflegekassen-Budget verfällt am 1.&nbsp;Juli – Jetzt nutzen&nbsp;→
      </Link>
    </div>
  );
}
