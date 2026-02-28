import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cara Mengatasi WC Mampet di Bandung (Panduan Lengkap)",
  description:
    "Panduan lengkap cara mengatasi WC mampet di Bandung. Ketahui penyebab, solusi sementara, dan kapan harus memanggil jasa saluran mampet profesional.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Cara Mengatasi WC Mampet di Bandung
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Panduan lengkap mengatasi WC mampet sebelum
            memanggil teknisi profesional.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">

          <section>
            <p className="text-gray-700 leading-relaxed">
              WC mampet adalah salah satu masalah rumah tangga yang sering
              terjadi di Bandung. Penyebabnya bisa beragam, mulai dari
              pembuangan tisu berlebihan, benda asing yang masuk ke kloset,
              hingga sistem pipa yang sudah tua.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Jika tidak segera ditangani, WC mampet dapat menyebabkan
              bau tidak sedap, genangan air, bahkan kerusakan saluran pipa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Penyebab WC Mampet
            </h2>

            <ul className="mt-6 list-disc ml-6 text-gray-700 space-y-3">
              <li>Pembuangan tisu atau pembalut ke dalam kloset</li>
              <li>Masuknya benda asing seperti mainan anak</li>
              <li>Endapan kotoran yang menumpuk di pipa</li>
              <li>Sistem pipa yang sempit atau rusak</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Cara Mengatasi WC Mampet Secara Mandiri
            </h2>

            <h3 className="mt-6 font-semibold text-lg text-gray-700">
              1. Gunakan Plunger
            </h3>
            <p className="mt-2 text-gray-700">
              Tekan dan tarik plunger secara perlahan untuk menciptakan
              tekanan yang dapat mendorong sumbatan keluar.
            </p>

            <h3 className="mt-6 font-semibold text-lg text-gray-700">
              2. Gunakan Air Panas (Bukan Mendidih)
            </h3>
            <p className="mt-2 text-gray-700">
              Air panas dapat membantu melarutkan lemak atau endapan ringan
              di dalam saluran.
            </p>

            <h3 className="mt-6 font-semibold text-lg text-gray-700">
              3. Gunakan Cairan Pembersih Saluran
            </h3>
            <p className="mt-2 text-gray-700">
              Gunakan sesuai petunjuk agar tidak merusak pipa PVC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Kapan Harus Menggunakan Jasa Profesional?
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Jika WC tetap mampet setelah beberapa percobaan,
              sebaiknya gunakan
              <Link
                href="/kota/bandung"
                className="text-purple-700 font-semibold"
              >
                {" "}jasa saluran mampet di Bandung{" "}
              </Link>
              agar penanganan dilakukan dengan alat profesional
              seperti mesin spiral atau pompa tekanan tinggi.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Butuh Bantuan Cepat?
            </h2>

            <p className="mt-4 text-gray-700">
              Tim teknisi kami siap membantu mengatasi WC mampet
              dan pipa tersumbat di seluruh Bandung.
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

      {/* ARTICLE SCHEMA */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cara Mengatasi WC Mampet di Bandung",
            description:
              "Panduan lengkap mengatasi WC mampet di Bandung dan kapan harus memanggil jasa profesional.",
            author: {
              "@type": "Organization",
              name: "Perbaikan Saluran Mampet Bandung",
            },
            publisher: {
              "@type": "Organization",
              name: "Perbaikan Saluran Mampet Bandung",
              logo: {
                "@type": "ImageObject",
                url: "https://perbaikansaluranmampet.com/logo.png",
              },
            },
          }),
        }}
      />
    </>
  );
}