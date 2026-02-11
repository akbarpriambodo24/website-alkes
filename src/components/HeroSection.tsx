'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Background image yang bisa diinput
  const heroImage = "/Foto Hero.avif"; // Menggunakan gambar yang tersedia

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-[85vh] -mt-20 pt-20 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Medical Equipment Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay with richer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e3a8a]/80 to-[#134e4a]/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge - DISTRIBUTOR RESMI ALAT KESEHATAN */}
          <div className="inline-block mb-8">
            <div className="px-5 py-2 bg-emerald-400/20 backdrop-blur-sm rounded-md border border-emerald-400/30">
              <span className="text-emerald-300 text-sm font-bold tracking-widest uppercase">
                DISTRIBUTOR ALAT KESEHATAN
              </span>
            </div>
          </div>

          {/* Main Heading - Mirip MediDist */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Solusi Terdepan untuk{' '}
            <span className="text-emerald-400">Kebutuhan</span> Anda
          </h1>

          {/* Description */}
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-lg font-bold text-lg hover:bg-emerald-600 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 hover:shadow-2xl hover:scale-105"
            >
              Lihat Katalog
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-lg font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Trust Indicators - dengan bullet seperti MediDist */}
          <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm md:text-base font-medium">Trading</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm md:text-base font-medium">Distribution</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm md:text-base font-medium">KSO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}