export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Hubungi Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p>info@alkesindonesia.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">☎️</span>
                <div>
                  <p className="font-semibold text-gray-900">Telepon</p>
                  <p>(021) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p>0812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Alamat</p>
                  <p>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kirim Pesan */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            <p className="text-lg text-gray-700 mb-8">
              Tim kami akan menghubungi Anda dalam 1×24 jam.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-green-600 text-white text-center py-5 rounded-xl font-bold text-xl hover:bg-green-700 transition shadow-lg"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}