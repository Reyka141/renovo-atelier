import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    // Получаем запрашиваемую локаль (соответствует сегменту [locale])
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    return {
        locale,
        // Динамически загружаем переводы для текущей локали
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
