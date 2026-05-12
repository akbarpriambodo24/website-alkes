'use client';

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export function ProductsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const productGroups = [
    {
      title: "Elektromedic Radiasi",
      description: "CT Scan, MRI, X-Ray, dan alat pemeriksaan radiologi lainnya",
      image: "/x-ray.avif",
    },
    {
      title: "Elektromedic Non Radiasi",
      description: "Monitor pasien, EKG, ultrasound, dan peralatan diagnostik elektronik",
      image: "/patient monitor.avif",
    },
    {
      title: "Non Elektromedic Steril",
      description: "Suntikan, infus set, sarung tangan medis, masker, dan peralatan steril",
      image: "/jarum.jpg",
    },
    {
      title: "Non Elektromedic Non Steril",
      description: "Tempat tidur pasien, troli medis, lampu operasi, dan furnitur medis",
      image: "/bed patient.avif",
    },
    {
      title: "Diagnostic Invitro",
      description: "Reagent, test kit, analyzer laboratorium, dan peralatan diagnostik in vitro",
      image: "/Mikroskop kompress.webp",
    },
    {
      title: "Lainnya",
      description: "Gas medis, peralatan penunjang, dan produk kesehatan lainnya",
      image: "/Produk lain lain.avif",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grup Produk Kami
          </h2>
          <div className="w-12 h-1 bg-[#1e3a8a] mx-auto mb-4 rounded-full" />
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Ini kategori alat yang kami distribusikan — dari elektromedis, diagnostik, sampai kebutuhan sekali pakai.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-slate-200 rounded-full p-3 shadow-md hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:text-white transition-all duration-300 group"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {productGroups.map((group, index) => (
              <div
                key={index}
                className="shrink-0 bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col border border-slate-100"
                style={{ width: '280px' }}
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="280px"
                  />
                </div>

                <div className="p-5 flex flex-col grow">
                  <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 min-h-12">
                    {group.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 grow line-clamp-3">
                    {group.description}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-[#1e3a8a] font-semibold text-sm hover:text-[#142d54] transition-colors mt-auto group/link"
                  >
                    Lihat Detail
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-slate-200 rounded-full p-3 shadow-md hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:text-white transition-all duration-300 group"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-block bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#142d54] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
