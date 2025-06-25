'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ScrollActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Call Button */}
      <a
        href="tel:8910806466"
        className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition"
        title="Call Us"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918910806466"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        title="WhatsApp Us"
      >
        <MessageSquare size={20} />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-slate-800 hover:bg-slate-900 text-white p-4 rounded-full shadow-lg transition"
          title="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
