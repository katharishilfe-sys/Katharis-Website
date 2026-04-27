import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <Link
      href="/kontakt"
      className="block w-full text-center py-2.5 px-4 text-sm font-semibold transition-opacity hover:opacity-90"
      style={{ backgroundColor: "#C0392B", color: "#ffffff" }}
    >
      Ihr Pflegekassen-Budget verfällt am 1.&nbsp;Juli – Jetzt nutzen&nbsp;&rarr;
    </Link>
  );
}
