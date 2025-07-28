/**
 * Типы для работы с API
 */

import { AsyncState, PaginatedResponse } from './common';

// Базовые типы ответов API
export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
}

export interface ApiError {
    code: string;
    message: string;
    details?: any;
}

// HTTP методы
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// Конфигурация запроса
export interface RequestConfig {
    method: HttpMethod;
    headers?: Record<string, string>;
    body?: any;
    params?: Record<string, any>;
}

// Типы для разных API endpoints
export namespace API {
    // User API
    export interface User {
        id: string;
        email: string;
        name: string;
        avatar?: string;
        locale: string;
        theme: string;
    }

    // Auth API
    export interface LoginRequest {
        email: string;
        password: string;
    }

    export interface LoginResponse {
        user: User;
        token: string;
        refreshToken: string;
    }

    // Counter API (если будет нужен в будущем)
    export interface CounterData {
        value: number;
        lastUpdated: Date;
    }
} 