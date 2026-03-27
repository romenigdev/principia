import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/portfolio', '/blog'],
    },
    sitemap: 'https://www.biroprincipia.com.br/sitemap.xml',
  };
}
