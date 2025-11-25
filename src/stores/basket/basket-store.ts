import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import type { BasketItem, BasketState, BasketStore } from '../../types';

// Начальное состояние по умолчанию
export const defaultBasketState: BasketState = {
    items: [],
};

// Безопасный storage wrapper для Next.js SSR
// Предотвращает ошибки гидратации, проверяя наличие window
const safeStorage: StateStorage = {
    getItem: (name: string): string | null => {
        if (typeof window === 'undefined') {
            return null;
        }
        return localStorage.getItem(name);
    },
    setItem: (name: string, value: string): void => {
        if (typeof window === 'undefined') {
            return;
        }
        localStorage.setItem(name, value);
    },
    removeItem: (name: string): void => {
        if (typeof window === 'undefined') {
            return;
        }
        localStorage.removeItem(name);
    },
};

// Фабрика для создания basket store с persist (важно для Next.js SSR)
export const createBasketStore = (initState: BasketState = defaultBasketState) => {
    return createStore<BasketStore>()(
        persist(
            (set, get) => ({
                ...initState,
                // Добавить товар в корзину (только если его еще нет)
                addItem: (item: BasketItem) =>
                    set((state) => {
                        const exists = state.items.some((i) => i.id === item.id);
                        if (exists) {
                            return state; // Не добавляем дубликаты
                        }
                        return { items: [...state.items, item] };
                    }),
                // Удалить товар из корзины по id
                removeItem: (itemId: string) =>
                    set((state) => ({
                        items: state.items.filter((item) => item.id !== itemId),
                    })),
                // Очистить всю корзину
                clearBasket: () => set({ items: [] }),
                // Проверить, есть ли товар в корзине
                isItemInBasket: (itemId: string) => {
                    return get().items.some((item) => item.id === itemId);
                },
            }),
            {
                name: 'basket-storage', // уникальное имя для localStorage
                storage: createJSONStorage(() => safeStorage), // использование безопасного storage
                skipHydration: true, // пропускаем гидратацию для предотвращения ошибок
            },
        ),
    );
};
