'use client';

import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "@/components/TechPattern";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

const BenefitIcon = ({ path, path2 }: { path: string; path2?: string }) => (
  <div className="w-10 h-10 rounded-lg bg-[#1e3a8a]/8 flex items-center justify-center text-[#1e3a8a] mb-4 shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={path} />
      {path2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={path2} />}
    </svg>
  </div>
);

export default function KSOPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="KSO (Kerjasama Operasional)"
        subtitle="Dapat alat medis tanpa harus beli langsung — perawatan dan kalibrasi kami yang urus."
        badge="Kerjasama Operasional"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            {/* Overview */}
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/patient monitor.avif" alt="KSO" fill className="object-cover" />
                </div>
                <div className="space-y-5">
                  <h2 className="text-3xl font-bold text-slate-900">Apa itu KSO?</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] rounded-full" />
                  <p className="text-base text-slate-600 leading-relaxed">
                    Dengan KSO, fasilitas kesehatan Anda bisa menggunakan alat medis yang kami
                    sediakan tanpa perlu beli langsung. Mulai dari survey kebutuhan, pengadaan,
                    instalasi, sampai maintenance berkala — semuanya kami tangani.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Tidak perlu investasi besar di awal. Anda fokus ke pasien, kami yang urus alat-alatnya.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Benefits */}
            <AnimatedSection delay={0.2}>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Kenapa Pilih KSO?</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      path: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Investasi Awal Minimal",
                      desc: "Tidak ada pembelian langsung — lebih hemat di awal dan risiko lebih kecil.",
                    },
                    {
                      path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                      path2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                      title: "Pemeliharaan Gratis",
                      desc: "Semua maintenance, kalibrasi, dan perbaikan kami tangani tanpa biaya tambahan.",
                    },
                    {
                      path: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                      title: "Penggantian Cepat",
                      desc: "Kalau ada kerusakan, alat diganti cepat supaya operasional tidak terganggu.",
                    },
                    {
                      path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                      title: "Support 24/7",
                      desc: "Ada tim yang bisa dihubungi kapan saja lewat hotline khusus.",
                    },
                    {
                      path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                      title: "Pelatihan Berkelanjutan",
                      desc: "Kami adakan training rutin untuk staff medis saat ada alat baru.",
                    },
                    {
                      path: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                      title: "Pelaporan Transparan",
                      desc: "Laporan penggunaan dan kondisi alat dikirim secara berkala.",
                    },
                  ].map((benefit, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-[#1e3a8a]/20 hover:shadow-md transition-all duration-300">
                      <BenefitIcon path={benefit.path} path2={benefit.path2} />
                      <h3 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Process */}
            <AnimatedSection delay={0.3}>
              <div className="bg-slate-50 p-10 md:p-12 rounded-2xl mb-20 border border-slate-100">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Proses Kerjasama</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                  {[
                    { step: 1, title: "Analisis Kebutuhan & Site Survey", desc: "Kami kunjungi fasilitas Anda dulu untuk lihat kondisi dan kebutuhan secara langsung." },
                    { step: 2, title: "Penyusunan Proposal", desc: "Kami susun proposal dengan detail biaya dan timeline yang jelas." },
                    { step: 3, title: "Kontrak Kerjasama", desc: "Kontrak ditandatangani setelah semua terms disepakati bersama." },
                    { step: 4, title: "Pengadaan & Instalasi", desc: "Alat dikirim dan dipasang oleh teknisi bersertifikat kami." },
                    { step: 5, title: "Pelatihan Staff", desc: "Training penggunaan untuk staff Anda sebelum alat mulai dioperasikan." },
                    { step: 6, title: "Pemeliharaan Rutin", desc: "Jadwal maintenance terjadwal agar alat tetap dalam kondisi optimal." },
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

            {/* Equipment */}
            <AnimatedSection delay={0.4}>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Peralatan yang Tersedia</h2>
                  <div className="w-10 h-1 bg-[#1e3a8a] mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Patient Monitor", "Infusion Pump", "Syringe Pump", "Ventilator",
                    "Defibrillator", "EKG Machine", "Ultrasound", "X-Ray Machine",
                    "CT Scan", "MRI", "Dialysis Machine", "Laboratory Equipment",
                  ].map((item) => (
                    <div key={item} className="bg-white p-4 rounded-lg border-l-2 border-[#1e3a8a] border border-slate-100 shadow-sm">
                      <p className="font-medium text-slate-800 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.5}>
              <div className="relative bg-[#0f172a] text-white p-10 md:p-12 rounded-2xl text-center overflow-hidden">
                <TechPattern variant="white" />
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Tertarik dengan Program KSO?</h2>
                  <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Hubungi kami — kami siap datang untuk survey dan buat proposal sesuai kondisi fasilitas Anda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-7 py-3.5 bg-[#2563eb] text-white rounded-xl font-bold hover:bg-[#1d4ed8] transition-colors duration-300">
                      Hubungi Kami
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
