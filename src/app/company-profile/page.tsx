'use client';

import { TechPattern } from "@/components/TechPattern";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white">
      {/* Hero Section */}
      <PageHero
        title="Company Profile"
        subtitle="Distributor Alat Kesehatan Terpercaya di Indonesia"
        badge="PT Lapan Alpha Kirana"
        backgroundImage="/Stetoskop kompressed.jpeg"
      />

      {/* Main Content */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Company Overview */}
            <AnimatedSection>
              <div className="relative bg-white p-10 rounded-3xl shadow-xl mb-16 border border-emerald-100/50 overflow-hidden">
                {/* Decorative gradient corner */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-bl-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-tr-[80px]"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Tentang Perusahaan</h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2"></div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <span className="font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">PT Lapan Alpha Kirana</span> — <b>Distribution • Trading • KSO</b>
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Sebuah perusahaan yang berkedudukan di Jakarta, didirikan pada tahun 2025. Saat ini memiliki bidang usaha sebagai perusahaan distribusi alat kesehatan dan memiliki <span className="font-semibold text-emerald-600">10 perwakilan di seluruh Indonesia</span>.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Dengan jaringan distribusi yang luas dan tim profesional berpengalaman, kami melayani rumah sakit, klinik, apotek, laboratorium, dan puskesmas di seluruh Indonesia dengan standar pelayanan yang tinggi.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Visi & Misi Cards */}
            <AnimatedSection delay={0.2}>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Visi Card */}
                <div className="group relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Visi</h3>
                    <p className="text-emerald-100 text-lg leading-relaxed">
                      Menjadi solusi terdepan dalam industri kesehatan Indonesia dengan memberikan produk dan layanan berkualitas tinggi.
                    </p>
                  </div>
                </div>

                {/* Misi Card */}
                <div className="group relative bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 p-8 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Misi</h3>
                    <ol className="space-y-3">
                      {[
                        "Menyediakan produk alat kesehatan berkualitas tinggi dengan standar internasional",
                        "Mengembangkan SDM yang kompeten dan berintegritas",
                        "Meningkatkan kepuasan pelanggan melalui pelayanan cepat, tepat, dan profesional",
                        "Membangun kemitraan strategis dengan seluruh pemangku kepentingan",
                        "Mengembangkan sistem yang modern dan terintegrasi"
                      ].map((misi, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-amber-50 text-base leading-relaxed">
                          <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5">
                            {idx + 1}
                          </span>
                          {misi}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Core Values */}
            <AnimatedSection delay={0.3}>
              <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#134e4a] p-12 rounded-3xl mb-16 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>

                {/* Glowing orbs */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Nilai-Nilai Perusahaan</h2>
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-1 w-16 bg-gradient-to-r from-transparent to-emerald-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <div className="h-1 w-16 bg-gradient-to-l from-transparent to-emerald-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ),
                        title: "Agile",
                        desc: "Cepat, Lugas, Berani",
                        gradient: "from-emerald-400 to-teal-400"
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        ),
                        title: "Respect",
                        desc: "Peduli, Harmony, Menghargai ",
                        gradient: "from-amber-400 to-orange-400"
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ),
                        title: "Integrity",
                        desc: "Jujur, Transparan, Terbuka",
                        gradient: "from-purple-400 to-pink-400"
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        title: "Fun",
                        desc: "Semangat, Menyenangkan, antusias",
                        gradient: "from-blue-400 to-indigo-400"
                      }
                    ].map((value, idx) => (
                      <div
                        key={idx}
                        className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {value.icon}
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3">{value.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Stats Section */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                  { number: "2025", label: "Tahun Berdiri", icon: "📅", color: "from-blue-500 to-indigo-500", border: "border-blue-200" },
                  { number: "10+", label: "Perwakilan", icon: "📍", color: "from-emerald-500 to-teal-500", border: "border-emerald-200" },
                  { number: "100+", label: "Produk", icon: "📦", color: "from-amber-500 to-orange-500", border: "border-amber-200" },
                  { number: "500+", label: "Klien", icon: "🏥", color: "from-purple-500 to-pink-500", border: "border-purple-200" }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`group relative bg-white p-6 rounded-2xl shadow-lg border ${stat.border} text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.number}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Download Company Profile */}
            <AnimatedSection delay={0.5}>
              <div className="relative bg-gradient-to-br from-[#0f172a] via-emerald-900 to-teal-800 text-white p-12 rounded-3xl text-center overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <TechPattern variant="white" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Download Company Profile
                  </h2>
                  <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
                    Unduh profil perusahaan lengkap kami dalam format PDF untuk informasi lebih detail
                  </p>

                  <a
                    href="/company-profile.pdf"
                    download="PT_Lapan_Alpha_Kirana_Company_Profile.pdf"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105"
                  >
                    <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>

                  <p className="text-sm text-emerald-300 mt-6">Format PDF • Ukuran ~2 MB</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
