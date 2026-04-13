// app/layout.tsx

import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alphakirana.co.id'),
  title: {
    default: 'PT Lapan Alpha Kirana',
    template: '%s | PT Lapan Alpha Kirana'
  },
  description: 'Distributor alat kesehatan terpercaya di Indonesia, melidungi rumah sakit, klinik, dan laboratorium.',
  keywords: ['alat kesehatan', 'distributor alkes', 'alat medis', 'jual alat kesehatan indonesia', 'PT Lapan Alpha Kirana'],
  openGraph: {
    title: 'PT Lapan Alpha Kirana',
    description: 'Distributor alat kesehatan terpercaya di Indonesia.',
    url: 'https://alphakirana.co.id',
    siteName: 'PT Lapan Alpha Kirana',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <Header />
        
        {/* Padding top 20 (80px) supaya konten tidak tertutup Header fixed */}
        {/* flex-grow membuat konten mengisi ruang tengah */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}