// app/products/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/prisma';
import { PageHero } from '@/components/PageHero';

async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero
        title="Katalog Produk"
        subtitle="Peralatan medis berkualitas tinggi, bersertifikat, dan terjamin untuk rumah sakit, klinik, dan laboratorium di seluruh Indonesia"
        badge="PRODUK BERKUALITAS"
        backgroundImage="/Mikroskop kompress.webp"
      />

      {/* List Produk */}
      <div className="container mx-auto px-6 py-12">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">Belum ada produk tersedia.</p>
            <p className="text-gray-500 mt-4">Tambahkan produk dulu di database ya!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="block group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Gambar */}
                  <div className="h-64 w-full overflow-hidden bg-gray-200 relative">
                    <Image
                      src={product.image || '/placeholder.jpg'}
                      alt={product.name || 'Produk'}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Detail */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2563eb] transition">
                      {product.name || 'Tanpa Nama'}
                    </h3>

                    <p className="text-sm text-[#2563eb] font-medium mb-3">
                      {product.category || ''}
                    </p>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {product.description || 'Tanpa deskripsi'}
                    </p>

                    <p className="text-2xl font-bold text-[#2563eb]">
                      Rp {product.price || '0'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Katalog Produk - PT Lapan Alpha Kirana',
  description: 'Lihat semua produk berkualitas kami.',
};