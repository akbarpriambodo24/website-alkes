'use client';

import Image from "next/image";
import { TechPattern } from "@/components/TechPattern";
import { PageHero } from "@/components/PageHero";

export default function TeamPage() {
  const komisaris = {
    name: "Ilham Imtiyaz Burhanuddin",
    position: "Komisaris",
    photo: "/Foto Pak Ilham2.avif"
  };

  const director = {
    name: "Jimmy F Zega",
    position: "Direktur Utama",
    photo: "/Foto P Jimmy.avif",
    description: "Memimpin perusahaan dengan visi dan dedikasi tinggi"
  };

  // Direktur lainnya (2 kolom)
  const directors = [
    {
      name: "Arief Adityo Gumilang",
      position: "Direktur Operasional",
      photo: "/Foto Arief web.avif"
    },
    {
      name: "Anggun Darani",
      position: "Direktur Pengembangan Bisnis",
      photo: "/Foto Bu Anggun.avif"
    }
  ];

  // Team members (4 kolom) - 4 orang
  const managers = [
    {
      name: "Aris Hamdanny",
      position: "General Manager",
      photo: "/Foto P Danny2.avif"
    },
    {
      name: "Muhammad Syaiful Hidayat",
      position: "General Manager",
      photo: "/Foto Syaiful4.avif"
    },
    {
      name: "Nur Azis Pratama",
      position: "Manager Keuangan & Pajak",
      photo: "/Foto Azis 2.avif"
    },
    {
      name: "Akbar Priambodo Riyono",
      position: "Bisnis Analis",
      photo: "/Foto Akbar2.avif"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Tim Kepemimpinan"
        subtitle="Dipimpin oleh profesional berpengalaman yang berkomitmen untuk menghadirkan solusi alat kesehatan berkualitas tinggi di seluruh Indonesia"
        badge="TIM KAMI"
        backgroundImage="/Foto bersama2.avif"
      />

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Komisaris Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#2563eb]/10 to-blue-50 rounded-full border border-[#2563eb]/20 mb-6">
                <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase text-[#2563eb]">
                  Komisaris
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#2563eb] rounded-full"></div>
                <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#2563eb] rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-sm group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/0 to-blue-600/0 group-hover:from-[#2563eb]/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>

                {/* Photo Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#ecf0ff] via-[#e3eaff] to-[#d9dffe]">
                  <div className="relative w-full aspect-square">
                    <div className="absolute inset-0 p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      {komisaris.photo.startsWith('/Foto') ? (
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl bg-white">
                          <Image
                            src={komisaris.photo}
                            alt={komisaris.name}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-white/40 rounded-full blur-xl group-hover:bg-white/60 transition-all duration-500"></div>
                          <div className="relative w-full h-full rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center border-2 border-[#2563eb]/20 group-hover:border-[#2563eb]/40 transition-all duration-500 shadow-lg">
                            <svg className="w-12 h-12 text-[#2563eb]/50 group-hover:text-[#2563eb]/70 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-bl-4xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-tr-3xl pointer-events-none"></div>
                  </div>
                </div>

                {/* Info Container */}
                <div className="relative p-4 text-center">
                  <h3 className="text-base font-bold text-gray-900 mb-2 min-h-10 flex items-center justify-center group-hover:text-[#2563eb] transition-colors duration-300">
                    {komisaris.name}
                  </h3>

                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2563eb]/40 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#2563eb] rounded-full"></div>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2563eb]/40 rounded-full"></div>
                  </div>

                  <p className="text-[#2563eb] font-semibold text-xs uppercase tracking-wider">
                    {komisaris.position}
                  </p>

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-blue-400 rounded-full group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Director Section - Premium Executive Style */}
          <div className="max-w-7xl mx-auto mb-32">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#2563eb]/10 to-blue-50 rounded-full border border-[#2563eb]/20 mb-6">
                <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase text-[#2563eb]">
                  Direktur Utama
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#2563eb] rounded-full"></div>
                <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#2563eb] rounded-full"></div>
              </div>
            </div>

            <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02]">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="grid lg:grid-cols-5 gap-0">
                {/* Text Section - Left (3 columns) */}
                <div className="lg:col-span-3 p-10 md:p-16 lg:p-20 flex flex-col justify-center order-2 lg:order-1 relative">
                  <div className="space-y-8">
                    {/* Name and Title */}
                    <div>
                      <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        {director.name}
                      </h3>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-16 bg-gradient-to-r from-[#2563eb] to-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                        </div>
                        <p className="text-2xl md:text-3xl text-[#2563eb] font-bold">
                          {director.position}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-xl leading-relaxed font-light">
                      {director.description}
                    </p>

                    {/* Stats/Info Grid */}
                    <div className="grid grid-cols-2 gap-6 pt-8">
                      <div className="bg-gradient-to-br from-[#2563eb]/5 to-blue-50/50 rounded-2xl p-6 border border-[#2563eb]/10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-[#2563eb]/10 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Pengalaman</p>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">20+ Tahun</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50/50 to-[#2563eb]/5 rounded-2xl p-6 border border-[#2563eb]/10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-[#2563eb]/10 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Spesialisasi</p>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">Healthcare</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo Section - Right (2 columns) - Clean, No Frame */}
                <div className="lg:col-span-2 relative order-1 lg:order-2 bg-gradient-to-br from-gray-50 to-white">
                  <div className="relative h-full min-h-[500px] lg:min-h-[700px]">
                    {/* Photo container - Clean without decorative elements */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
                      <div className="relative w-full max-w-lg aspect-[3/4]">
                        {/* Main photo - No borders or frames */}
                        <Image
                          src={director.photo}
                          alt={director.name}
                          fill
                          className="object-cover rounded-2xl shadow-2xl"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Directors Section - 2 Columns */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#2563eb]/10 to-blue-50 rounded-full border border-[#2563eb]/20 mb-6">
                <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase text-[#2563eb]">
                  Direktur
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#2563eb] rounded-full"></div>
                <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#2563eb] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {directors.map((director, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/0 to-blue-600/0 group-hover:from-[#2563eb]/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>

                  {/* Photo Container - Same Size as Manager */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#ecf0ff] via-[#e3eaff] to-[#d9dffe]">
                    <div className="relative w-full aspect-square">
                      <div className="absolute inset-0 p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        {director.photo.startsWith('/Foto') ? (
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl bg-white">
                            <Image
                              src={director.photo}
                              alt={director.name}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            {/* Background decorative circle */}
                            <div className="absolute inset-0 bg-white/40 rounded-full blur-xl group-hover:bg-white/60 transition-all duration-500"></div>

                            {/* Main avatar container */}
                            <div className="relative w-full h-full rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center border-2 border-[#2563eb]/20 group-hover:border-[#2563eb]/40 transition-all duration-500 shadow-lg">
                              <svg className="w-12 h-12 text-[#2563eb]/50 group-hover:text-[#2563eb]/70 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Decorative elements - Smaller */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-bl-4xl pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-tr-3xl pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Info Container - Compact */}
                  <div className="relative p-4 text-center">
                    <h3 className="text-base font-bold text-gray-900 mb-2 min-h-10 flex items-center justify-center group-hover:text-[#2563eb] transition-colors duration-300">
                      {director.name}
                    </h3>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2563eb]/40 rounded-full"></div>
                      <div className="w-1 h-1 bg-[#2563eb] rounded-full"></div>
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2563eb]/40 rounded-full"></div>
                    </div>

                    <p className="text-[#2563eb] font-semibold text-xs uppercase tracking-wider">
                      {director.position}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-blue-400 rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Managers Section - 4 Columns, Smaller */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#2563eb]/10 to-blue-50 rounded-full border border-[#2563eb]/20 mb-6">
                <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase text-[#2563eb]">
                  Management Team
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#2563eb] rounded-full"></div>
                <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#2563eb] rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light">
                Tim profesional berpengalaman yang berdedikasi untuk kesuksesan dan pertumbuhan perusahaan
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {managers.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/0 to-blue-600/0 group-hover:from-[#2563eb]/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>

                  {/* Photo Container - Smaller */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#ecf0ff] via-[#e3eaff] to-[#d9dffe]">
                    <div className="relative w-full aspect-square">
                      <div className="absolute inset-0 p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        {member.photo.startsWith('/Foto') ? (
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl bg-white">
                            <Image
                              src={member.photo}
                              alt={member.name}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            {/* Background decorative circle */}
                            <div className="absolute inset-0 bg-white/40 rounded-full blur-xl group-hover:bg-white/60 transition-all duration-500"></div>

                            {/* Main avatar container */}
                            <div className="relative w-full h-full rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center border-2 border-[#2563eb]/20 group-hover:border-[#2563eb]/40 transition-all duration-500 shadow-lg">
                              <svg className="w-12 h-12 text-[#2563eb]/50 group-hover:text-[#2563eb]/70 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Decorative elements - Smaller */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-bl-4xl pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-tr-3xl pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Info Container - Compact */}
                  <div className="relative p-4 text-center">
                    <h3 className="text-base font-bold text-gray-900 mb-2 min-h-[40px] flex items-center justify-center group-hover:text-[#2563eb] transition-colors duration-300">
                      {member.name}
                    </h3>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2563eb]/40 rounded-full"></div>
                      <div className="w-1 h-1 bg-[#2563eb] rounded-full"></div>
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2563eb]/40 rounded-full"></div>
                    </div>

                    <p className="text-[#2563eb] font-semibold text-xs uppercase tracking-wider">
                      {member.position}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-blue-400 rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
