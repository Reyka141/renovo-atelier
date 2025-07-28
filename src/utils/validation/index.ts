/**
 * Утилиты для валидации данных
 */

// Валидация email
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Валидация российского телефона
export const isValidPhoneRU = (phone: string): boolean => {
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Валидация URL
export const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

// Валидация пароля (минимум 8 символов, буквы и цифры)
export const isValidPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
};

// Проверка на пустоту
export const isEmpty = (value: any): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
};

// Валидация диапазона чисел
export const isInRange = (value: number, min: number, max: number): boolean => {
    return value >= min && value <= max;
};

// Валидация длины строки
export const isValidLength = (str: string, min: number, max?: number): boolean => {
    const length = str.length;
    if (max === undefined) return length >= min;
    return length >= min && length <= max;
}; 