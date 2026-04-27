import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AnnouncementBanner from "@/components/AnnouncementBanner";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBanner />
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
