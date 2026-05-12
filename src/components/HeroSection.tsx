'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { newsItems } from "@/data/news";

const SLIDE_DURATION = 6000;
const PROGRESS_TICK = 60;

const CATEGORY_COLORS: Record<string, string> = {
  Event: "bg-purple-500",
  Kerjasama: "bg-blue-500",
  Training: "bg-emerald-600",
  Pencapaian: "bg-amber-500",
  "Produk Baru": "bg-rose-500",
};

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slideRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressValueRef = useRef(0);
  const total = newsItems.length;

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const stopAll = useCallback(() => {
    if (slideRef.current) clearInterval(slideRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
  }, []);

  const setBarWidth = useCallback((pct: number) => {
    progressValueRef.current = pct;
    if (progressBarRef.current) progressBarRef.current.style.width = `${pct}%`;
  }, []);

  const startTimer = useCallback(() => {
    stopAll();
    setBarWidth(0);

    tickRef.current = setInterval(() => {
      const next = Math.min(
        progressValueRef.current + (PROGRESS_TICK / SLIDE_DURATION) * 100,
        100
      );
      setBarWidth(next);
    }, PROGRESS_TICK);

    slideRef.current = setInterval(() => {
      setBarWidth(0);
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % total);
        setIsTransitioning(false);
      }, 600);
    }, SLIDE_DURATION);
  }, [total, stopAll, setBarWidth]);

  useEffect(() => {
    if (!isPaused) startTimer();
    return stopAll;
  }, [isPaused, startTimer, stopAll]);

  const goTo = useCallback((idx: number) => {
    if (idx === activeIndex || isTransitioning) return;
    stopAll();
    setBarWidth(0);
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setIsTransitioning(false);
    }, 600);
  }, [activeIndex, isTransitioning, stopAll, setBarWidth]);

  const news = newsItems[activeIndex];
  const catColor = CATEGORY_COLORS[news.category] ?? "bg-blue-500";

  return (
    <section
      id="home"
      className="relative h-screen min-h-160 max-h-230 -mt-20 pt-20 flex flex-col overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Sliding Backgrounds ───────────────────────────────── */}
      {newsItems.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Overlays: strong left for legibility, lighter right ── */}
      <div className="absolute inset-0 bg-linear-to-r from-[#03080f]/95 via-[#071428]/80 to-[#0a1a2e]/40 z-1" />
      <div className="absolute inset-0 bg-linear-to-t from-[#03080f]/75 via-transparent to-transparent z-1" />

      {/* ── Main layout ───────────────────────────────────────── */}
      <div className="flex-1 relative z-10 flex items-center">
        <div className="container mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-20 items-center">

            {/* LEFT — Company Content ─────────────────────────── */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Live badge */}
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/15">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-300 text-xs font-bold tracking-widest uppercase">
                  Distributor Resmi Alat Kesehatan
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                Solusi Terdepan<br />
                untuk{" "}
                <span className="relative inline-block">
                  <span className="text-emerald-400">Kesehatan</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400/40 rounded-full" />
                </span>
                <br />Indonesia
              </h1>

              {/* Subline */}
              <p className="text-gray-300/90 text-base md:text-lg max-w-md leading-relaxed mb-9">
                Mitra terpercaya distribusi alat kesehatan berkualitas tinggi
                untuk rumah sakit dan fasilitas medis di seluruh Indonesia.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 text-white rounded-xl font-bold text-sm md:text-base hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-900/40 hover:shadow-emerald-500/40 hover:scale-[1.03]"
                >
                  Lihat Katalog
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-sm md:text-base hover:bg-white/15 hover:border-white/35 transition-all duration-300 backdrop-blur-sm"
                >
                  Konsultasi Gratis
                </Link>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Trading", icon: "💼" },
                  { label: "Distribution", icon: "🚚" },
                  { label: "KSO", icon: "🤝" },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-white/8 border border-white/10 rounded-full backdrop-blur-sm"
                  >
                    <span className="text-sm">{icon}</span>
                    <span className="text-gray-200 text-xs font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Featured News Card (desktop) ──────────── */}
            <div
              className={`hidden lg:flex flex-col gap-4 transition-all duration-1000 delay-200 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Link
                href={`/news/${news.slug}`}
                className={`group block rounded-3xl overflow-hidden border border-white/15 hover:border-white/30 shadow-2xl shadow-black/50 hover:shadow-black/70 transition-all duration-500 ${
                  isTransitioning ? "opacity-0 scale-[0.97]" : "opacity-100 scale-100"
                }`}
              >
                {/* Card image */}
                <div className="relative h-56 overflow-hidden bg-white/5">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="460px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <span className={`px-3 py-1 ${catColor} text-white text-[11px] font-bold tracking-wider uppercase rounded-full`}>
                      {news.category}
                    </span>
                    <span className="text-white/60 text-xs">{news.date}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white/10 backdrop-blur-xl p-5">
                  <h3 className="text-white font-bold text-[15px] leading-snug mb-2.5 line-clamp-2 group-hover:text-emerald-300 transition-colors duration-200">
                    {news.title}
                  </h3>
                  <p className="text-white/55 text-[13px] leading-relaxed line-clamp-2 mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-emerald-400 text-sm font-bold group-hover:gap-2.5 transition-all duration-200">
                      Baca Selengkapnya
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-white/30 text-xs">{activeIndex + 1} / {total}</span>
                  </div>
                </div>
              </Link>

              {/* Slide dots */}
              <div className="flex items-center justify-center gap-2">
                {newsItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeIndex
                        ? "w-7 h-2 bg-emerald-400"
                        : "w-2 h-2 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile news strip ─────────────────────────────────── */}
      <div className="lg:hidden relative z-10 px-4 pb-5">
        <Link
          href={`/news/${news.slug}`}
          className={`group flex items-center gap-3 bg-black/40 backdrop-blur-lg border border-white/15 rounded-2xl p-3 hover:bg-black/55 transition-all duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        >
          <div className="relative w-13 h-13 rounded-xl overflow-hidden shrink-0 bg-white/10">
            <Image src={news.image} alt={news.title} fill className="object-cover" sizes="52px" />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`inline-block px-2 py-0.5 ${catColor} text-white text-[10px] font-bold uppercase rounded-full mb-1`}>
              {news.category}
            </span>
            <p className="text-white text-xs font-semibold line-clamp-1 leading-snug">{news.title}</p>
            <span className="text-emerald-400 text-[11px] font-bold flex items-center gap-1 mt-0.5">
              Baca Selengkapnya
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <span className="text-white/30 text-xs shrink-0">{activeIndex + 1}/{total}</span>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-3">
          {newsItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex ? "w-6 h-1.5 bg-emerald-400" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Progress bar (DOM-driven, no React state) ─────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-white/10 z-20">
        <div ref={progressBarRef} className="h-full bg-emerald-400" style={{ width: "0%" }} />
      </div>

      {/* ── Scroll cue ────────────────────────────────────────── */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
