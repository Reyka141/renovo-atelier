/**
 * Константы маршрутов приложения
 */

export const ROUTES = {
    // Основные страницы
    HOME: '/',

    // Добавьте здесь другие маршруты по мере роста приложения
    // ABOUT: '/about',
    // CONTACT: '/contact',
    // PROFILE: '/profile',
    // SETTINGS: '/settings',
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = typeof ROUTES[RouteKeys]; 