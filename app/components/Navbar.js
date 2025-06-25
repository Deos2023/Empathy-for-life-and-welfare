'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="w-full bg-[#fffdf8] py-4 shadow-sm  top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium  text-slate-600">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact Us' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`pb-1 border-b-2 transition duration-200 ${
                isActive(href)
                  ? 'text-amber-600 border-amber-600'
                  : 'border-transparent hover:text-amber-500 hover:border-amber-500'
              }`}
            >
              {label}
            </Link>
          ))}
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

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-800"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fffdf8] shadow-md px-6 pt-4 pb-6 space-y-4 absolute top-full w-full z-40">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact Us' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-base font-medium ${
                isActive(href)
                  ? 'text-amber-600'
                  : 'text-slate-700 hover:text-amber-500'
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full transition-all shadow"
          >
            Book Appointment
            <span className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center text-white">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
