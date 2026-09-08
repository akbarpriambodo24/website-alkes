import { TechPattern } from './TechPattern';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0f172a] text-white py-16 overflow-hidden">
      <TechPattern variant="blue" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Kiri: Logo + Hubungi Kami */}
          <div className="lg:col-span-5 flex flex-col md:flex-row items-start gap-8">
            {/* Logo */}
            <div className="shrink-0 rounded-lg p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo LAK transparan.png"
                alt="PT Lapan Alpha Kirana"
                className="w-32 h-auto object-contain"
              />
            </div>

            {/* Hubungi Kami */}
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-6 text-white">Hubungi Kami</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:info@lapanak.co.id" className="text-slate-200 hover:text-white transition-colors">info@alphakirana.co.id</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Telepon</p>
                    <a href="tel:+62212689279" className="text-slate-200 hover:text-white transition-colors">(021) 21689279</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <a href="https://wa.me/628218889883" className="text-slate-200 hover:text-white transition-colors">0821 888 9883</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Kanan: Alamat */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold mb-8 text-white">Alamat Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Head Office */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/8 hover:bg-white/8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="font-semibold text-sm text-slate-200">Head Office</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">
                  Menara Prima (Lantai 27 Unit D)<br />
                  Jl. Dr. Ide Anak Agung Gde Agung Blok 6.2<br />
                  Kawasan Mega Kuningan, Kuningan Timur<br />
                  Jakarta Selatan, DKI Jakarta 12950
                </p>
                <div className="text-xs space-y-1 pt-3 mt-3 border-t border-white/8 text-slate-400">
                  <p>Phone: 0821 888 9883</p>
                </div>
              </div>

              {/* Warehouse */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/8 hover:bg-white/8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <p className="font-semibold text-sm text-slate-200">Warehouse & Showroom</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">
                  Rukan Sentra Bisnis, Blok RSA 1 No 26,<br />
                  Grand Galaxy, Bekasi Selatan.<br />
                  Bekasi, Jawa Barat 17147
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-white/8">
          <p className="text-xs text-slate-500">
            © 2025 PT Lapan Alpha Kirana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
