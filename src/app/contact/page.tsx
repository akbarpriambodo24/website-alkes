'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'pertanyaan',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const subject = encodeURIComponent(`[${formData.type.toUpperCase()}] ${formData.subject}`);
      const body = encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nJenis: ${formData.type}\n\nPesan:\n${formData.message}`
      );
      window.location.href = `mailto:info@lapanak.co.id?subject=${subject}&body=${body}`;
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', type: 'pertanyaan' });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition-all duration-200 text-sm';

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Hubungi Kami"
        subtitle="Sampaikan pertanyaan, saran, atau pengaduan — tim kami akan merespons dalam 1×24 jam kerja"
        badge="Kontak"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12">

            {/* Form ───────────────────────────────────────────── */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#2563eb] mb-5">
                Form Pengaduan
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Kirimkan Pesan Anda
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-emerald-800 text-sm font-medium">
                    Email client Anda akan terbuka. Terima kasih telah menghubungi kami.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    Terjadi kesalahan. Silakan hubungi kami langsung via WhatsApp.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nama lengkap Anda"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Jenis Pesan <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="pertanyaan">Pertanyaan</option>
                      <option value="pengaduan">Pengaduan</option>
                      <option value="saran">Saran</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="nama@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nomor Telepon{' '}
                      <span className="text-slate-400 font-normal">(opsional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xx-xxxx-xxxx"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subjek <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Ringkasan singkat pesan Anda"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Jelaskan detail pertanyaan atau pengaduan Anda..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563eb] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-[#1d4ed8] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>

            {/* Info ───────────────────────────────────────────── */}
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-widest uppercase text-[#2563eb] mb-5">
                Informasi Kontak
              </p>

              {/* Contact details */}
              <div className="bg-[#0f172a] rounded-2xl p-8 space-y-7">
                {[
                  {
                    label: "Email",
                    value: "info@lapanak.co.id",
                    href: "mailto:info@lapanak.co.id",
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  },
                  {
                    label: "Telepon",
                    value: "(021) 21689279",
                    href: "tel:+62212689279",
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  },
                  {
                    label: "WhatsApp",
                    value: "0821-1439-1159",
                    href: "https://wa.me/6282114391159",
                    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white text-sm font-medium hover:text-[#60a5fa] transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="border-t border-white/10 pt-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Jam Operasional
                    </p>
                    <p className="text-white text-sm font-medium">Senin – Jumat</p>
                    <p className="text-slate-400 text-sm">08.00 – 17.00 WIB</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Kantor Pusat
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Jakarta, Indonesia
                </p>
                <p className="text-slate-500 text-xs mt-2">
                  Melayani seluruh wilayah Indonesia
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-[#2563eb] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali ke Beranda
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
