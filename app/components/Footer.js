'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fffdf8] text-gray-800 pt-10 border-t border-gray-200">
      {/* Map Section */}
      <div className="w-full h-[200px] md:h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.894843052906!2d88.4678897!3d22.732149599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89900373d17fb%3A0x1f1b7a25944ab231!2sEmpathy%20For%20Life%20And%20Welfare!5e0!3m2!1sen!2sin!4v1750839562474!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto py-10 px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <Image src="/logo.png" alt="Empathy Logo" width={80} height={80} />
          <h3 className="text-xl font-bold mt-2 mb-1">Empathy For Life</h3>
          <p className="text-sm text-gray-600">
            A place for healing, growth, and compassionate recovery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-amber-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-amber-500">Services</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Talikhola, Barrackpore Rd, Barasat, Kolkata - 700126</p>
          <p className="text-sm mt-2">Mobile: <a href="tel:8910806466" className="hover:text-amber-500">8910806466</a></p>
          <p className="text-sm">Landline: 033-31697903</p>
          <p className="text-sm mt-2">Email: <a href="mailto:tapandutta9088@gmail.com" className="hover:text-amber-500">tapandutta9088@gmail.com</a></p>
        </div>

        {/* Hours / Tagline */}
        <div>
          <h4 className="text-md font-semibold mb-4">Established</h4>
          <p className="text-sm">17th March 2025</p>
          <h4 className="text-md font-semibold mt-6 mb-2">Our Mission</h4>
          <p className="text-sm text-gray-600">Empathy-driven healing for substance and behavioral recovery.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-4 border-t border-gray-200 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Empathy For Life And Welfare. All rights reserved.<br />
              Website Developed & Maintained by Digital Exposure Online Services
      </div>
    </footer>
  );
}
