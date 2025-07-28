/**
 * Вспомогательные утилиты
 */

// Debounce функция
export const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Throttle функция
export const throttle = <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;

    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Генерация случайного ID
export const generateId = (length: number = 8): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

// Глубокое клонирование объекта
export const deepClone = <T>(obj: T): T => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime()) as T;
    if (obj instanceof Array) return obj.map(item => deepClone(item)) as T;
    if (typeof obj === 'object') {
        const cloned = {} as T;
        Object.keys(obj).forEach(key => {
            (cloned as Record<string, unknown>)[key] = deepClone((obj as Record<string, unknown>)[key]);
        });
        return cloned;
    }
    return obj;
};

// Задержка (Promise)
export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Получить значение из объекта по пути
export const getObjectValue = (obj: Record<string, unknown>, path: string, defaultValue?: unknown): unknown => {
    const keys = path.split('.');
    let result: unknown = obj;

    for (const key of keys) {
        if (result && typeof result === 'object' && result !== null && key in result) {
            result = (result as Record<string, unknown>)[key];
        } else {
            return defaultValue;
        }
    }

    return result;
};

// Проверка типа устройства
export const isMobile = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
};

export const isTablet = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktop = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth > 1024;
}; 