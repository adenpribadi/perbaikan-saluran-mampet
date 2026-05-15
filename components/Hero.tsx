"use client";

import { FaWhatsapp, FaCheckCircle, FaClock, FaMapMarkerAlt, FaShieldAlt, FaTools } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0b0816] text-white py-16 lg:py-24 overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: PROPORTIONAL CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400"></span>
              <p className="text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]">Layanan 24 Jam Bandung</p>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter">
                Saluran Mampet? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Tuntas Sekarang!</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-400 max-w-lg leading-relaxed font-medium">
                Solusi profesional mengatasi WC mampet, wastafel tersumbat, dan saluran pipa lainnya. Pengerjaan cepat, tanpa bongkar, dan bergaransi resmi.
              </p>
            </div>

            {/* TRUST INDICATORS GRID */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-2">
              {[
                { icon: <FaClock className="text-yellow-400" />, text: "Respon Cepat" },
                { icon: <FaShieldAlt className="text-yellow-400" />, text: "Bergaransi" },
                { icon: <FaTools className="text-yellow-400" />, text: "Alat Modern" },
                { icon: <FaCheckCircle className="text-yellow-400" />, text: "Tanpa Bongkar" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="text-lg">{item.icon}</div>
                  <span className="font-bold text-gray-200 text-sm lg:text-base tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/6285119500054"
                className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-black text-lg shadow-lg hover:bg-yellow-500 transition-all hover:-translate-y-1 active:scale-95"
              >
                <FaWhatsapp className="text-2xl" />
                <span>WHATSAPP</span>
              </a>
              <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="font-bold text-sm lg:text-base">Area Bandung</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FLYER IMAGE */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
              <Image
                src="/hero.png"
                alt="Jasa Saluran Mampet Bandung"
                width={850}
                height={850}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}