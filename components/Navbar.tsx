"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Perbaikan Saluran Mampet Bandung"
            width={45}
            height={45}
            priority
          />
          <span className="font-bold text-lg text-gray-800 hidden sm:block">
            perbaikansaluranmampet.com
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-purple-700 transition">
            Beranda
          </Link>
          <Link href="/layanan" className="hover:text-purple-700 transition">
            Layanan
          </Link>
          <Link href="/tentang" className="hover:text-purple-700 transition">
            Tentang
          </Link>
          <Link href="/kontak" className="hover:text-purple-700 transition">
            Kontak
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
            <Link href="/layanan" onClick={() => setIsOpen(false)}>
              Layanan
            </Link>
            <Link href="/tentang" onClick={() => setIsOpen(false)}>
              Tentang
            </Link>
            <Link href="/kontak" onClick={() => setIsOpen(false)}>
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}