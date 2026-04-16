import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe Böblingen | Katharis",
  description:
    "Diskrete Entrümpelung, Haushaltsauflösung & Messie-Hilfe in Böblingen und Stuttgart. Bis zu 100 % Kostenübernahme durch Ihre Pflegekasse möglich! Jetzt anrufen.",
  keywords:
    "Entrümpelung, Messie-Hilfe, Haushaltsauflösung, Böblingen, Stuttgart, Pflegekasse, Kostenübernahme, Grundreinigung",
  robots: "index, follow",
  icons: {
    icon: "/katharis-logo.png",
    apple: "/katharis-logo.png",
  },
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe Böblingen | Katharis",
    description:
      "Diskrete Entrümpelung, Haushaltsauflösung & Messie-Hilfe in Böblingen und Stuttgart. Bis zu 100 % Kostenübernahme durch Ihre Pflegekasse möglich! Jetzt anrufen.",
    type: "website",
    url: "https://www.katharis.de",
    siteName: "Katharis",
    locale: "de_DE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Katharis",
  url: "https://www.katharis.de",
  telephone: "07031/6953604",
  email: "info@katharis.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Olgastraße 8",
    addressLocality: "Böblingen",
    postalCode: "71032",
    addressCountry: "DE",
  },
  founder: [
    { "@type": "Person", name: "Daniel Altenhof" },
    { "@type": "Person", name: "Kemal David Gülcü" },
  ],
  description:
    "Diskrete Entrümpelung, Haushaltsauflösung und spezialisierte Messie-Hilfe in Böblingen und Stuttgart. Bis zu 100 % Kostenübernahme durch die Pflegekasse möglich. Optionale Grundreinigung zubuchbar.",
  areaServed: ["Böblingen", "Stuttgart"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#E8F1F2" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
