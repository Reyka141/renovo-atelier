import { routing } from '@/i18n/routing';
import { MetadataRoute } from 'next';
import { SITE_URL } from './robots';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = routing.locales;

    // Основные страницы сайта
    const routes = ['', '/basket', '/success-send'];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Генерируем записи для каждой локали и маршрута
    for (const route of routes) {
        for (const locale of locales) {
            sitemapEntries.push({
                url: `${SITE_URL}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1.0 : 0.5,
                alternates: {
                    languages: Object.fromEntries(locales.map((loc) => [loc, `${SITE_URL}/${loc}${route}`])),
                },
            });
        }
    }

    return sitemapEntries;
}
