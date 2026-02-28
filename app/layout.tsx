import type { Metadata } from "next";
import Script from "next/script";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://perbaikansaluranmampet.com"),
  title: {
    default: "Jasa Saluran Mampet di Bandung Tanpa Bongkar",
    template: "%s | Jasa Saluran Mampet Bandung",
  },
  description:
    "Jasa saluran mampet di Bandung profesional tanpa bongkar. Melayani WC mampet, pipa tersumbat, dan saluran air rumah dengan respon cepat dan bergaransi.",
  keywords: [
    "jasa saluran mampet bandung",
    "saluran mampet di bandung",
    "wc mampet bandung",
    "pipa tersumbat bandung",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasa Saluran Mampet di Bandung",
    description:
      "Layanan profesional WC mampet dan pipa tersumbat di Bandung tanpa bongkar.",
    url: "https://perbaikansaluranmampet.com",
    siteName: "Perbaikan Saluran Mampet Bandung",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Saluran Mampet di Bandung",
    description:
      "Layanan profesional WC mampet dan pipa tersumbat di Bandung tanpa bongkar.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://perbaikansaluranmampet.com",
              name: "Perbaikan Saluran Mampet Bandung",
              url: "https://perbaikansaluranmampet.com",
              telephone: "085119500054",
              priceRange: "Rp150.000 - Rp500.000",
              image: "https://perbaikansaluranmampet.com/logo.png",
              description:
                "Jasa saluran mampet di Bandung tanpa bongkar. Melayani WC mampet, pipa tersumbat, dan saluran air rumah atau restoran dengan respon cepat dan bergaransi.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Jl. Baladewa No.114, Pamoyanan, Kec. Cicendo",
                addressLocality: "Bandung",
                addressRegion: "Jawa Barat",
                postalCode: "40173",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.9175,
                longitude: 107.6191,
              },
              areaServed: {
                "@type": "City",
                name: "Bandung",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              sameAs: [
                "https://wa.me/6285119500054"
              ],
            }),
          }}
        />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}