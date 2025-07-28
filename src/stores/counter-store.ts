import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage } from 'zustand/middleware'

// Типы для состояния счетчика
export type CounterState = {
    count: number
}

// Типы для действий счетчика
export type CounterActions = {
    incrementCount: () => void
    decrementCount: () => void
    resetCount: () => void
}

// Объединенный тип store
export type CounterStore = CounterState & CounterActions

// Начальное состояние по умолчанию
export const defaultInitState: CounterState = {
    count: 0,
}

// Фабрика для создания store с persist (важно для Next.js SSR)
export const createCounterStore = (
    initState: CounterState = defaultInitState,
) => {
    return createStore<CounterStore>()(
        persist(
            (set) => ({
                ...initState,
                // Увеличить счетчик на 1
                incrementCount: () => set((state) => ({ count: state.count + 1 })),
                // Уменьшить счетчик на 1
                decrementCount: () => set((state) => ({ count: state.count - 1 })),
                // Сбросить счетчик к 0
                resetCount: () => set({ count: 0 }),
            }),
            {
                name: 'counter-storage', // уникальное имя для localStorage
                storage: createJSONStorage(() => localStorage), // использование localStorage
            },
        ),
    )
} 