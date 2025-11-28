import { MetadataRoute } from 'next';

// Константа с URL сайта (используется для sitemap и других SEO-настроек)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://renovo-atelier.pl';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/basket/', '/_next/'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
