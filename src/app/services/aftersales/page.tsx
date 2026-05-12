'use client';

import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "@/components/TechPattern";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function AftersalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Layanan Aftersales"
        subtitle="Alat sudah sampai bukan berarti selesai. Kami tetap ada untuk maintenance, kalibrasi, dan kalau ada yang perlu diperbaiki."
        badge="Aftersales"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            {/* Overview */}
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/Stetoskop kompressed.jpeg" alt="Aftersales Service" fill className="object-cover" />
                </div>
                <div className="space-y-5">
                  <h2 className="text-3xl font-bold text-slate-900">Dukungan Purna Jual</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] rounded-full" />
                  <p className="text-base text-slate-600 leading-relaxed">
                    Setelah alat dipasang, kami tetap bertanggung jawab atas kondisinya. Ada
                    maintenance rutin, kalibrasi terjadwal, sampai training untuk staf yang baru.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Teknisi kami ada di beberapa kota, jadi tidak perlu menunggu lama kalau ada masalah.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Services */}
            <AnimatedSection delay={0.2}>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Yang Kami Tangani</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: "Preventive Maintenance",
                      desc: "Perawatan berkala terjadwal untuk mencegah kerusakan dan memastikan alat selalu dalam kondisi prima.",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                      ),
                      title: "Corrective Maintenance",
                      desc: "Perbaikan dan penanganan kerusakan oleh teknisi ahli dengan suku cadang original.",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      ),
                      title: "Kalibrasi",
                      desc: "Kalibrasi alat secara berkala untuk memastikan akurasi pengukuran sesuai standar.",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      ),
                      title: "Training Penggunaan",
                      desc: "Pelatihan untuk tenaga medis agar alat digunakan dengan aman dan sesuai prosedur.",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      ),
                      title: "Spare Part Original",
                      desc: "Suku cadang asli dari principal — bukan KW, bukan rekondisi.",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      ),
                      title: "Technical Support",
                      desc: "Troubleshooting jarak jauh dan kunjungan on-site kalau dibutuhkan.",
                    },
                  ].map((service, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-[#1e3a8a]/20 hover:shadow-md transition-all duration-300 group">
                      <div className="w-10 h-10 bg-[#1e3a8a]/8 rounded-lg flex items-center justify-center text-[#1e3a8a] mb-4 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Why us */}
            <AnimatedSection delay={0.3}>
              <div className="bg-slate-50 p-10 md:p-12 rounded-2xl mb-20 border border-slate-100">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Kenapa Aftersales Kami?</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Respons Cepat",
                      desc: "Untuk area Jabodetabek, teknisi kami biasanya bisa on-site dalam 1×24 jam.",
                    },
                    {
                      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                      title: "Teknisi Bersertifikat",
                      desc: "Semua teknisi punya sertifikasi dari principal dan minimal 3 tahun pengalaman.",
                    },
                    {
                      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                      title: "Laporan Berkala",
                      desc: "Setiap kunjungan maintenance ada laporan tertulis lengkap dengan rekomendasi.",
                    },
                    {
                      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                      title: "Jangkauan Luas",
                      desc: "Teknisi kami ada di beberapa kota besar sehingga tidak harus menunggu dari Jakarta.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-xl border border-slate-100">
                      <div className="shrink-0 w-10 h-10 bg-[#1e3a8a]/8 rounded-lg flex items-center justify-center text-[#1e3a8a]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={item.icon} />
                        </svg>
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

            {/* Flow */}
            <AnimatedSection delay={0.4}>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Alur Layanan</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-4.5 top-0 bottom-0 w-px bg-slate-200" />
                    <div className="space-y-6">
                      {[
                        { step: 1, title: "Laporan & Permintaan", desc: "Hubungi kami lewat telepon, email, atau WhatsApp — mana yang lebih mudah." },
                        { step: 2, title: "Analisa & Koordinasi", desc: "Tim kami cek masalah dan tentukan teknisi serta kebutuhan suku cadang." },
                        { step: 3, title: "Penjadwalan", desc: "Jadwal kunjungan disepakati sesuai urgensi dan ketersediaan." },
                        { step: 4, title: "Kunjungan On-Site", desc: "Teknisi datang, cek, dan lakukan perbaikan atau maintenance di lokasi." },
                        { step: 5, title: "Testing & Validasi", desc: "Alat diuji ulang sebelum diserahkan balik." },
                        { step: 6, title: "Laporan Servis", desc: "Laporan lengkap diserahkan termasuk catatan rekomendasi ke depan." },
                      ].map((item) => (
                        <div key={item.step} className="relative flex gap-5 items-start">
                          <div className="shrink-0 w-9 h-9 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                            {item.step}
                          </div>
                          <div className="flex-1 bg-white p-5 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.5}>
              <div className="relative bg-[#0f172a] text-white p-10 md:p-12 rounded-2xl text-center overflow-hidden">
                <TechPattern variant="white" />
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Butuh Layanan Aftersales?</h2>
                  <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Hubungi tim kami untuk penjadwalan maintenance atau kalau ada masalah yang perlu ditangani segera.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-7 py-3.5 bg-[#2563eb] text-white rounded-xl font-bold hover:bg-[#1d4ed8] transition-colors duration-300">
                      Hubungi Aftersales
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
