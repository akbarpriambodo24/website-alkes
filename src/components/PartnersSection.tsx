'use client';

import Image from "next/image";
import { useRef } from "react";
import { TechPattern } from "./TechPattern";

export function PartnersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Array partner dengan nama dan path logo
  const partners = [
    { name: "Hospi Niaga", logo: "/partners/logo-hospi.avif" },
    { name: "Gases Medical", logo: "/partners/Gases.webp" },
    { name: "Proline", logo: "/partners/logo proline.png" },
    { name: "NSP", logo: "/partners/logo nsp.avif" },
    { name: "Sysmex", logo: "/partners/logo symmex.avif" },
    { name: "Kusuma", logo: "/partners/logo kusuma.avif" },
    { name: "MMT", logo: "/partners/logo mmt.avif" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <TechPattern variant="white" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Kami bekerja sama dengan brand dan institusi kesehatan terkemuka untuk memberikan produk terbaik
          </p>
        </div>

        {/* Scroll Container with Navigation */}
        <div className="relative max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white transition-all duration-300 group"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center p-4 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 group relative"
                title={partner.name}
                style={{ width: '200px', minHeight: '120px' }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain w-full h-auto max-h-[80px] transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-[.error]:opacity-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#d9dffe] to-[#b5c5fa] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 font-medium text-center">{partner.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white transition-all duration-300 group"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Dan masih banyak partner lainnya yang tersebar di seluruh Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}