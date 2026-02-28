"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6285119500054"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat WhatsApp"
    >
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-xl hover:scale-110 transition duration-300">

        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        <FaWhatsapp className="text-white text-3xl relative z-10" />
      </div>
    </a>
  );
}