'use client';

import { type ReactNode, createContext, useContext, useEffect, useRef } from 'react';
import { useStore } from 'zustand';

import { type BasketStore, createBasketStore, defaultBasketState } from '../stores';

// Тип для API store
export type BasketStoreApi = ReturnType<typeof createBasketStore>;

// React Context для store
export const BasketStoreContext = createContext<BasketStoreApi | undefined>(undefined);

// Пропсы для Provider
export interface BasketStoreProviderProps {
    children: ReactNode;
}

// Provider компонент
export const BasketStoreProvider = ({ children }: BasketStoreProviderProps) => {
    const storeRef = useRef<BasketStoreApi | null>(null);

    // Создаем store только один раз для предотвращения ре-рендеров
    if (storeRef.current === null) {
        storeRef.current = createBasketStore(defaultBasketState);
    }

    // Инициализируем гидратацию после монтирования на клиенте
    useEffect(() => {
        const { persist } = storeRef.current!;
        if (persist) {
            persist.rehydrate();
        }
    }, []);

    return <BasketStoreContext.Provider value={storeRef.current}>{children}</BasketStoreContext.Provider>;
};

// Хук для использования store с селектором
export const useBasketStore = <T,>(selector: (store: BasketStore) => T): T => {
    const basketStoreContext = useContext(BasketStoreContext);

    if (!basketStoreContext) {
        throw new Error(`useBasketStore должен использоваться внутри BasketStoreProvider`);
    }

    return useStore(basketStoreContext, selector);
};
