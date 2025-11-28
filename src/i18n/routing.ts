import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // Список всех поддерживаемых локалей
    locales: ['en', 'ru', 'pl', 'uk'],

    // Локаль по умолчанию, используется когда язык не соответствует
    defaultLocale: 'en',
});
