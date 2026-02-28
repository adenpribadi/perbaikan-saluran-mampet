import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Biaya Jasa Saluran Mampet di Bandung Terbaru",
  description:
    "Informasi biaya jasa saluran mampet di Bandung serta faktor yang mempengaruhi harga pengerjaan.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Biaya Jasa Saluran Mampet di Bandung
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Ketahui estimasi harga sebelum memanggil teknisi profesional.
          </p>
        </div>
      </section>

      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">

          <section>
            <p className="text-gray-700 leading-relaxed">
              Biaya jasa saluran mampet di Bandung bervariasi
              tergantung tingkat kesulitan dan jenis saluran yang bermasalah.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Estimasi Harga
            </h2>

            <ul className="mt-6 list-disc ml-6 text-gray-700 space-y-2">
              <li>WC mampet ringan: Rp150.000 – Rp300.000</li>
              <li>Pipa tersumbat sedang: Rp300.000 – Rp500.000</li>
              <li>Kasus berat atau bongkar: Menyesuaikan kondisi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Faktor yang Mempengaruhi Biaya
            </h2>

            <ul className="mt-6 list-disc ml-6 text-gray-700 space-y-2">
              <li>Lokasi dan akses saluran</li>
              <li>Jenis sumbatan</li>
              <li>Kebutuhan alat khusus</li>
              <li>Tingkat kerusakan pipa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Gunakan Jasa Profesional
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Untuk informasi lebih detail dan penanganan cepat,
              hubungi
              <Link href="/kota/bandung" className="text-purple-700 font-semibold">
                {" "}jasa saluran mampet Bandung{" "}
              </Link>
              agar mendapatkan estimasi transparan sebelum pengerjaan.
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
            headline: "Biaya Jasa Saluran Mampet di Bandung",
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