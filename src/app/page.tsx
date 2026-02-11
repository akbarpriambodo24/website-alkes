// app/page.tsx

import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { PartnersSection } from '@/components/PartnersSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <AdvantagesSection />
      <PartnersSection />

      {/* Footer sudah otomatis muncul dari layout.tsx */}
    </>
  );
}