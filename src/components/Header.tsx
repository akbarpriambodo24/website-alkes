'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on homepage
  const isHomePage = pathname === '/';

  const services = [
    { name: "KSO", href: "/services/kso" },
    { name: "Pengadaan Rutin", href: "/services/pengadaan-rutin" },
    { name: "Aftersales", href: "/services/aftersales" }
  ];

  const aboutMenuItems = [
    { name: "Company Profile", href: "/company-profile" },
    { name: "Tim Kami", href: "/team" }
  ];

  // Determine header style
  const isTransparent = isHomePage && !scrolled;
  const textColor = isTransparent ? 'text-white' : 'text-gray-700';
  const bgColor = isTransparent ? 'bg-transparent' : 'bg-white shadow-md';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isTransparent ? "/Logo LAK transparan.png" : "/logo lak biru transparan.png"}
              alt="PT Lapan Alpha Kirana"
              className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${textColor} hover:text-[#2563eb] focus:outline-none transition z-50`}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            mobileMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none pt-6 md:pt-0 pb-8 md:pb-0 px-8 md:px-0 space-y-6 md:space-y-0 md:space-x-8 ${isTransparent ? 'md:text-white' : 'text-gray-700'} font-medium transition-all duration-300`}
        >
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">
            Beranda
          </Link>

          {/* About Dropdown - Desktop */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="hover:text-[#2563eb] transition-colors flex items-center gap-1">
              Tentang Kami
              <svg className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${aboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              {aboutMenuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#2563eb] hover:text-white transition-all duration-200"
                >
                  <span className="font-medium">{item.name}</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">
            Produk
          </Link>

          {/* Services Dropdown - Desktop */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="hover:text-[#2563eb] transition-colors flex items-center gap-1">
              Layanan
              <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="group flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#2563eb] hover:text-white transition-all duration-200"
                >
                  <span className="font-medium">{service.name}</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* About - Mobile (Expandable) */}
          <div className="md:hidden">
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="hover:text-[#2563eb] transition-colors flex items-center gap-1 w-full text-gray-700"
            >
              Tentang Kami
              <svg className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aboutDropdownOpen && (
              <div className="mt-4 ml-4 space-y-3 border-l-2 border-[#2563eb]/30 pl-4">
                {aboutMenuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-gray-900 text-sm hover:text-[#2563eb] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services - Mobile (Expandable) */}
          <div className="md:hidden">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="hover:text-[#2563eb] transition-colors flex items-center gap-1 w-full text-gray-700"
            >
              Layanan
              <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesDropdownOpen && (
              <div className="mt-4 ml-4 space-y-3 border-l-2 border-[#2563eb]/30 pl-4">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-gray-900 text-sm hover:text-[#2563eb] transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">
            Kontak
          </Link>
        </nav>

        {/* Tombol CTA */}
        <Link
          href="/contact"
          className={`hidden md:block px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg ${
            isTransparent
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          Hubungi Kami
        </Link>
      </div>
    </header>
  );
}