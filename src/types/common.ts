/**
 * Общие типы для всего приложения
 */

// Базовые типы
export type ID = string | number;

export interface BaseEntity {
    id: ID;
    createdAt?: Date;
    updatedAt?: Date;
}

// Состояния загрузки
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T = unknown> {
    data: T | null;
    loading: LoadingState;
    error: string | null;
}

// Размеры компонентов
export type ComponentSize = 'sm' | 'md' | 'lg';

// Варианты компонентов
export type ComponentVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';

// Локали
export type Locale = 'en' | 'ru';

// Цветовые темы
export type Theme = 'light' | 'dark';

// Пагинация
export interface PaginationParams {
    page: number;
    limit: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
