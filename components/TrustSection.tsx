export default function TrustSection() {
  return (
    <section className="py-20 bg-gray-50" id="keunggulan">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Mengapa Memilih Jasa Saluran Mampet Kami di Bandung?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Kami memberikan solusi profesional untuk perbaikan WC mampet,
            pipa tersumbat, dan saluran air mampet di Bandung.
            Dengan pengalaman bertahun-tahun, kami memastikan
            pengerjaan cepat, bersih, dan tanpa kerusakan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-14">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-purple-700 text-3xl mb-4">🛠</div>
            <h3 className="font-bold text-xl text-gray-800">
              Tanpa Bongkar
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Sebagian besar kasus saluran mampet di Bandung dapat
              ditangani tanpa perlu membongkar lantai atau tembok,
              menggunakan peralatan modern dan teknik profesional.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-purple-700 text-3xl mb-4">⚡</div>
            <h3 className="font-bold text-xl text-gray-800">
              Respon Cepat Area Bandung
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Teknisi kami siap melayani panggilan darurat untuk
              jasa saluran mampet Bandung, termasuk WC mampet
              dan pipa air tersumbat di rumah maupun tempat usaha.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-purple-700 text-3xl mb-4">💰</div>
            <h3 className="font-bold text-xl text-gray-800">
              Harga Transparan & Bergaransi
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Estimasi biaya dijelaskan sebelum pengerjaan.
              Kami memberikan garansi sesuai jenis pekerjaan
              untuk memastikan saluran tetap lancar dan aman.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/6285119500054"
            className="inline-block bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-purple-800 transition"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>

      </div>
    </section>
  );
}