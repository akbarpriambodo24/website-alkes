import { PageHeader } from '@/components/PageHeader';
import { ProductCatalog } from '@/components/ProductCatalog';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Katalog Produk"
        subtitle="Cari dan temukan alat kesehatan yang kami distribusikan — lengkap dengan harga e-katalog resmi."
        badge="E-Katalog"
      />
      <ProductCatalog />
    </div>
  );
}

export const metadata = {
  title: 'Katalog Produk',
  description: 'Katalog alat kesehatan PT Lapan Alpha Kirana lengkap dengan harga e-katalog resmi.',
  alternates: {
    canonical: '/products',
  },
};
