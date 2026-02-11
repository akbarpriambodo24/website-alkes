'use client';

import { useEffect, useRef, useState } from 'react';
import { TechPattern } from './TechPattern';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <TechPattern variant="white" />
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2759cd]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2759cd]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
          <div className="w-24 h-1 bg-[#2759cd] mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
              <span className="text-[#2759cd] font-bold">PT Lapan Alpha Kirana</span> adalah distributor alat kesehatan terpercaya. Kami berkomitmen menyediakan produk berkualitas dari brand ternama dengan pengiriman cepat dan layanan terbaik untuk rumah sakit, klinik, dan apotek di seluruh Indonesia.
            </p>
          </div>

          {/* Stats Section with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className={`group bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#2759cd]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-[#2759cd]/10 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative text-5xl md:text-6xl font-bold text-[#2759cd] mb-3 group-hover:scale-110 transition-transform">
                  10+
                </div>
              </div>
              <p className="text-gray-600 font-medium text-lg">Tahun Pengalaman</p>
              <div className="mt-4 flex justify-center">
                <svg className="w-8 h-8 text-[#2759cd] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className={`group bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#2759cd]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-[#2759cd]/10 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative text-5xl md:text-6xl font-bold text-[#2759cd] mb-3 group-hover:scale-110 transition-transform">
                  500+
                </div>
              </div>
              <p className="text-gray-600 font-medium text-lg">Produk Tersedia</p>
              <div className="mt-4 flex justify-center">
                <svg className="w-8 h-8 text-[#2759cd] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>

            <div className={`group bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#2759cd]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-[#2759cd]/10 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative text-5xl md:text-6xl font-bold text-[#2759cd] mb-3 group-hover:scale-110 transition-transform">
                  100%
                </div>
              </div>
              <p className="text-gray-600 font-medium text-lg">Kepuasan Pelanggan</p>
              <div className="mt-4 flex justify-center">
                <svg className="w-8 h-8 text-[#2759cd] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}