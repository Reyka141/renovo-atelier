'use client';

import { ReactNode } from 'react';
import { CounterStoreProvider } from './counter-store-provider';
import { BasketStoreProvider } from './basket-store-provider';
import { ToastContainer } from 'react-toastify';

interface AppProviderProps {
    children: ReactNode;
}

/**
 * Главный провайдер приложения - объединяет все store провайдеры
 */
export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <CounterStoreProvider>
            <BasketStoreProvider>
                {/* Здесь можно добавить другие провайдеры */}
                {/* <UserStoreProvider> */}
                {/* <ThemeProvider> */}
                {children}
                {/* </ThemeProvider> */}
                {/* </UserStoreProvider> */}
                <ToastContainer position="bottom-right" />
            </BasketStoreProvider>
        </CounterStoreProvider>
    );
};
