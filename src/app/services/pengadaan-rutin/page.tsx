'use client';

import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "@/components/TechPattern";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function PengadaanRutinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Pengadaan Rutin & Berkala"
        subtitle="Program pengiriman berkala untuk memastikan ketersediaan alat kesehatan optimal dengan sistem otomatis dan harga kompetitif"
        badge="PENGADAAN RUTIN"
        backgroundImage="/bed patient.avif"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Overview */}
            <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Tentang Pengadaan Rutin</h2>
                <div className="w-20 h-1 bg-[#2563eb]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Layanan <strong>Pengadaan Rutin</strong> memastikan fasilitas kesehatan Anda selalu memiliki stok alat kesehatan yang memadai. Sistem kami yang terautomasi akan mengelola inventory dan melakukan pengiriman berkala sesuai kebutuhan Anda.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dengan sistem yang terintegrasi, Anda dapat memonitor stok secara real-time, mengatur jadwal pengiriman otomatis, dan mendapatkan harga terbaik dengan komitmen pembelian berkala.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/bed patient.avif"
                  alt="Pengadaan Rutin"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </AnimatedSection>

            {/* Features Section */}
            <AnimatedSection delay={0.2}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Fitur Layanan</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "📦",
                    title: "Auto-Order System",
                    desc: "Sistem pemesanan otomatis berdasarkan threshold stok yang Anda tentukan"
                  },
                  {
                    icon: "📊",
                    title: "Inventory Management",
                    desc: "Dashboard real-time untuk monitoring stok dan konsumsi produk"
                  },
                  {
                    icon: "💎",
                    title: "Harga Kompetitif",
                    desc: "Dapatkan harga khusus dengan komitmen pembelian berkala"
                  },
                  {
                    icon: "✅",
                    title: "Produk Original",
                    desc: "Semua produk dijamin original dengan garansi resmi dari principal"
                  },
                  {
                    icon: "🚚",
                    title: "Pengiriman Tepat Waktu",
                    desc: "Jadwal pengiriman yang fleksibel dan selalu tepat waktu"
                  },
                  {
                    icon: "📱",
                    title: "Customer Portal",
                    desc: "Akses portal khusus untuk order, tracking, dan history pembelian"
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2563eb]/30">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* How It Works */}
            <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-[#2563eb]/5 to-blue-50 p-12 rounded-3xl mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  { step: 1, title: "Registrasi & Setup", desc: "Daftar dan setup akun di customer portal kami dengan mudah" },
                  { step: 2, title: "Mapping Kebutuhan", desc: "Tim kami membantu mapping produk dan jadwal pengiriman yang sesuai" },
                  { step: 3, title: "Aktivasi Auto-Order", desc: "Sistem auto-order diaktifkan sesuai dengan parameter yang Anda tentukan" },
                  { step: 4, title: "Pengiriman Rutin", desc: "Produk dikirim secara berkala sesuai jadwal tanpa perlu order manual" },
                  { step: 5, title: "Monitoring & Tracking", desc: "Monitor stok dan tracking pengiriman melalui portal secara real-time" },
                  { step: 6, title: "Review & Adjustment", desc: "Review berkala dan adjustment sesuai perubahan kebutuhan" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Product Categories */}
            <AnimatedSection delay={0.4}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    category: "Consumables",
                    items: ["Sarung tangan medis", "Masker bedah", "Kasa steril", "Jarum suntik", "Infusion set", "Catheter"]
                  },
                  {
                    category: "Reagent & Chemicals",
                    items: ["Reagent laboratorium", "Disinfektan", "Antiseptik", "Bahan kimia medis"]
                  },
                  {
                    category: "Disposable Equipment",
                    items: ["Spuit disposal", "Tube darah", "Container specimen", "Surgical drapes"]
                  },
                  {
                    category: "Maintenance Supplies",
                    items: ["Spare parts alat medis", "Bahan kalibrasi", "Cleaning supplies khusus"]
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2563eb]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{cat.category}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Benefits Table */}
            <AnimatedSection delay={0.5}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Pengadaan Rutin</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#2563eb] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Keunggulan</th>
                        <th className="px-6 py-4 text-left">Deskripsi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { benefit: "Efisiensi Waktu", desc: "Tidak perlu order manual setiap kali, sistem bekerja otomatis" },
                        { benefit: "Cost Saving", desc: "Harga lebih murah dengan komitmen pembelian berkala" },
                        { benefit: "Never Stock Out", desc: "Stok selalu tersedia dengan sistem monitoring real-time" },
                        { benefit: "Dokumentasi Lengkap", desc: "Semua transaksi tercatat dengan baik untuk keperluan audit" },
                        { benefit: "Dedicated Support", desc: "Account manager khusus untuk membantu kebutuhan Anda" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">{row.benefit}</td>
                          <td className="px-6 py-4 text-gray-700">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection delay={0.6}>
            <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-12 rounded-3xl text-center overflow-hidden">
              <TechPattern variant="white" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mulai Program Pengadaan Rutin
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Daftar sekarang dan nikmati kemudahan pengadaan alat kesehatan dengan sistem yang terotomasi
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-[#2563eb] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    Daftar Sekarang
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
