// src/components/Footer.tsx

import Link from 'next/link';
import { TechPattern } from './TechPattern';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#134e4a] text-white py-16 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <TechPattern variant="blue" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Kiri: Logo + Hubungi Kami */}
          <div className="lg:col-span-5 flex flex-col md:flex-row items-start gap-8">
            {/* Logo */}
            <div className="flex-shrink-0 rounded-lg p-3 backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo LAK transparan.png"
                alt="PT Lapan Alpha Kirana"
                className="w-32 h-auto object-contain"
              />
            </div>

            {/* Hubungi Kami */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Hubungi Kami</h2>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-emerald-300">Email</p>
                    <a href="mailto:info@alapanak.co.id" className="hover:text-emerald-400 transition-colors">info@lapanak.co.id</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-emerald-300">Telepon </p>
                    <a href="tel:+62210000000" className="hover:text-emerald-400 transition-colors">(021) </a>21689279
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-emerald-300">WhatsApp</p>
                    <a href="https://wa.me/6281200000000" className="hover:text-emerald-400 transition-colors">0821-1439-1159</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Kanan: Alamat Kami */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Alamat Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Head Office */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="font-bold text-lg text-amber-300">Head Office</p>
                </div>
                <p className="text-sm leading-relaxed mb-3 text-gray-300">
                  Menara Prima (Lantai 27 Unit D)<br />
                  Jl. Dr. Ide Anak Agung Gde Agung Blok 6.2<br />
                  Kawasan Mega Kuningan, Kuningan Timur<br />
                  Jakarta Selatan, DKI Jakarta 12950
                </p>
                <div className="text-sm space-y-1 pt-3 border-t border-white/10">
                  <p><span className="font-semibold text-emerald-300">Phone:</span> (021) 21689279</p>
                  <p><span className="font-semibold text-emerald-300">Fax:</span> (021) 21689279</p>
                </div>
              </div>

              {/* National Distribution Center */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <p className="font-bold text-lg text-amber-300">Warehouse & Showroom</p>
                </div>
                <p className="text-sm leading-relaxed mb-3 text-gray-300">
                  Rukan Sentra Bisnis, Blok RSA 1 No 26,<br />
                  Grand Galaxy, Bekasi Selatan.<br />
                  Bekasi, Jawa Barat 17147
                </p>
                <div className="text-sm pt-3 border-t border-white/10">
                  <p><span className="font-semibold text-emerald-300"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">
            © 2025 PT Lapan Alpha Kirana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
