import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-fuchsia-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase tracking-wide text-yellow-400 font-semibold text-sm">
            Jasa Profesional Area Bandung
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Jasa Saluran Mampet di Bandung
            <span className="block text-yellow-400">
              Tanpa Bongkar & Respon Cepat
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Mengatasi WC mampet, wastafel tersumbat, pipa air kotor,
            dan saluran rumah atau restoran Anda.
            Teknisi berpengalaman dengan peralatan modern
            melayani seluruh Bandung dan sekitarnya.
          </p>

          {/* TRUST BADGES */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-300">
            <span>✔ Tanpa Bongkar</span>
            <span>✔ Harga Transparan</span>
            <span>✔ Bergaransi</span>
            <span>✔ Panggilan Darurat</span>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/6285119500054"
              className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition text-center"
            >
              WhatsApp 0851-1950-0054
            </a>

            <a
              href="#layanan"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-900 transition text-center"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/teknisi.jpg"
            alt="Teknisi jasa saluran mampet di Bandung sedang memperbaiki saluran"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl"
            priority
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
            Melayani Seluruh Bandung
          </div>
        </div>

      </div>
    </section>
  );
}