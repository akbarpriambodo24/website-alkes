'use client';

import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "@/components/TechPattern";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function PengadaanRutinPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Pengadaan Rutin & Berkala"
        subtitle="Tidak perlu repot order manual setiap saat — kami atur jadwal pengiriman rutin sesuai kebutuhan Anda."
        badge="Pengadaan Rutin"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            {/* Overview */}
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 md:order-1 space-y-5">
                  <h2 className="text-3xl font-bold text-slate-900">Tentang Pengadaan Rutin</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] rounded-full" />
                  <p className="text-base text-slate-600 leading-relaxed">
                    Kalau kebutuhan alat Anda rutin dan berulang, kami bisa atur sistem pengirimannya.
                    Tidak perlu order satu-satu setiap bulan — cukup tentukan produk dan frekuensinya,
                    sisanya kami yang kelola.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Ada dashboard untuk pantau stok dan histori pembelian. Harga juga lebih menarik
                    untuk komitmen pembelian berkala.
                  </p>
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/bed patient.avif" alt="Pengadaan Rutin" fill className="object-cover" />
                </div>
              </div>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection delay={0.2}>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Fitur Layanan</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                      title: "Auto-Order System",
                      desc: "Pemesanan otomatis berjalan saat stok mendekati batas minimum yang Anda tentukan.",
                    },
                    {
                      path: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                      title: "Inventory Management",
                      desc: "Dashboard real-time untuk pantau stok dan konsumsi — tanpa perlu hitung manual.",
                    },
                    {
                      path: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                      title: "Harga Kompetitif",
                      desc: "Harga lebih baik untuk komitmen pembelian berkala — makin sering, makin efisien.",
                    },
                    {
                      path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                      title: "Produk Original",
                      desc: "Semua produk original dengan garansi resmi dari principal — tidak ada substitusi tanpa persetujuan.",
                    },
                    {
                      path: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                      title: "Pengiriman Tepat Waktu",
                      desc: "Jadwal pengiriman yang disepakati bersama dan kami pegang komitmennya.",
                    },
                    {
                      path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2",
                      title: "Customer Portal",
                      desc: "Akses portal untuk order, tracking pengiriman, dan histori pembelian kapan saja.",
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-[#1e3a8a]/20 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-[#1e3a8a]/8 flex items-center justify-center text-[#1e3a8a] mb-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={feature.path} />
                        </svg>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* How It Works */}
            <AnimatedSection delay={0.3}>
              <div className="bg-slate-50 p-10 md:p-12 rounded-2xl mb-20 border border-slate-100">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Cara Kerja</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                  {[
                    { step: 1, title: "Registrasi & Setup", desc: "Daftar dan setup akun di portal kami — prosesnya singkat." },
                    { step: 2, title: "Mapping Kebutuhan", desc: "Tim kami bantu petakan produk dan frekuensi pengiriman yang sesuai kondisi Anda." },
                    { step: 3, title: "Aktivasi Auto-Order", desc: "Sistem diaktifkan sesuai parameter yang sudah disepakati." },
                    { step: 4, title: "Pengiriman Rutin", desc: "Produk dikirim sesuai jadwal — tidak perlu order manual lagi." },
                    { step: 5, title: "Monitoring & Tracking", desc: "Pantau stok dan status pengiriman lewat portal kapan saja." },
                    { step: 6, title: "Review & Adjustment", desc: "Ada review berkala kalau ada perubahan kebutuhan atau volume." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5 items-start bg-white p-5 rounded-xl border border-slate-100">
                      <div className="shrink-0 w-9 h-9 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Kategori Produk</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      category: "Consumables",
                      items: ["Sarung tangan medis", "Masker bedah", "Kasa steril", "Jarum suntik", "Infusion set", "Catheter"],
                    },
                    {
                      category: "Reagent & Chemicals",
                      items: ["Reagent laboratorium", "Disinfektan", "Antiseptik", "Bahan kimia medis"],
                    },
                    {
                      category: "Disposable Equipment",
                      items: ["Spuit disposal", "Tube darah", "Container specimen", "Surgical drapes"],
                    },
                    {
                      category: "Maintenance Supplies",
                      items: ["Spare parts alat medis", "Bahan kalibrasi", "Cleaning supplies khusus"],
                    },
                  ].map((cat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border-l-2 border-[#1e3a8a] border border-slate-100 shadow-sm">
                      <h3 className="font-bold text-slate-900 mb-4">{cat.category}</h3>
                      <ul className="space-y-2">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-slate-600 text-sm">
                            <svg className="w-4 h-4 text-[#1e3a8a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Kenapa Pilih Pengadaan Rutin?</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-[#1e3a8a] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Keunggulan</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Penjelasan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          { benefit: "Efisiensi Waktu", desc: "Tidak perlu order manual — sistem bekerja otomatis." },
                          { benefit: "Harga Lebih Hemat", desc: "Harga lebih baik untuk pembelian dengan komitmen berkala." },
                          { benefit: "Stok Tidak Kosong", desc: "Stok dipantau real-time dan diisi sebelum habis." },
                          { benefit: "Dokumentasi Lengkap", desc: "Semua transaksi tercatat rapi untuk keperluan audit internal." },
                          { benefit: "Dedicated Support", desc: "Ada satu titik kontak untuk semua kebutuhan pengadaan Anda." },
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-900 text-sm">{row.benefit}</td>
                            <td className="px-6 py-4 text-slate-500 text-sm">{row.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.6}>
              <div className="relative bg-[#0f172a] text-white p-10 md:p-12 rounded-2xl text-center overflow-hidden">
                <TechPattern variant="white" />
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Mulai Program Pengadaan Rutin</h2>
                  <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Daftar dan kami bantu setup sistem pengadaan yang sesuai kondisi fasilitas Anda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-7 py-3.5 bg-[#2563eb] text-white rounded-xl font-bold hover:bg-[#1d4ed8] transition-colors duration-300">
                      Daftar Sekarang
                    </Link>
                    <Link href="/services" className="px-7 py-3.5 bg-transparent border border-white/25 text-white rounded-xl font-bold hover:bg-white/8 transition-colors duration-300">
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
