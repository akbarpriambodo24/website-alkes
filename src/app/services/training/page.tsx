'use client';

import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "@/components/TechPattern";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Training & Pelatihan"
        subtitle="Pelatihan profesional untuk memaksimalkan penggunaan alat kesehatan oleh tim ahli bersertifikat dengan pengalaman praktis di lapangan"
        badge="TRAINING PROFESIONAL"
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
                  alt="Training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Program Training Komprehensif</h2>
                <div className="w-20 h-1 bg-[#2563eb]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Program <strong>Training Penggunaan</strong> kami dirancang untuk meningkatkan kompetensi tenaga medis dalam mengoperasikan peralatan kesehatan. Dipandu oleh instruktur bersertifikat dengan pengalaman praktis di lapangan.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dengan kombinasi materi teori dan praktik langsung, peserta akan mendapatkan pemahaman mendalam tentang cara menggunakan, merawat, dan troubleshooting peralatan medis dengan aman dan efektif.
                </p>
              </div>
            </div>
            </AnimatedSection>

            {/* Training Types */}
            <AnimatedSection delay={0.2}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Jenis Training</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🎯",
                    title: "Basic Training",
                    desc: "Pengenalan dasar penggunaan alat untuk user baru",
                    duration: "1-2 hari"
                  },
                  {
                    icon: "⚡",
                    title: "Advanced Training",
                    desc: "Pelatihan lanjutan untuk fitur kompleks dan troubleshooting",
                    duration: "3-5 hari"
                  },
                  {
                    icon: "🔄",
                    title: "Refresher Training",
                    desc: "Penyegaran berkala untuk update fitur dan best practices",
                    duration: "1 hari"
                  }
                ].map((type, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2563eb]/30 text-center">
                    <div className="text-5xl mb-4">{type.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.desc}</p>
                    <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold">
                      Durasi: {type.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Training Benefits */}
            <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-[#2563eb]/5 to-blue-50 p-12 rounded-3xl mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Training Kami</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "👨‍🏫",
                    title: "Instruktur Bersertifikat",
                    desc: "Instruktur dengan sertifikasi resmi dan pengalaman praktis minimal 5 tahun"
                  },
                  {
                    icon: "📚",
                    title: "Materi Up-to-date",
                    desc: "Materi training selalu diperbarui sesuai teknologi dan guidelines terbaru"
                  },
                  {
                    icon: "🔧",
                    title: "Hands-on Practice",
                    desc: "Praktik langsung dengan peralatan sesungguhnya, bukan simulasi"
                  },
                  {
                    icon: "📜",
                    title: "Sertifikat Resmi",
                    desc: "Sertifikat training yang diakui untuk keperluan kredensial"
                  },
                  {
                    icon: "📖",
                    title: "Modul Lengkap",
                    desc: "Peserta mendapat modul training dan SOP untuk referensi"
                  },
                  {
                    icon: "💬",
                    title: "Post-Training Support",
                    desc: "Dukungan konsultasi setelah training melalui hotline khusus"
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* Training Topics */}
            <AnimatedSection delay={0.4}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Topik Training</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { category: "Operational Training", topics: ["Basic operation & controls", "Setup & konfigurasi", "Patient monitoring", "Data recording & reporting"] },
                  { category: "Maintenance Training", topics: ["Daily maintenance routine", "Cleaning & disinfection", "Kalibrasi dasar", "Parts replacement"] },
                  { category: "Safety Training", topics: ["Patient safety protocols", "Infection control", "Emergency procedures", "Risk management"] },
                  { category: "Troubleshooting Training", topics: ["Common problems identification", "Error code interpretation", "Basic repair", "When to call service"] }
                ].map((topic, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2563eb]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{topic.category}</h3>
                    <ul className="space-y-2">
                      {topic.topics.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

            {/* Training Process */}
            <AnimatedSection delay={0.5}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Proses Training</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#2563eb]/20"></div>

                  <div className="space-y-8">
                    {[
                      { step: 1, title: "Assessment Kebutuhan", desc: "Identifikasi kebutuhan training spesifik untuk tim Anda" },
                      { step: 2, title: "Penyusunan Kurikulum", desc: "Kurikulum disesuaikan dengan level dan kebutuhan peserta" },
                      { step: 3, title: "Penjadwalan", desc: "Tentukan jadwal training yang tidak mengganggu operasional" },
                      { step: 4, title: "Pre-Test", desc: "Evaluasi awal untuk mengukur baseline knowledge" },
                      { step: 5, title: "Sesi Training", desc: "Kombinasi teori, demonstrasi, dan hands-on practice" },
                      { step: 6, title: "Post-Test & Evaluasi", desc: "Ujian akhir dan evaluasi untuk memastikan pemahaman" },
                      { step: 7, title: "Sertifikasi", desc: "Pemberian sertifikat untuk peserta yang lulus" },
                      { step: 8, title: "Follow-up", desc: "Monitoring pasca training dan refresher jika diperlukan" }
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

            {/* Equipment Coverage */}
            <AnimatedSection delay={0.6}>
            <div className="bg-white p-8 rounded-2xl shadow-xl mb-20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Peralatan yang Kami Training</h2>
                <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Patient Monitor", "Infusion Pump", "Syringe Pump", "Ventilator",
                  "Defibrillator", "EKG Machine", "Ultrasound", "X-Ray",
                  "Hemodialysis", "CPAP/BiPAP", "Anesthesia Machine", "Laboratory Equipment",
                  "Sterilizer", "Incubator", "Surgical Instruments", "Dan lainnya..."
                ].map((equipment, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#2563eb]/5 transition-colors">
                    <svg className="w-5 h-5 text-[#2563eb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{equipment}</span>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection delay={0.7}>
            <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white p-12 rounded-3xl text-center overflow-hidden">
              <TechPattern variant="white" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tingkatkan Kompetensi Tim Anda
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Daftarkan tim Anda sekarang dan dapatkan training berkualitas dari instruktur berpengalaman
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-[#2563eb] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    Daftar Training
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
