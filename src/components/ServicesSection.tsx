import Image from "next/image";
import Link from "next/link";
import { TechPattern } from "./TechPattern";

export function ServicesSection() {
  // Hanya satu layanan utama yang ditampilkan
  const mainService = {
    title: "Layanan Distribusi Alat Kesehatan",
    description: "Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan alat kesehatan Anda, termasuk KSO (Kerjasama Operasional), Pengadaan Rutin, dan Training Penggunaan Alat. Dengan tim berpengalaman dan jaringan luas, kami siap melayani rumah sakit, klinik, puskesmas dan laboratorium di seluruh Indonesia.",
    image: "/patient monitor.avif",
    features: [
      "Kerjasama Operasional (KSO)",
      "Pengadaan Rutin & Berkala",
      "Training & Instalasi",
      "Konsultasi Gratis",
      "Layanan After Sales",
      "Pengiriman Seluruh Indonesia"
    ]
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <TechPattern variant="white" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-5 py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
              <span className="text-amber-600 text-sm font-bold tracking-widest uppercase">
                LAYANAN KAMI
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Solusi Lengkap untuk Kebutuhan Medis</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Layanan profesional dan terpercaya untuk mendukung fasilitas kesehatan Anda
          </p>
        </div>

        {/* Main Service Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[300px] md:h-full min-h-[400px] overflow-hidden">
                <Image
                  src={mainService.image}
                  alt={mainService.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/40 to-emerald-700/20"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {mainService.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {mainService.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {mainService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Selengkapnya
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}