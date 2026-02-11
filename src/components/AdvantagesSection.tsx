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
          <div className="relative w-full h-auto rounded-xl shadow-xl overflow-hidden bg-white p-4 border border-gray-100">
            <Image
              src="/Peta coverage.png"
              alt="Peta Coverage Area PT Lapan Alpha Kirana"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 mb-2">34</div>
              <p className="text-gray-600 font-medium">Provinsi</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-emerald-500">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100+</div>
              <p className="text-gray-600 font-medium">Kota</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-amber-500">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Support</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-purple-500">
              <div className="text-4xl font-bold text-purple-600 mb-2">Fast</div>
              <p className="text-gray-600 font-medium">Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
