'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { newsItems } from '@/data/news';

export function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = newsItems.length;

  const clearTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startTimer = useCallback(() => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % total);
        setIsAnimating(false);
      }, 300);
    }, 4500);
  }, [total]);

  useEffect(() => {
    if (!isPaused) startTimer();
    return clearTimer;
  }, [isPaused, startTimer]);

  const goTo = (idx: number) => {
    if (idx === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setIsAnimating(false);
    }, 200);
    clearTimer();
    if (!isPaused) startTimer();
  };

  const prev = () => goTo((activeIndex - 1 + total) % total);
  const next = () => goTo((activeIndex + 1) % total);

  const getVisible = () => [0, 1, 2].map((i) => (activeIndex + i) % total);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2563eb]/10 rounded-full border border-[#2563eb]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#2563eb]">Berita & Aktivitas</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Kabar Terbaru Kami
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Perkembangan terkini kegiatan dan pencapaian PT Lapan Alpha Kirana
            </p>
          </div>
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-[#2563eb] text-[#2563eb] font-semibold text-sm rounded-lg hover:bg-[#2563eb] hover:text-white transition-all duration-300 shrink-0"
          >
            Lihat Semua Berita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            {getVisible().map((itemIdx, colIdx) => {
              const item = newsItems[itemIdx];
              return (
                <Link
                  key={`${itemIdx}-${colIdx}`}
                  href={`/news/${item.slug}`}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col
                    ${colIdx === 2 ? 'hidden lg:flex' : colIdx === 1 ? 'hidden md:flex' : 'flex'}`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-[#eef2ff] to-[#dbeafe]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs text-gray-400 mb-2.5 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </p>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-[#2563eb] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
                      {item.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[#2563eb] font-semibold text-xs">
                      Baca Selengkapnya
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Nav Arrows */}
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#2563eb] hover:border-[#2563eb]/40 hover:shadow-lg transition-all duration-200 z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#2563eb] hover:border-[#2563eb]/40 hover:shadow-lg transition-all duration-200 z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots + Mobile CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-7">
          <div className="flex items-center gap-2">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? 'w-6 h-2 bg-[#2563eb]'
                    : 'w-2 h-2 bg-gray-200 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <Link
            href="/news"
            className="md:hidden inline-flex items-center gap-2 px-5 py-2.5 border border-[#2563eb] text-[#2563eb] font-semibold text-sm rounded-lg hover:bg-[#2563eb] hover:text-white transition-all duration-300"
          >
            Lihat Semua Berita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
