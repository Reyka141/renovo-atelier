import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Сопоставляем все пути кроме:
    // - API маршрутов (/api)
    // - статических файлов (_next)
    // - файлов с расширениями (.ico, .png, etc.)
    matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
}; 