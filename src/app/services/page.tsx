import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { TechPattern } from "@/components/TechPattern";

export const metadata = {
  title: 'Layanan Kami - PT Lapan Alpha Kirana',
  description: 'Layanan profesional distribusi alat kesehatan untuk rumah sakit, klinik, dan laboratorium di seluruh Indonesia.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Kerjasama Operasional (KSO)",
      slug: "kso",
      description: "Kerjasama operasional untuk pengadaan dan pengelolaan alat kesehatan di rumah sakit dan klinik Anda dengan sistem yang fleksibel dan menguntungkan.",
      image: "/patient monitor.avif",
      features: [
        "Sistem Bagi Hasil Transparan",
        "Pengelolaan Inventory Profesional",
        "Maintenance Berkala",
        "Tim Support 24/7"
      ]
    },
    {
      title: "Pengadaan Rutin & Berkala",
      slug: "pengadaan-rutin",
      description: "Solusi pengadaan alat kesehatan secara rutin dan berkala dengan harga kompetitif, kualitas terjamin, dan pengiriman tepat waktu ke seluruh Indonesia.",
      image: "/Mikroskop kompress.webp",
      features: [
        "Harga Kompetitif",
        "Produk Bersertifikat",
        "Pengiriman Cepat",
        "Garansi Resmi"
      ]
    },
    {
      title: "Training & Pelatihan",
      slug: "training",
      description: "Pelatihan penggunaan dan pemeliharaan alat kesehatan oleh tim ahli kami untuk memastikan operasional yang optimal dan aman di fasilitas kesehatan Anda.",
      image: "/Stetoskop kompressed.jpeg",
      features: [
        "Instruktur Bersertifikat",
        "Modul Lengkap",
        "Sertifikat Pelatihan",
        "Follow-up Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero
        title="Layanan Kami"
        subtitle="Solusi profesional dan terpercaya untuk mendukung operasional fasilitas kesehatan Anda di seluruh Indonesia"
        badge="LAYANAN PROFESIONAL"
        backgroundImage="/patient monitor.avif"
      />

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <TechPattern variant="white" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/60 to-[#2563eb]/40"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Selengkapnya
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Butuh Konsultasi untuk Kebutuhan Alat Kesehatan?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk fasilitas kesehatan Anda
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563eb] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Hubungi Kami Sekarang
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
