import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Profil Perusahaan PT Lapan Alpha Kirana. Kami adalah distributor alat kesehatan terpercaya di Indonesia.',
  alternates: {
    canonical: '/company-profile',
  },
};

export default function CompanyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
