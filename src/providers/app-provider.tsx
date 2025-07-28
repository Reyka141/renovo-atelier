'use client';

import { ReactNode } from 'react';
import { CounterStoreProvider } from './counter-store-provider';

interface AppProviderProps {
    children: ReactNode;
}

/**
 * Главный провайдер приложения - объединяет все store провайдеры
 */
export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <CounterStoreProvider>
            {/* Здесь можно добавить другие провайдеры */}
            {/* <UserStoreProvider> */}
            {/* <ThemeProvider> */}
            {children}
            {/* </ThemeProvider> */}
            {/* </UserStoreProvider> */}
        </CounterStoreProvider>
    );
};
