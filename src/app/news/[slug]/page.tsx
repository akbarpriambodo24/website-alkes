import { notFound } from 'next/navigation';
import Link from 'next/link';
import { newsItems } from '@/data/news';
import { Header } from '@/components/Header';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | PT Lapan Alpha Kirana`,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  const related = newsItems.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden bg-gradient-to-br from-[#ecf0ff] to-[#d9dffe]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full mb-3">
              {item.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {item.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#2563eb] transition-colors">Beranda</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/news" className="hover:text-[#2563eb] transition-colors">Berita</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium line-clamp-1">{item.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {item.date}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            PT Lapan Alpha Kirana
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light border-l-4 border-[#2563eb] pl-5">
          {item.excerpt}
        </p>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          {item.content.trim().split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-3 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Semua Berita
          </Link>
        </div>
      </div>

      {/* Related News */}
      {related.length > 0 && (
        <div className="bg-gray-50 py-14">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-8">Berita Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="h-36 overflow-hidden bg-gradient-to-br from-[#ecf0ff] to-[#d9dffe]">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#2563eb] font-semibold">{rel.category}</span>
                    <h3 className="text-sm font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-[#2563eb] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">{rel.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
