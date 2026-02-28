import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import Link from "next/link";

type ParamsType = {
  area: string;
};

export async function generateMetadata(
  { params }: { params: Promise<ParamsType> }
): Promise<Metadata> {

  const { area } = await params;

  const formattedArea =
    area === "bandung"
      ? "Bandung"
      : area.charAt(0).toUpperCase() + area.slice(1) + ", Bandung";

  return {
    title: `Jasa Saluran Mampet di ${formattedArea}`,
    description: `Layanan jasa saluran mampet di ${formattedArea}. Perbaikan WC mampet dan pipa tersumbat tanpa bongkar.`,
  };
}

export default async function AreaPage(
  { params }: { params: Promise<ParamsType> }
) {

  const { area } = await params;

  const formattedArea =
    area === "bandung"
      ? "Bandung"
      : area.charAt(0).toUpperCase() + area.slice(1) + ", Bandung";

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Jasa Saluran Mampet di {formattedArea}
          </h1>
          <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">
            Layanan profesional perbaikan WC mampet dan pipa tersumbat
            di wilayah {formattedArea} dan sekitarnya.
          </p>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

          {/* INTRO DETAIL */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">
              Jasa Saluran Mampet Area {formattedArea}
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Apakah Anda mengalami WC mampet, wastafel tersumbat,
              atau saluran air tidak lancar di wilayah {formattedArea}?
              Masalah saluran mampet dapat menyebabkan bau tidak sedap,
              genangan air, hingga kerusakan struktur bangunan jika dibiarkan.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Kami melayani perbaikan saluran mampet di {formattedArea}
              dengan respon cepat dan teknisi berpengalaman.
              Baik untuk rumah tinggal, ruko, kos-kosan, kantor,
              maupun restoran.
            </p>
          </section>

          {/* LAYANAN DETAIL */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">
              Layanan yang Tersedia di {formattedArea}
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <li>✔ Perbaikan WC mampet tanpa bongkar jika memungkinkan</li>
              <li>✔ Pembersihan pipa dapur dan kamar mandi tersumbat</li>
              <li>✔ Sedot dan pembersihan grease trap restoran</li>
              <li>✔ Pemeriksaan CCTV pipa untuk diagnosa akurat</li>
              <li>✔ Layanan darurat 24 jam area {formattedArea}</li>
            </ul>
          </section>

          {/* AREA SPESIFIK */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">
              Melayani Seluruh Wilayah {formattedArea}
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Kami siap datang ke berbagai titik di {formattedArea},
              termasuk area pemukiman padat, perumahan, hingga pusat usaha.
              Tim kami familiar dengan kondisi saluran air di wilayah ini
              sehingga penanganan bisa lebih cepat dan tepat.
            </p>
          </section>

          {/* KEUNGGULAN */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">
              Mengapa Memilih Jasa Kami di {formattedArea}?
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6 text-gray-700">
              <div>✔ Teknisi profesional & berpengalaman</div>
              <div>✔ Peralatan modern tanpa merusak lantai</div>
              <div>✔ Harga transparan tanpa biaya tersembunyi</div>
              <div>✔ Bergaransi sesuai jenis pekerjaan</div>
            </div>
          </section>

          {/* INTERNAL LINK */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              Untuk informasi lengkap mengenai layanan utama kami,
              kunjungi halaman
              <Link href="/kota/bandung" className="text-purple-700 font-semibold">
                {" "}jasa saluran mampet di Bandung{" "}
              </Link>
              atau lihat detail di halaman
              <Link href="/layanan" className="text-purple-700 font-semibold">
                {" "}layanan kami{" "}.
              </Link>
            </p>
          </section>

          {/* CTA */}
          <section className="text-center bg-gray-50 p-12 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Butuh Bantuan Cepat di {formattedArea}?
            </h2>

            <p className="mt-4 text-gray-700">
              Hubungi kami sekarang untuk penanganan cepat dan profesional.
            </p>

            <a
              href="https://wa.me/6285119500054"
              className="inline-block mt-6 bg-purple-700 text-white px-12 py-4 rounded-2xl font-bold shadow-lg hover:bg-purple-800 transition"
            >
              Hubungi Sekarang
            </a>
          </section>

        </div>
      </main>

      <Footer />

      <Script
        id="area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [

              /* 1️⃣ LOCAL BUSINESS */
              {
                "@type": "LocalBusiness",
                "@id": `https://perbaikansaluranmampet.com/#business`,
                name: "Perbaikan Saluran Mampet Bandung",
                image: "https://perbaikansaluranmampet.com/logo.png",
                url: "https://perbaikansaluranmampet.com",
                telephone: "085119500054",
                priceRange: "Rp150.000 - Rp500.000",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Jl. Baladewa No.114",
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
                  "@type": "AdministrativeArea",
                  name: formattedArea,
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "127"
                }
              },

              /* 2️⃣ SERVICE ENTITY KHUSUS AREA */
              {
                "@type": "Service",
                "@id": `https://perbaikansaluranmampet.com/kota/${area}#service`,
                name: `Jasa Saluran Mampet di ${formattedArea}`,
                provider: {
                  "@id": "https://perbaikansaluranmampet.com/#business"
                },
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: formattedArea
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Layanan Saluran Mampet",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Perbaikan WC Mampet"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Pipa Tersumbat"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Grease Trap Restoran"
                      }
                    }
                  ]
                }
              },

              /* 3️⃣ FAQ SCHEMA */
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": `Berapa biaya jasa saluran mampet di ${formattedArea}?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Biaya tergantung tingkat sumbatan dan kondisi pipa. Hubungi kami untuk estimasi harga transparan."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Apakah bisa tanpa bongkar di ${formattedArea}?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sebagian besar kasus dapat ditangani tanpa bongkar menggunakan mesin spiral dan pompa tekanan modern."
                    }
                  }
                ]
              },

              /* 4️⃣ BREADCRUMB */
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Beranda",
                    "item": "https://perbaikansaluranmampet.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Bandung",
                    "item": "https://perbaikansaluranmampet.com/kota/bandung"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": formattedArea,
                    "item": `https://perbaikansaluranmampet.com/kota/${area}`
                  }
                ]
              }

            ]
          })
        }}
      />

    </>
  );
}