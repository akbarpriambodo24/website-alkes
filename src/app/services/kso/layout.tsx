import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KSO (Kerjasama Operasional)',
  description: 'Program Kerjasama Operasional (KSO) alat kesehatan untuk rumah sakit dan klinik dengan sistem fleksibel.',
  alternates: {
    canonical: '/services/kso',
  },
};

export default function KSOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
