export function VisiMisiSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Visi & Misi</h2>
          <div className="w-24 h-1 bg-[#2759cd] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visi */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#2759cd] hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#2759cd] rounded-full flex items-center justify-center text-white mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#2759cd]">Visi</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Menjadi distributor alat kesehatan terdepan di Indonesia yang selalu memberikan solusi terbaik, inovatif, dan terpercaya bagi seluruh mitra kesehatan.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#2759cd] hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#2759cd] rounded-full flex items-center justify-center text-white mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#2759cd]">Misi</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Menyediakan produk alat kesehatan berkualitas tinggi dengan harga kompetitif",
                "Memberikan layanan pengiriman cepat dan tepat waktu ke seluruh wilayah Indonesia",
                "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan prima",
                "Mendukung peningkatan kualitas pelayanan kesehatan melalui edukasi dan training"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-[#2759cd] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}