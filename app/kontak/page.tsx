import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontak Jasa Saluran Mampet Bandung",
  description:
    "Hubungi jasa saluran mampet di Bandung. Alamat lengkap, nomor WhatsApp, dan lokasi Google Maps tersedia di halaman ini.",
  alternates: {
    canonical: "https://perbaikansaluranmampet.com/kontak",
  },
};

export default function KontakPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontak Jasa Saluran Mampet Bandung",
    url: "https://perbaikansaluranmampet.com/kontak",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://perbaikansaluranmampet.com",
      name: "Perbaikan Saluran Mampet Bandung",
      url: "https://perbaikansaluranmampet.com",
      telephone: "+6285119500054",
      image: "https://perbaikansaluranmampet.com/logo.png",
      priceRange: "$$",
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
        latitude: "-6.914744",
        longitude: "107.609810",
      },
      areaServed: {
        "@type": "City",
        name: "Bandung",
      },
      openingHoursSpecification: {
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6285119500054",
        contactType: "customer service",
        areaServed: "Bandung",
        availableLanguage: ["Indonesian"],
      },
      sameAs: [
        "https://www.google.com/maps?q=Jl.%20Baladewa%20No.114,%20Pamoyanan,%20Kec.%20Cicendo,%20Bandung"
      ],
    },
  };

  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Kontak Jasa Saluran Mampet Bandung
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Hubungi kami untuk layanan cepat dan profesional
            di seluruh wilayah Bandung.
          </p>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

          {/* NAP SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Informasi Kontak
            </h2>

            <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Nama Usaha
                </h3>
                <p>Perbaikan Saluran Mampet Bandung</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Alamat
                </h3>
                <p>
                  Jl. Baladewa No.114, Pamoyanan,
                  Kec. Cicendo, Kota Bandung,
                  Jawa Barat 40173
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Telepon / WhatsApp
                </h3>
                <p>0851-1950-0054</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Jam Operasional
                </h3>
                <p>24 Jam – Senin s/d Minggu</p>
              </div>
            </div>

            <a
              href="https://wa.me/6285119500054"
              className="inline-block mt-10 bg-purple-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:bg-purple-800 transition"
            >
              Chat WhatsApp Sekarang
            </a>
          </div>

          {/* MAP */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Lokasi Kami
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Jl.%20Baladewa%20No.114,%20Pamoyanan,%20Kec.%20Cicendo,%20Kota%20Bandung,%20Jawa%20Barat%2040173&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}