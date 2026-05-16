import Image from "next/image";

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jangkauan Kami
          </h2>
          <div className="w-12 h-1 bg-[#1e3a8a] mx-auto mb-4 rounded-full" />
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Memiliki 10 Perwakilan yang menjangkau seluruh wilayah Indonesia
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-white p-6 md:p-8 border border-slate-100 shadow-sm">
            <Image
              src="/peta 2.png"
              alt="Peta Coverage Area PT Lapan Alpha Kirana"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
