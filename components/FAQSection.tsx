"use client";

import Script from "next/script";

export default function FAQSection() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
          FAQ – Jasa Saluran Mampet di Bandung
        </h2>

        <div className="mt-12 space-y-8">

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Berapa biaya jasa saluran mampet di Bandung?
            </h3>
            <p className="mt-2 text-gray-600">
              Biaya mulai dari Rp150.000 – Rp500.000 tergantung tingkat
              kesulitan. Estimasi dijelaskan sebelum pengerjaan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Apakah harus bongkar lantai?
            </h3>
            <p className="mt-2 text-gray-600">
              Tidak selalu. Sebagian besar kasus WC mampet dan pipa
              tersumbat di Bandung bisa ditangani tanpa bongkar
              menggunakan alat modern.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Apakah melayani seluruh area Bandung?
            </h3>
            <p className="mt-2 text-gray-600">
              Ya, kami melayani seluruh wilayah Bandung termasuk
              Cicendo, Sukajadi, Antapani, Arcamanik, dan sekitarnya.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Apakah tersedia layanan darurat?
            </h3>
            <p className="mt-2 text-gray-600">
              Ya, kami siap melayani panggilan darurat untuk
              jasa saluran mampet Bandung 24 jam.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Berapa biaya jasa saluran mampet di Bandung?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Biaya mulai dari Rp150.000 tergantung tingkat kesulitan dan dijelaskan sebelum pengerjaan.",
                },
              },
              {
                "@type": "Question",
                name: "Apakah harus bongkar lantai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sebagian besar kasus dapat ditangani tanpa bongkar menggunakan alat modern.",
                },
              },
              {
                "@type": "Question",
                name: "Apakah melayani seluruh Bandung?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ya, melayani seluruh area Bandung dan sekitarnya.",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
}