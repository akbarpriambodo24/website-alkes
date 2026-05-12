import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  const features = [
    "Kerjasama Operasional (KSO)",
    "Pengadaan Rutin & Berkala",
    "Training & Instalasi",
    "Konsultasi Gratis",
    "Layanan After Sales",
    "Pengiriman Seluruh Indonesia",
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-5 py-2 bg-[#1e3a8a]/8 rounded-full border border-[#1e3a8a]/15">
              <span className="text-[#1e3a8a] text-sm font-bold tracking-widest uppercase">
                Layanan
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Yang Kami Kerjakan</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-24 bg-[#1e3a8a]/30 rounded-full" />
            <div className="w-2 h-2 bg-[#1e3a8a] rounded-full" />
            <div className="h-px w-24 bg-[#1e3a8a]/30 rounded-full" />
          </div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Kami tidak jual semua. Fokus pada yang kami kuasai.
          </p>
        </div>

        {/* Main Service Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-75 md:h-full min-h-85 overflow-hidden">
                <Image
                  src="/patient monitor.avif"
                  alt="Layanan Distribusi Alat Kesehatan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#0f172a]/35" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Layanan Distribusi Alat Kesehatan
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Ada tiga hal yang bisa kami bantu: KSO untuk pengadaan alat tanpa beli
                  langsung, pengadaan rutin dan berkala, serta training dan instalasi alat.
                  Klien kami dari RS besar, klinik swasta, sampai puskesmas — di berbagai
                  kota dari Jawa, Kalimantan, Sulawesi, sampai Papua.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-[#1e3a8a] mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-7 py-3.5 bg-[#1e3a8a] text-white rounded-lg font-bold text-base hover:bg-[#142d54] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Selengkapnya
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
