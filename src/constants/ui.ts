/**
 * UI константы и конфигурация
 */

// Breakpoints для адаптивности
export const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1025,
} as const;

// Z-index уровни
export const Z_INDEX = {
    base: 1,
    dropdown: 10,
    modal: 100,
    popover: 200,
    tooltip: 300,
    toast: 400,
    overlay: 500,
} as const;

// Длительности анимаций (в миллисекундах)
export const ANIMATION_DURATION = {
    fast: 150,
    normal: 300,
    slow: 500,
} as const;

// Размеры компонентов
export const COMPONENT_SIZES = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
} as const;

// Варианты компонентов
export const COMPONENT_VARIANTS = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
} as const;

// Темы
export const THEMES = {
    light: 'light',
    dark: 'dark',
} as const;

// Цвета (соответствуют Tailwind)
export const COLORS = {
    primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
    },
    success: {
        500: '#10b981',
        600: '#059669',
    },
    danger: {
        500: '#ef4444',
        600: '#dc2626',
    },
    warning: {
        500: '#f59e0b',
        600: '#d97706',
    },
} as const;
