'use client';

import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "@/components/TechPattern";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function AftersalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Layanan Aftersales"
        subtitle="Komitmen kami tidak berhenti setelah penjualan. Kami memastikan alat kesehatan Anda selalu dalam kondisi optimal dengan dukungan aftersales terbaik"
        badge="AFTERSALES SERVICE"
        backgroundImage="/Stetoskop kompressed.jpeg"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Overview */}
            <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Stetoskop kompressed.jpeg"
                  alt="Aftersales Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Dukungan Purna Jual Terpercaya</h2>
                <div className="w-20 h-1 bg-[#2563eb]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Layanan <strong>Aftersales</strong> kami dirancang untuk memastikan setiap alat kesehatan yang kami distribusikan tetap berfungsi optimal sepanjang masa pakainya. Mulai dari maintenance rutin, perbaikan, hingga pelatihan penggunaan.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dengan tim teknisi bersertifikat dan tersebar di berbagai wilayah Indonesia, kami siap memberikan respons cepat untuk setiap kebutuhan layanan purna jual Anda.
                </p>
              </div>
            </div>
            </AnimatedSection>

            {/* Layanan Aftersales */}
            <AnimatedSection delay={0.2}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Aftersales Kami</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Preventive Maintenance",
                    desc: "Perawatan berkala terjadwal untuk mencegah kerusakan dan memastikan alat selalu dalam kondisi prima"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    ),
                    title: "Corrective Maintenance",
                    desc: "Perbaikan dan penanganan kerusakan oleh teknisi ahli dengan suku cadang original"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: "Kalibrasi",
                    desc: "Kalibrasi alat secara berkala untuk memastikan akurasi pengukuran sesuai standar"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                    title: "Training Penggunaan",
                    desc: "Pelatihan pengoperasian alat untuk tenaga medis agar dapat menggunakan alat dengan aman dan optimal"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    ),
                    title: "Spare Part Original",
                    desc: "Penyediaan suku cadang asli dari principal untuk menjaga performa dan umur alat"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ),
                    title: "Technical Support",
                    desc: "Dukungan teknis jarak jauh dan kunjungan on-site untuk troubleshooting dan konsultasi"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2563eb]/30 group">
                    <div className="w-16 h-16 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center text-[#2563eb] mb-6 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Keunggulan Aftersales */}
            <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-[#2563eb]/5 to-blue-50 p-12 rounded-3xl mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Aftersales Kami?</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-10 h-10 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Respons Cepat",
                    desc: "Tim teknisi siap merespons dalam waktu maksimal 1x24 jam untuk area Jabodetabek"
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    title: "Teknisi Bersertifikat",
                    desc: "Seluruh teknisi kami memiliki sertifikasi dari principal dan pengalaman minimal 3 tahun"
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    ),
                    title: "Laporan Berkala",
                    desc: "Laporan lengkap setiap kunjungan maintenance beserta rekomendasi perawatan"
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Jangkauan Luas",
                    desc: "Jaringan teknisi tersebar di berbagai kota besar di Indonesia untuk layanan yang lebih dekat"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Alur Layanan */}
            <AnimatedSection delay={0.4}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Alur Layanan Aftersales</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#2563eb]/20"></div>

                  <div className="space-y-8">
                    {[
                      { step: 1, title: "Laporan & Permintaan", desc: "Pelanggan melaporkan kebutuhan layanan melalui telepon, email, atau WhatsApp" },
                      { step: 2, title: "Analisa & Koordinasi", desc: "Tim kami menganalisa masalah dan menentukan teknisi serta kebutuhan suku cadang" },
                      { step: 3, title: "Penjadwalan", desc: "Jadwal kunjungan disepakati sesuai urgensi dan ketersediaan" },
                      { step: 4, title: "Kunjungan On-Site", desc: "Teknisi melakukan pengecekan, perbaikan, atau maintenance di lokasi" },
                      { step: 5, title: "Testing & Validasi", desc: "Alat diuji ulang untuk memastikan berfungsi sesuai spesifikasi" },
                      { step: 6, title: "Laporan Servis", desc: "Laporan lengkap diserahkan termasuk rekomendasi perawatan ke depan" }
                    ].map((item, idx) => (
                      <div key={idx} className="relative flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                          {item.step}
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection delay={0.5}>
            <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-12 rounded-3xl text-center overflow-hidden">
              <TechPattern variant="white" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Butuh Layanan Aftersales?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Hubungi tim aftersales kami untuk konsultasi, penjadwalan maintenance, atau permintaan perbaikan
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-[#2563eb] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    Hubungi Aftersales
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#2563eb] transition-colors duration-300"
                  >
                    Lihat Layanan Lain
                  </Link>
                </div>
              </div>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
