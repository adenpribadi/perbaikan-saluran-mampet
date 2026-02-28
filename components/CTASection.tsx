export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-fuchsia-800 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Butuh Jasa Saluran Mampet di Bandung?
          <span className="block text-yellow-400 mt-2">
            Kami Siap Datang Sekarang Juga!
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-200 leading-relaxed">
          Jangan biarkan WC mampet, pipa tersumbat, atau saluran air
          bermasalah mengganggu aktivitas Anda.
          Tim profesional kami melayani seluruh area Bandung
          dengan pengerjaan cepat, bersih, dan tanpa bongkar.
        </p>

        {/* Trust Line */}
        <div className="mt-6 text-sm text-gray-300 flex flex-wrap justify-center gap-4">
          <span>✔ Respon Cepat</span>
          <span>✔ Harga Transparan</span>
          <span>✔ Bergaransi</span>
          <span>✔ Panggilan Darurat 24 Jam</span>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="https://wa.me/6285119500054"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition text-lg"
          >
            WhatsApp 0851-1950-0054
          </a>
        </div>

        {/* Microcopy */}
        <p className="mt-4 text-sm text-gray-300">
          Konsultasi gratis • Estimasi sebelum pengerjaan • Tanpa biaya tersembunyi
        </p>

      </div>
    </section>
  );
}