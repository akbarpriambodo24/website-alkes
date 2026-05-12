import Link from 'next/link';
import { Metadata } from 'next';
import { newsItems } from '@/data/news';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Berita & Aktivitas | PT Lapan Alpha Kirana',
  description: 'Ikuti perkembangan terkini kegiatan, pencapaian, dan inovasi PT Lapan Alpha Kirana.',
};

export default function NewsPage() {
  const [featured, ...rest] = newsItems;

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Berita & Aktivitas"
        subtitle="Ikuti perkembangan terkini kegiatan, pencapaian, dan inovasi PT Lapan Alpha Kirana"
        badge="NEWS"
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Featured Article */}
        <Link
          href={`/news/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 mb-14"
        >
          <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-[#ecf0ff] to-[#d9dffe]">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full">
                {featured.category}
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {featured.date}
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#2563eb] transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm mb-6 line-clamp-4">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-[#2563eb] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
              Selengkapnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>

        {/* Grid Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#ecf0ff] to-[#d9dffe]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-[#2563eb] transition-colors flex-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#2563eb] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Selengkapnya
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
