'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'pengaduan' // pengaduan, pertanyaan, atau saran
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulasi pengiriman email (nanti bisa diganti dengan API endpoint)
      // Untuk saat ini, kita akan membuat mailto link
      const subject = encodeURIComponent(`[${formData.type.toUpperCase()}] ${formData.subject}`);
      const body = encodeURIComponent(
        `Nama: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telepon: ${formData.phone}\n` +
        `Jenis: ${formData.type}\n\n` +
        `Pesan:\n${formData.message}`
      );

      // Buka email client dengan data yang sudah diisi
      window.location.href = `mailto:info@alkesindonesia.com?subject=${subject}&body=${body}`;

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'pengaduan'
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <PageHero
        title="Hubungi Kami"
        subtitle="Kami siap membantu Anda. Sampaikan pertanyaan, saran, atau pengaduan untuk mendapatkan solusi terbaik dari tim kami"
        badge="KONTAK KAMI"
        backgroundImage="/patient monitor.avif"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Pengaduan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Form Pengaduan Pelanggan</h2>
              <p className="text-gray-600 mb-8">
                Silakan isi formulir di bawah ini. Kami akan merespons dalam 1x24 jam.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Terima kasih! Email client Anda akan terbuka untuk mengirim pesan.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Jenis Pesan */}
                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                    Jenis Pesan <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  >
                    <option value="pengaduan">Pengaduan</option>
                    <option value="pertanyaan">Pertanyaan</option>
                    <option value="saran">Saran</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  />
                </div>

                {/* Telepon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon <span className="text-gray-400">(Opsional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08xx-xxxx-xxxx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  />
                </div>

                {/* Subjek */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subjek <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Ringkasan singkat masalah/pertanyaan Anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Jelaskan detail pengaduan/pertanyaan Anda..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2759cd] focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563eb] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1d4ed8] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>

            {/* Informasi Kontak */}
            <div>
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl shadow-xl p-8 text-white mb-6">
                <h2 className="text-3xl font-bold mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563eb]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Email</p>
                      <a href="mailto:info@lapanak.co.id" className="hover:text-gray-200 transition">
                        info@lapanak.co.id
                      </a>
                    </div>
                  </div>

                  {/* Telepon */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Telepon</p>
                      <a href="tel:+62210000000" className="hover:text-gray-200 transition">
                        (021) 0000000
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">WhatsApp</p>
                      <a href="https://wa.me/6281200000000" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
                        0812-0000-0000
                      </a>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Jam Operasional</p>
                      <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                      <p>Sabtu: 08.00 - 12.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alamat */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Alamat Kantor</h3>

                <div className="space-y-6">
                  {/* Head Office */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <h4 className="font-bold text-lg text-gray-900">Head Office</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Menara Prima (Lantai 27 Unit D)<br />
                      Jl. Dr. Ide Anak Agung Gde Agung Blok 6.2<br />
                      Kawasan Mega Kuningan, Kuningan Timur<br />
                      Jakarta Selatan, DKI Jakarta 12950
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <h4 className="font-bold text-lg text-gray-900">Warehouse & Showroom</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Jl. Tekno Boulevard No.5C<br />
                      Tanjungsari, Cikarang Utara<br />
                      Bekasi, Jawa Barat 17530
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-[#2563eb] font-semibold hover:text-[#1d4ed8] transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
