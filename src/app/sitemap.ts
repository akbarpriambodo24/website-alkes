import { MetadataRoute } from 'next';
import { newsItems } from '@/data/news';

const BASE = 'https://www.alphakirana.co.id';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '',                        priority: 1.0, freq: 'weekly'  },
    { path: '/products',               priority: 0.9, freq: 'weekly'  },
    { path: '/services',               priority: 0.9, freq: 'monthly' },
    { path: '/services/kso',           priority: 0.8, freq: 'monthly' },
    { path: '/services/pengadaan-rutin', priority: 0.8, freq: 'monthly' },
    { path: '/services/aftersales',    priority: 0.8, freq: 'monthly' },
    { path: '/news',                   priority: 0.8, freq: 'weekly'  },
    { path: '/company-profile',        priority: 0.7, freq: 'monthly' },
    { path: '/team',                   priority: 0.6, freq: 'monthly' },
    { path: '/contact',                priority: 0.7, freq: 'monthly' },
  ];

  const newsRoutes: MetadataRoute.Sitemap = newsItems.map((item) => ({
    url: `${BASE}/news/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map(({ path, priority, freq }) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
    })),
    ...newsRoutes,
  ];
}
