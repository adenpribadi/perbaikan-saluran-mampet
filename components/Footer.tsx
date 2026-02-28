import Link from "next/link";
import Image from "next/image";

const areas = [
  "cicendo",
  "sukajadi",
  "antapani",
  "arcamanik",
  "buah-batu",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* COLUMN 1 - BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Jasa Saluran Mampet Bandung"
              width={40}
              height={40}
            />
            <h3 className="font-bold text-white text-lg">
              Perbaikan Saluran Mampet
            </h3>
          </div>

          <p className="mt-4 text-sm leading-relaxed">
            Jasa saluran mampet di Bandung profesional tanpa bongkar.
            Melayani WC mampet, pipa tersumbat, dan saluran air rumah
            maupun tempat usaha dengan pengerjaan cepat dan bergaransi.
          </p>
        </div>

        {/* COLUMN 2 - LAYANAN */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Layanan Kami
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/kota/bandung"
                className="hover:text-white transition"
              >
                Jasa Saluran Mampet Bandung
              </Link>
            </li>

            <li>
              <Link
                href="/layanan#wc-mampet"
                className="hover:text-white transition"
              >
                Perbaikan WC Mampet
              </Link>
            </li>

            <li>
              <Link
                href="/layanan#pipa-tersumbat"
                className="hover:text-white transition"
              >
                Pipa Tersumbat
              </Link>
            </li>

            <li>
              <Link
                href="/layanan#grease-trap"
                className="hover:text-white transition"
              >
                Grease Trap Restoran
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 - AREA */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Area Layanan Bandung
          </h4>

          <ul className="space-y-2 text-sm">
            {areas.map((area) => (
              <li key={area}>
                <Link
                  href={`/kota/${area}`}
                  className="hover:text-white transition capitalize"
                >
                  {area.replace("-", " ")}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/kota/bandung"
                className="hover:text-white transition"
              >
                Seluruh Bandung
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 - KONTAK */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Hubungi Kami
          </h4>

          <p className="text-sm leading-relaxed">
            📍 Jl. Baladewa No.114, Pamoyanan,
            Kec. Cicendo, Kota Bandung,
            Jawa Barat 40173
          </p>

          <p className="mt-3 text-sm">
            📞 0851-1950-0054
          </p>

          <a
            href="https://wa.me/6285119500054"
            className="inline-block mt-4 bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            WhatsApp Sekarang
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} perbaikansaluranmampet.com —
        Jasa Perbaikan Saluran Mampet di Bandung.
        All rights reserved.
      </div>
    </footer>
  );
}