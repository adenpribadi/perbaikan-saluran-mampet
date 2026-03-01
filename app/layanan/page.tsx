import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layanan Jasa Saluran Mampet di Bandung",
  description:
    "Layanan perbaikan WC mampet, pipa tersumbat, got mampet, dan grease trap di Bandung. Profesional, cepat, tanpa bongkar, dan bergaransi.",
  alternates: {
    canonical: "https://perbaikansaluranmampet.com/layanan",
  },
};

export default function LayananPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://perbaikansaluranmampet.com/layanan",
    name: "Jasa Saluran Mampet Bandung",
    url: "https://perbaikansaluranmampet.com/layanan",
    telephone: "+6285119500054",
    image: "https://perbaikansaluranmampet.com/logo.png",
    description:
      "Layanan perbaikan WC mampet, pipa tersumbat, got mampet dan grease trap di Bandung. Profesional, cepat dan tanpa bongkar.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
    areaServed: {
      "@type": "City",
      name: "Bandung",
    },
    serviceOffered: [
      {
        "@type": "Service",
        name: "Perbaikan WC Mampet",
        areaServed: "Bandung",
      },
      {
        "@type": "Service",
        name: "Pipa Tersumbat",
        areaServed: "Bandung",
      },
      {
        "@type": "Service",
        name: "Got dan Saluran Air Hujan",
        areaServed: "Bandung",
      },
      {
        "@type": "Service",
        name: "Grease Trap Restoran",
        areaServed: "Bandung",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah bisa tanpa bongkar lantai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sebagian besar kasus saluran mampet dapat ditangani tanpa bongkar menggunakan mesin spiral profesional.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani seluruh Bandung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, layanan tersedia untuk seluruh wilayah Bandung dan sekitarnya.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah tersedia layanan darurat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tersedia layanan darurat 24 jam untuk kondisi mendesak.",
        },
      },
    ],
  };

  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Layanan Jasa Saluran Mampet di Bandung
          </h1>
          <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">
            Solusi lengkap untuk berbagai masalah saluran mampet
            di rumah, kantor, restoran, dan bangunan komersial
            di seluruh wilayah Bandung.
          </p>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

          {/* INTRO */}
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Jenis Layanan Perbaikan Saluran Mampet
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Kami menyediakan berbagai layanan profesional untuk
              mengatasi saluran mampet di Bandung dengan peralatan modern
              dan teknisi berpengalaman.
            </p>
          </section>

          {/* WC MAMPET */}
          <section id="wc-mampet" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Perbaikan WC Mampet
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Layanan perbaikan WC mampet di Bandung menggunakan
                alat profesional seperti mesin spiral dan pompa tekanan.
                Sebagian besar kasus dapat ditangani tanpa bongkar lantai.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-gray-600">
              ✔ Tanpa bongkar (jika memungkinkan) <br />
              ✔ Respon cepat seluruh Bandung <br />
              ✔ Harga transparan
            </div>
          </section>

          {/* PIPA */}
          <section id="pipa-tersumbat" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Pipa Tersumbat
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Mengatasi pipa dapur, kamar mandi, dan saluran utama
                yang tersumbat akibat lemak, rambut, atau endapan kotoran.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-gray-600">
              ✔ Aman untuk pipa PVC <br />
              ✔ Teknisi berpengalaman <br />
              ✔ Garansi sesuai pekerjaan
            </div>
          </section>

          {/* GOT */}
          <section id="got-saluran" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Got & Saluran Air Hujan
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Membersihkan got mampet dan saluran air hujan yang
                tersumbat akibat lumpur, daun, dan sampah.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-gray-600">
              ✔ Pembersihan menyeluruh <br />
              ✔ Peralatan modern <br />
              ✔ Cocok untuk rumah & gedung
            </div>
          </section>

          {/* GREASE TRAP */}
          <section id="grease-trap" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Grease Trap Restoran
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Layanan khusus restoran dan usaha kuliner
                untuk menjaga saluran tetap lancar dan higienis.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-gray-600">
              ✔ Cocok untuk usaha kuliner <br />
              ✔ Pembersihan rutin <br />
              ✔ Layanan darurat 24 jam
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gray-50 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Butuh Bantuan Sekarang?
            </h2>

            <p className="mt-4 text-gray-700">
              Hubungi
              <Link href="/kota/bandung" className="text-purple-700 font-semibold">
                {" "}jasa saluran mampet di Bandung{" "}
              </Link>
              untuk mendapatkan layanan profesional dan estimasi harga transparan.
            </p>

            <a
              href="https://wa.me/6285119500054"
              className="inline-block mt-8 bg-purple-700 text-white px-12 py-4 rounded-2xl font-bold shadow-lg hover:bg-purple-800 transition"
            >
              Hubungi Sekarang
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}