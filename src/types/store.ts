/**
 * Типы для store/состояния приложения
 */

import { AsyncState, Locale, Theme } from './common';
import { API } from './api';

// Состояние счетчика
export interface CounterState {
    count: number;
}

export interface CounterActions {
    incrementCount: () => void;
    decrementCount: () => void;
    resetCount: () => void;
    setCount: (count: number) => void;
}

export interface CounterStore extends CounterState, CounterActions { }

// Состояние пользователя
export interface UserState {
    user: AsyncState<API.User>;
    isAuthenticated: boolean;
}

export interface UserActions {
    setUser: (user: API.User) => void;
    clearUser: () => void;
    updateProfile: (data: Partial<API.User>) => Promise<void>;
}

export interface UserStore extends UserState, UserActions { }

// Состояние приложения
export interface AppState {
    locale: Locale;
    theme: Theme;
    isInitialized: boolean;
}

export interface AppActions {
    setLocale: (locale: Locale) => void;
    setTheme: (theme: Theme) => void;
    initialize: () => void;
}

export interface AppStore extends AppState, AppActions { }

// Общий тип для всех stores
export interface RootStore {
    counter: CounterStore;
    user: UserStore;
    app: AppStore;
} 