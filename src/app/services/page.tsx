import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: 'Layanan Kami',
  description: 'Layanan profesional distribusi alat kesehatan untuk rumah sakit, klinik, dan laboratorium di seluruh Indonesia.',
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    number: "01",
    title: "Kerjasama Operasional (KSO)",
    slug: "kso",
    description:
      "Kerjasama operasional untuk pengadaan dan pengelolaan alat kesehatan di rumah sakit dan klinik Anda dengan sistem yang fleksibel dan menguntungkan.",
    image: "/patient monitor.avif",
    features: [
      "Sistem Bagi Hasil Transparan",
      "Pengelolaan Inventory Profesional",
      "Maintenance Berkala",
      "Tim Support 24/7",
    ],
  },
  {
    number: "02",
    title: "Pengadaan Rutin & Berkala",
    slug: "pengadaan-rutin",
    description:
      "Solusi pengadaan alat kesehatan secara rutin dan berkala dengan harga kompetitif, kualitas terjamin, dan pengiriman tepat waktu ke seluruh Indonesia.",
    image: "/Mikroskop kompress.webp",
    features: [
      "Harga Kompetitif",
      "Produk Bersertifikat",
      "Pengiriman Cepat",
      "Garansi Resmi",
    ],
  },
  {
    number: "03",
    title: "Layanan Aftersales",
    slug: "aftersales",
    description:
      "Dukungan purna jual menyeluruh meliputi maintenance, perbaikan, kalibrasi, training penggunaan, dan penyediaan spare part untuk alat kesehatan Anda.",
    image: "/Stetoskop kompressed.jpeg",
    features: [
      "Preventive & Corrective Maintenance",
      "Training Penggunaan Alat",
      "Kalibrasi Berkala",
      "Spare Part Original",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Layanan Kami"
        subtitle="Solusi profesional dan terpercaya untuk mendukung operasional fasilitas kesehatan Anda di seluruh Indonesia"
        badge="Layanan Profesional"
      />

      {/* Services ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-0">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={service.slug}
                  className={`grid md:grid-cols-2 gap-0 ${
                    idx < services.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-72 md:h-auto min-h-85 overflow-hidden bg-slate-100 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[#0f172a]/30" />
                    <span className="absolute top-6 left-6 text-7xl font-black text-white/10 leading-none select-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-10 md:p-14 lg:p-16 bg-white ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-4">
                      Layanan {service.number}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-base leading-relaxed mb-7">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-slate-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-2 text-[#2563eb] font-bold text-sm hover:gap-3 transition-all duration-200"
                    >
                      Pelajari Lebih Lanjut
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#60a5fa] text-xs font-bold tracking-widest uppercase mb-3">
                Konsultasi
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Butuh Solusi untuk Fasilitas Kesehatan Anda?
              </h2>
              <p className="text-slate-400 text-base">
                Tim ahli kami siap membantu menemukan layanan yang tepat
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] text-white rounded-xl font-bold hover:bg-[#1d4ed8] transition-all duration-300 shrink-0"
            >
              Hubungi Kami
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
