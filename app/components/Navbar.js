'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [openHome, setOpenHome] = useState(false);
  const pathname = usePathname();

  // Utility function to apply active styles
  const isActive = (path) => pathname === path;

  return (
    <header className="w-full bg-[#fffdf8] py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-full flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium -mr-24 text-slate-600">
          <Link
            href="/"
            className={`pb-1 border-b-2 transition duration-200 ${
              isActive('/') ? 'text-amber-600 border-amber-600' : 'border-transparent hover:text-amber-500 hover:border-amber-500'
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`pb-1 border-b-2 transition duration-200 ${
              isActive('/about') ? 'text-amber-600 border-amber-600' : 'border-transparent hover:text-amber-500 hover:border-amber-500'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/services"
            className={`pb-1 border-b-2 transition duration-200 ${
              isActive('/services') ? 'text-amber-600 border-amber-600' : 'border-transparent hover:text-amber-500 hover:border-amber-500'
            }`}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className={`pb-1 border-b-2 transition duration-200 ${
              isActive('/contact') ? 'text-amber-600 border-amber-600' : 'border-transparent hover:text-amber-500 hover:border-amber-500'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:inline-flex text-sm items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-all shadow"
        >
          Book Appointment
          <span className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center text-white">
            <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </header>
  );
}
