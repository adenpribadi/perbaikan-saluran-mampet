import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Penyebab Saluran Air Mampet di Rumah dan Cara Mengatasinya",
  description:
    "Ketahui penyebab saluran air mampet di rumah serta solusi yang tepat sebelum memanggil jasa saluran mampet profesional.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Penyebab Saluran Air Mampet di Rumah
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Kenali faktor penyebab saluran tersumbat agar bisa
            mencegah kerusakan lebih besar.
          </p>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">

          <section>
            <p className="text-gray-700 leading-relaxed">
              Saluran air mampet di rumah sering terjadi tanpa disadari.
              Masalah ini bisa muncul di dapur, kamar mandi,
              hingga saluran air hujan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              1. Penumpukan Lemak di Dapur
            </h2>
            <p className="mt-4 text-gray-700">
              Lemak dan minyak yang dibuang ke wastafel akan mengendap
              dan menempel di dinding pipa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              2. Rambut dan Sabun di Kamar Mandi
            </h2>
            <p className="mt-4 text-gray-700">
              Rambut yang bercampur dengan sabun dapat membentuk gumpalan
              dan menyumbat saluran.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              3. Pipa Rusak atau Tersumbat Benda Asing
            </h2>
            <p className="mt-4 text-gray-700">
              Pipa tua atau benda asing dapat menghambat aliran air.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Kapan Harus Menggunakan Jasa Profesional?
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Jika saluran tetap mampet setelah dibersihkan,
              gunakan
              <Link href="/kota/bandung" className="text-purple-700 font-semibold">
                {" "}jasa saluran mampet di Bandung{" "}
              </Link>
              untuk penanganan profesional dan aman.
            </p>
          </section>

        </div>
      </main>

      <Footer />

      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Penyebab Saluran Air Mampet di Rumah",
            author: {
              "@type": "Organization",
              name: "Perbaikan Saluran Mampet Bandung",
            },
          }),
        }}
      />
    </>
  );
}