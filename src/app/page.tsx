// app/page.tsx

import { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { PartnersSection } from '@/components/PartnersSection';
import { NewsSection } from '@/components/NewsSection';

export const metadata: Metadata = {
  title: 'Beranda | PT Lapan Alpha Kirana',
  description: 'Distributor alat kesehatan terpercaya di Indonesia.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <ProductsSection />
      <ServicesSection />
      <AdvantagesSection />
      <PartnersSection />

      {/* Footer sudah otomatis muncul dari layout.tsx */}
    </>
  );
}