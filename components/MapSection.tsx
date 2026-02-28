export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Lokasi Jasa Saluran Mampet di Bandung
          </h2>

          <p className="mt-4 text-gray-600">
            Kami berlokasi di Jl. Baladewa No.114, Pamoyanan,
            Kec. Cicendo, Kota Bandung, Jawa Barat 40173.
            Siap melayani seluruh wilayah Bandung dan sekitarnya.
          </p>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Jl.%20Baladewa%20No.114,%20Pamoyanan,%20Kec.%20Cicendo,%20Kota%20Bandung,%20Jawa%20Barat%2040173&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}