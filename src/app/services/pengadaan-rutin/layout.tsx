import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pengadaan Rutin',
  description: 'Layanan pengadaan alat kesehatan secara rutin dan berkala dengan sistem terotomasi.',
  alternates: {
    canonical: '/services/pengadaan-rutin',
  },
};

export default function PengadaanRutinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
