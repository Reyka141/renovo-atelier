"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
    type CounterStore,
    createCounterStore,
    defaultInitState,
} from "@/stores/counter-store";

// Тип для API store
export type CounterStoreApi = ReturnType<typeof createCounterStore>;

// React Context для store
export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
    undefined
);

// Пропсы для Provider
export interface CounterStoreProviderProps {
    children: ReactNode;
}

// Provider компонент
export const CounterStoreProvider = ({
    children,
}: CounterStoreProviderProps) => {
    const storeRef = useRef<CounterStoreApi | null>(null);

    // Создаем store только один раз для предотвращения ре-рендеров
    if (storeRef.current === null) {
        storeRef.current = createCounterStore(defaultInitState);
    }

    return (
        <CounterStoreContext.Provider value={storeRef.current}>
            {children}
        </CounterStoreContext.Provider>
    );
};

// Хук для использования store с селектором
export const useCounterStore = <T,>(
    selector: (store: CounterStore) => T
): T => {
    const counterStoreContext = useContext(CounterStoreContext);

    if (!counterStoreContext) {
        throw new Error(
            `useCounterStore должен использоваться внутри CounterStoreProvider`
        );
    }

    return useStore(counterStoreContext, selector);
};
