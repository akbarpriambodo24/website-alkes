import Image from "next/image";

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-white via-slate-50 to-emerald-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jangkauan Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami melayani distribusi alat kesehatan ke seluruh wilayah Indonesia dengan jaringan logistik yang luas dan terpercaya
          </p>
        </div>

        {/* Gambar peta coverage */}
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-auto rounded-2xl shadow-xl overflow-hidden bg-white p-6 md:p-8 border border-gray-100">
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
