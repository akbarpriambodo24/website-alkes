'use client';

import { TechPattern } from "@/components/TechPattern";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Company Profile"
        subtitle="Distributor Alat Kesehatan Terpercaya di Indonesia"
        badge="PT Lapan Alpha Kirana"
      />

      {/* About ──────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">
                {/* Narrative */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#2563eb] mb-5">
                    Tentang Kami
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
                    PT Lapan Alpha Kirana
                  </h2>
                  <div className="w-12 h-1 bg-[#2563eb] mb-8 rounded-full" />
                  <div className="space-y-5 text-slate-600 text-[17px] leading-relaxed">
                    <p>
                      Sebuah perusahaan yang berkedudukan di Jakarta, didirikan pada tahun 2025.
                      Saat ini memiliki bidang usaha sebagai perusahaan distribusi alat kesehatan
                      dengan{" "}
                      <strong className="text-slate-800 font-semibold">
                        10 perwakilan di seluruh Indonesia
                      </strong>
                      .
                    </p>
                    <p>
                      Dengan jaringan distribusi yang luas dan tim profesional berpengalaman, kami
                      melayani rumah sakit, klinik, apotek, laboratorium, dan puskesmas di seluruh
                      Indonesia dengan standar pelayanan yang tinggi.
                    </p>
                    <p>
                      Kami beroperasi dalam tiga pilar utama:{" "}
                      <strong className="text-slate-800 font-semibold">Distribution</strong>,{" "}
                      <strong className="text-slate-800 font-semibold">Trading</strong>, dan{" "}
                      <strong className="text-slate-800 font-semibold">
                        KSO (Kerjasama Operasional)
                      </strong>{" "}
                      — memberikan solusi komprehensif bagi fasilitas kesehatan di seluruh
                      nusantara.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 lg:mt-14">
                  {[
                    { number: "2025", label: "Tahun Berdiri" },
                    { number: "10+", label: "Perwakilan Daerah" },
                    { number: "100+", label: "Produk Tersedia" },
                    { number: "500+", label: "Klien Aktif" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center"
                    >
                      <p className="text-3xl font-bold text-[#1e3a8a] mb-1">{stat.number}</p>
                      <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Visi & Misi ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Visi */}
                <div className="bg-[#0f172a] rounded-2xl p-10">
                  <p className="text-[#60a5fa] text-xs font-bold tracking-widest uppercase mb-6">
                    Visi
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-5 leading-snug">
                    Menjadi Solusi Terdepan Industri Kesehatan Indonesia
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Menjadi solusi terdepan dalam industri kesehatan Indonesia dengan memberikan
                    produk dan layanan berkualitas tinggi yang dapat diandalkan oleh setiap
                    fasilitas kesehatan di seluruh nusantara.
                  </p>
                </div>

                {/* Misi */}
                <div className="bg-white border border-slate-200 rounded-2xl p-10">
                  <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-6">
                    Misi
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-snug">
                    Langkah Nyata Menuju Layanan Prima
                  </h3>
                  <ol className="space-y-4">
                    {[
                      "Menyediakan produk alat kesehatan berkualitas tinggi dengan standar internasional",
                      "Mengembangkan SDM yang kompeten dan berintegritas",
                      "Meningkatkan kepuasan pelanggan melalui pelayanan cepat, tepat, dan profesional",
                      "Membangun kemitraan strategis dengan seluruh pemangku kepentingan",
                      "Mengembangkan sistem yang modern dan terintegrasi",
                    ].map((misi, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-slate-700 text-sm leading-relaxed"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {misi}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values ─────────────────────────────────────────────── */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="mb-14">
                <p className="text-xs font-bold tracking-widest uppercase text-[#2563eb] mb-4">
                  Nilai Perusahaan
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Nilai-Nilai yang Kami Junjung
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    code: "A",
                    title: "Agile",
                    desc: "Cepat, lugas, dan berani menghadapi tantangan dalam industri yang terus berkembang.",
                  },
                  {
                    code: "R",
                    title: "Respect",
                    desc: "Menghargai setiap mitra, pelanggan, dan rekan kerja dengan penuh kepedulian dan harmoni.",
                  },
                  {
                    code: "I",
                    title: "Integrity",
                    desc: "Beroperasi dengan kejujuran, transparansi, dan keterbukaan sebagai fondasi kepercayaan.",
                  },
                  {
                    code: "F",
                    title: "Fun",
                    desc: "Menciptakan lingkungan kerja yang menyenangkan, penuh semangat, dan antusiasme.",
                  },
                ].map((val, i) => (
                  <div key={i} className="border-t-2 border-[#2563eb] pt-6">
                    <p className="text-6xl font-black text-slate-100 mb-3 leading-none">
                      {val.code}
                    </p>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Download CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0f172a] relative overflow-hidden">
        <TechPattern variant="white" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#60a5fa] text-xs font-bold tracking-widest uppercase mb-3">
                Profil Perusahaan
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Download Company Profile
              </h2>
              <p className="text-slate-400 text-base">
                Unduh profil perusahaan lengkap dalam format PDF
              </p>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1JhBwGGwiMtEj5Sag77BKLP50I2tvD76e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2563eb] text-white rounded-xl font-bold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg hover:shadow-[#2563eb]/30 hover:shadow-xl shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
