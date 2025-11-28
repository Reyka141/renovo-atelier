'use client';

import { ReactNode } from 'react';
import { CounterStoreProvider } from './counter-store-provider';
import { BasketStoreProvider } from './basket-store-provider';
import { ToastContainer } from 'react-toastify';
import { EmailJsProvider } from './email-js-provider';
import { Analytics } from '@vercel/analytics/next';

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
                <EmailJsProvider>
                    {/* Здесь можно добавить другие провайдеры */}
                    {/* <UserStoreProvider> */}
                    {/* <ThemeProvider> */}
                    {children}
                    {/* </ThemeProvider> */}
                    {/* </UserStoreProvider> */}
                </EmailJsProvider>
                <ToastContainer position="bottom-right" />
                <Analytics />
            </BasketStoreProvider>
        </CounterStoreProvider>
    );
};
