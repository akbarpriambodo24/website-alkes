'use client';

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export function ProductsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Daftar 6 grup produk dengan grup "Lainnya" yang baru
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
      image: "/mikroskop kompress.webp",
    },
    {
      title: "Lainnya",
      description: "Gas medis, peralatan penunjang, dan produk kesehatan lainnya",
      image: "/produk lain lain.avif",
    },
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
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grup Produk Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2759cd] to-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Kami menyediakan berbagai kategori produk alat kesehatan untuk memenuhi kebutuhan medis Anda
          </p>
        </div>

        {/* Scroll Container with Navigation */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:bg-[#2759cd] hover:border-[#2759cd] hover:text-white transition-all duration-300 group"
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
            {productGroups.map((group, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col border border-gray-100"
                style={{ width: '280px' }}
              >
                {/* Slot Gambar – tinggi tetap agar seragam */}
                <div className="relative h-48 bg-gradient-to-br from-[#ecf0ff] to-emerald-50 overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="280px"
                  />
                  {/* Overlay gradient untuk readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Konten – flex-grow agar tombol tetap di bawah */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-14">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 grow line-clamp-3">
                    {group.description}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-[#2759cd] font-semibold hover:text-[#163a85] transition-colors mt-auto group/link"
                  >
                    Lihat Detail
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:bg-[#2759cd] hover:border-[#2759cd] hover:text-white transition-all duration-300 group"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-block bg-gradient-to-r from-[#2759cd] to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#1e47a8] hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
}