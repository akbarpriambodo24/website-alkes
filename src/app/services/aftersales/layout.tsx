import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Aftersales',
  description: 'Layanan aftersales terpercaya untuk alat kesehatan. Perbaikan, maintenance rutin, dan kalibrasi.',
  alternates: {
    canonical: '/services/aftersales',
  },
};

export default function AftersalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
