import { createStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AppStore, AppState, Locale, Theme } from '../../types';

// Дефолтное состояние приложения
export const defaultAppState: AppState = {
    locale: 'en',
    theme: 'light',
    isInitialized: false,
};

// Фабрика для создания app store
export const createAppStore = (initState: AppState = defaultAppState) => {
    return createStore<AppStore>()(
        persist(
            (set) => ({
                ...initState,

                // Установить локаль
                setLocale: (locale: Locale) => set({ locale }),

                // Установить тему
                setTheme: (theme: Theme) => set({ theme }),

                // Инициализировать приложение
                initialize: () => set({ isInitialized: true }),
            }),
            {
                name: 'app-storage',
                storage: createJSONStorage(() => localStorage),
            },
        ),
    );
};
