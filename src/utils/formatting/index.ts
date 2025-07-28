/**
 * Утилиты для форматирования данных
 */

// Форматирование чисел
export const formatNumber = (num: number, locale: string = 'ru-RU'): string => {
    return new Intl.NumberFormat(locale).format(num);
};

// Форматирование валюты
export const formatCurrency = (
    amount: number, 
    currency: string = 'RUB', 
    locale: string = 'ru-RU'
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
};

// Форматирование дат
export const formatDate = (
    date: Date | string,
    options: Intl.DateTimeFormatOptions = {},
    locale: string = 'ru-RU'
): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options,
    }).format(dateObj);
};

// Форматирование относительного времени
export const formatRelativeTime = (
    date: Date | string,
    locale: string = 'ru-RU'
): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diff = now.getTime() - dateObj.getTime();
    
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return rtf.format(-days, 'day');
    if (hours > 0) return rtf.format(-hours, 'hour');
    if (minutes > 0) return rtf.format(-minutes, 'minute');
    return rtf.format(-seconds, 'second');
};

// Truncate текст
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}; 