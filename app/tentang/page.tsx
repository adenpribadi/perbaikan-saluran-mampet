import { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami | Jasa Saluran Mampet Bandung",
  description:
    "Profil jasa saluran mampet di Bandung dengan teknisi berpengalaman, alat modern, dan layanan profesional tanpa bongkar.",
  alternates: {
    canonical: "/tentang",
  },
};

export default function TentangPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Tentang Jasa Saluran Mampet Bandung
          </h1>
          <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">
            Komitmen kami adalah memberikan solusi profesional,
            cepat, dan aman untuk setiap masalah saluran mampet
            di Bandung dan sekitarnya.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">

          {/* PROFIL */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">
              Siapa Kami?
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Kami adalah penyedia jasa saluran mampet di Bandung
              yang berpengalaman dalam menangani berbagai masalah
              WC mampet, pipa tersumbat, got mampet, dan saluran air
              rumah maupun tempat usaha.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Dengan tim teknisi profesional dan peralatan modern,
              kami berkomitmen memberikan layanan tanpa bongkar
              jika memungkinkan, sehingga meminimalkan kerusakan
              dan biaya tambahan.
            </p>
          </section>

          {/* VISI MISI */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">
              Visi & Komitmen Kami
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ Memberikan layanan cepat dan responsif</li>
              <li>✔ Menjaga kebersihan dan kerapian saat pengerjaan</li>
              <li>✔ Memberikan harga transparan tanpa biaya tersembunyi</li>
              <li>✔ Mengutamakan kepuasan pelanggan</li>
            </ul>
          </section>

          {/* KEUNGGULAN */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">
              Mengapa Memilih Kami?
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Kami telah melayani berbagai wilayah di Bandung,
              termasuk Cicendo, Sukajadi, Antapani, Arcamanik,
              dan sekitarnya. Kepercayaan pelanggan adalah
              prioritas utama kami.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Untuk layanan lengkap, kunjungi halaman
              <Link href="/layanan" className="text-purple-700 font-semibold">
                {" "}Layanan Kami{" "}
              </Link>
              atau hubungi
              <Link href="/kota/bandung" className="text-purple-700 font-semibold">
                {" "}jasa saluran mampet di Bandung{" "}
              </Link>
              sekarang juga.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Butuh Bantuan Profesional?
            </h2>

            <p className="mt-4 text-gray-700">
              Tim kami siap membantu Anda mengatasi saluran mampet
              dengan cepat dan aman.
            </p>

            <a
              href="https://wa.me/6285119500054"
              className="inline-block mt-6 bg-purple-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-purple-800 transition"
            >
              Hubungi Sekarang
            </a>
          </section>

        </div>
      </main>

      <Footer />

      {/* ABOUT PAGE SCHEMA */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Tentang Jasa Saluran Mampet Bandung",
            description:
              "Profil jasa saluran mampet profesional di Bandung dengan teknisi berpengalaman dan layanan tanpa bongkar.",
            url: "https://perbaikansaluranmampet.com/tentang",
          }),
        }}
      />
    </>
  );
}