'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vReCltludT9RnNeS64XOJ8shclAb1Ca1GSgjXhJcN6p6yKV6MCpacQCY8s_tisDI_-9pmCOs_NcbawT/pub?output=csv';

interface Product {
  no: number;
  supplier: string;
  kategori: string;
  name: string;
  satuan: string;
  vol1: string;
  vol2: string;
  hargaInc: string | null;
  link: string | null;
}

function exactCol(row: Record<string, string>, exact: string): string {
  const target = exact.toLowerCase();
  for (const k of Object.keys(row)) {
    if (k.toLowerCase() === target) return (row[k] || '').trim();
  }
  return '';
}

function toRupiah(raw: string): string | null {
  const clean = raw.replace(/[^\d]/g, '');
  const num = parseInt(clean, 10);
  if (isNaN(num) || num === 0) return null;
  return 'Rp ' + num.toLocaleString('id-ID');
}

function parseRows(rows: Record<string, string>[]): Product[] {
  return rows
    .filter(row => exactCol(row, 'Nama Produk').length > 1)
    .map((row, i) => {
      const rawPrice = exactCol(row, 'Harga E-Katalog (Inc PPN)');
      const link = exactCol(row, 'Link E-Catalog');
      return {
        no: i + 1,
        supplier: exactCol(row, 'Supplier'),
        kategori: exactCol(row, 'Kategori Supplier'),
        name: exactCol(row, 'Nama Produk'),
        satuan: exactCol(row, 'Satuan'),
        vol1: exactCol(row, 'Volume R1'),
        vol2: exactCol(row, 'Volume R2'),
        hargaInc: rawPrice ? toRupiah(rawPrice) : null,
        link: /^https?:\/\//i.test(link) ? link : null,
      };
    });
}

export function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [suppliers, setSuppliers] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [supplier, setSupplier] = useState('');
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    Papa.parse<Record<string, string>>(CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: (h: string) => h.trim(),
      complete(results) {
        const parsed = parseRows(results.data);
        setProducts(parsed);
        const sup = [...new Set(parsed.map(p => p.supplier).filter(Boolean))].sort();
        setSuppliers(sup);
        setStatus('ok');
      },
      error() { setStatus('error'); },
    });
  }, []);

  const filtered = products.filter(p => {
    const matchName = !search || p.name.toLowerCase().includes(search.toLowerCase());
    const matchSup  = !supplier || p.supplier === supplier;
    return matchName && matchSup;
  });

  const hasVolumes = filtered.some(p => p.vol1 || p.vol2);

  return (
    <div className="min-h-[60vh] bg-slate-50">

      {/* ── Controls bar ── */}
      <div className="sticky top-18 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-50">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Cari nama produk…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/15 focus:bg-white"
            />
          </div>

          <div className="relative">
            <select
              value={supplier}
              onChange={e => setSupplier(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/15 cursor-pointer text-slate-700 min-w-42.5"
            >
              <option value="">Semua Supplier</option>
              {suppliers.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

          {status === 'ok' && (
            <p className="text-sm text-slate-500 ml-auto">
              <strong className="text-[#1e3a8a]">{filtered.length}</strong>
              {filtered.length !== products.length && (
                <> dari <strong className="text-[#1e3a8a]">{products.length}</strong></>
              )} produk
            </p>
          )}
        </div>
      </div>

      {/* ── Loading ── */}
      {status === 'loading' && (
        <div className="flex flex-col items-center justify-center py-36 gap-4 text-slate-500">
          <div className="w-9 h-9 border-[3px] border-blue-100 border-t-[#2563eb] rounded-full animate-spin" />
          <p className="text-sm">Memuat katalog…</p>
        </div>
      )}

      {/* ── Error ── */}
      {status === 'error' && (
        <div className="flex flex-col items-center justify-center py-36 gap-3 text-center px-6">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
            <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p className="font-semibold text-slate-700">Gagal memuat data</p>
          <p className="text-sm text-slate-400 max-w-xs">Pastikan spreadsheet sudah dipublikasikan, lalu refresh halaman.</p>
        </div>
      )}

      {/* ── Table ── */}
      {status === 'ok' && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-28 gap-3 text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="font-semibold text-slate-700">Produk tidak ditemukan</p>
              <p className="text-sm text-slate-400">Coba kata kunci atau filter yang berbeda</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1e3a8a] text-white">
                      <th className="px-4 py-3.5 text-left font-semibold text-xs tracking-wide whitespace-nowrap w-12">#</th>
                      <th className="px-4 py-3.5 text-left font-semibold text-xs tracking-wide whitespace-nowrap">Supplier</th>
                      <th className="px-4 py-3.5 text-left font-semibold text-xs tracking-wide">Nama Produk</th>
                      <th className="px-4 py-3.5 text-left font-semibold text-xs tracking-wide whitespace-nowrap">Satuan</th>
                      {hasVolumes && <>
                        <th className="px-4 py-3.5 text-left font-semibold text-xs tracking-wide whitespace-nowrap">Vol. R1</th>
                        <th className="px-4 py-3.5 text-left font-semibold text-xs tracking-wide whitespace-nowrap">Vol. R2</th>
                      </>}
                      <th className="px-4 py-3.5 text-right font-semibold text-xs tracking-wide whitespace-nowrap">Harga E-Katalog (Inc. PPN)</th>
                      <th className="px-4 py-3.5 text-center font-semibold text-xs tracking-wide whitespace-nowrap">E-Katalog</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map((p, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-blue-50/40' : 'bg-slate-50/60 hover:bg-blue-50/40'} style={{ transition: 'background .1s' }}>
                        <td className="px-4 py-3 text-slate-400 text-xs">{p.no}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="inline-block text-[10px] font-bold tracking-wide uppercase text-[#2563eb] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full max-w-40 truncate">
                            {p.supplier || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-800 font-medium min-w-65 leading-snug">{p.name}</td>
                        <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{p.satuan || '—'}</td>
                        {hasVolumes && <>
                          <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{p.vol1 || '—'}</td>
                          <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{p.vol2 || '—'}</td>
                        </>}
                        <td className="px-4 py-3 text-right whitespace-nowrap font-bold text-[#1e3a8a]">
                          {p.hargaInc ?? <span className="text-slate-400 font-normal text-xs">—</span>}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {p.link ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-xs font-bold px-3 py-1.5 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#142d54] transition-colors whitespace-nowrap"
                            >
                              Lihat ↗
                            </a>
                          ) : (
                            <span className="text-xs text-slate-300">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
