'use client';

import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "@/components/TechPattern";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function KSOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="KSO (Kerjasama Operasional)"
        subtitle="Solusi komprehensif untuk kebutuhan alat kesehatan rumah sakit dan klinik Anda dengan sistem kerjasama yang fleksibel dan menguntungkan"
        badge="KERJASAMA OPERASIONAL"
        backgroundImage="/patient monitor.avif"
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
                  src="/patient monitor.avif"
                  alt="KSO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Apa itu KSO?</h2>
                <div className="w-20 h-1 bg-[#2563eb]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Program <strong>Kerjasama Operasional (KSO)</strong> kami dirancang khusus untuk memenuhi kebutuhan alat kesehatan rumah sakit dan klinik secara komprehensif. Kami menyediakan solusi end-to-end mulai dari perencanaan, pengadaan, instalasi, hingga pemeliharaan peralatan medis.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dengan model KSO, fasilitas kesehatan Anda dapat mengakses peralatan medis terkini tanpa harus mengeluarkan investasi besar di awal. Kami menangani semua aspek teknis, sehingga Anda dapat fokus pada pelayanan pasien.
                </p>
              </div>
            </div>
            </AnimatedSection>

            {/* Benefits Section */}
            <AnimatedSection delay={0.2}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Keuntungan Program KSO</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "💰",
                    title: "Investasi Awal Minimal",
                    desc: "Tidak memerlukan investasi besar di awal, pembayaran fleksibel sesuai penggunaan"
                  },
                  {
                    icon: "🔧",
                    title: "Pemeliharaan Gratis",
                    desc: "Semua pemeliharaan, kalibrasi, dan perbaikan ditanggung oleh kami"
                  },
                  {
                    icon: "⚡",
                    title: "Penggantian Cepat",
                    desc: "Peralatan rusak diganti dengan cepat untuk menjaga kontinuitas layanan"
                  },
                  {
                    icon: "📞",
                    title: "Support 24/7",
                    desc: "Tim teknis kami siap membantu kapan saja melalui hotline khusus"
                  },
                  {
                    icon: "🎓",
                    title: "Pelatihan Berkelanjutan",
                    desc: "Pelatihan rutin untuk staff medis tentang penggunaan peralatan terbaru"
                  },
                  {
                    icon: "📊",
                    title: "Pelaporan Transparan",
                    desc: "Laporan penggunaan dan kondisi peralatan secara berkala"
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2563eb]/30">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-[#2563eb]/5 to-blue-50 p-12 rounded-3xl mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Proses Kerjasama</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  { step: 1, title: "Analisis Kebutuhan & Site Survey", desc: "Tim kami akan mengunjungi fasilitas Anda untuk memahami kebutuhan spesifik" },
                  { step: 2, title: "Penyusunan Proposal", desc: "Kami menyusun proposal detail dengan perhitungan biaya dan timeline yang jelas" },
                  { step: 3, title: "Kontrak Kerjasama", desc: "Penandatanganan kontrak dengan terms yang menguntungkan kedua belah pihak" },
                  { step: 4, title: "Pengadaan & Instalasi", desc: "Pengadaan peralatan berkualitas dan instalasi oleh teknisi bersertifikat" },
                  { step: 5, title: "Pelatihan Staff", desc: "Pelatihan komprehensif untuk memastikan staff Anda mahir menggunakan peralatan" },
                  { step: 6, title: "Pemeliharaan Rutin", desc: "Program pemeliharaan terjadwal untuk menjaga performa optimal peralatan" }
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

            {/* Equipment Coverage */}
            <AnimatedSection delay={0.4}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Peralatan yang Tersedia</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Patient Monitor",
                  "Infusion Pump",
                  "Syringe Pump",
                  "Ventilator",
                  "Defibrillator",
                  "EKG Machine",
                  "Ultrasound",
                  "X-Ray Machine",
                  "CT Scan",
                  "MRI",
                  "Dialysis Machine",
                  "Laboratory Equipment"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-[#2563eb]">
                    <p className="font-semibold text-gray-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection delay={0.5}>
            <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-12 rounded-3xl text-center overflow-hidden">
              <TechPattern variant="white" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tertarik dengan Program KSO?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Hubungi kami untuk konsultasi gratis dan dapatkan proposal yang disesuaikan dengan kebutuhan fasilitas Anda
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-[#2563eb] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    Hubungi Kami
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
