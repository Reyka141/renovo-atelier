/**
 * Конфигурационные константы приложения
 */

// Настройки интернационализации
export const I18N_CONFIG = {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    fallbackLocale: 'en',
} as const;

// Настройки localStorage
export const STORAGE_KEYS = {
    counter: 'counter-storage',
    user: 'user-storage',
    app: 'app-storage',
    theme: 'theme-preference',
    locale: 'locale-preference',
} as const;

// Настройки приложения
export const APP_CONFIG = {
    name: 'Renovo Atelier',
    version: '1.0.0',
    description: 'Современное React приложение',
    author: 'Renovo Team',

    // Настройки UI
    defaultTheme: 'light',
    defaultLocale: 'en',

    // Временные настройки
    debounceDelay: 300,
    autoSaveInterval: 5000,

    // Лимиты
    maxFileSize: 5 * 1024 * 1024, // 5MB
    maxTextLength: 1000,
} as const;

// Environment переменные (с fallback)
export const ENV = {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
} as const;

// Сообщения об ошибках
export const ERROR_MESSAGES = {
    generic: 'Произошла ошибка. Попробуйте еще раз.',
    network: 'Ошибка сети. Проверьте подключение к интернету.',
    validation: 'Пожалуйста, проверьте введенные данные.',
    unauthorized: 'Необходима авторизация.',
    forbidden: 'Недостаточно прав доступа.',
    notFound: 'Запрашиваемый ресурс не найден.',
    serverError: 'Ошибка сервера. Попробуйте позже.',
} as const; 