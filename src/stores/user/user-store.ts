import { createStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserStore, UserState, Order } from '../../types';

// Дефолтное состояние пользователя
export const defaultUserState: UserState = {
    order: {
        data: null,
        loading: 'idle',
        error: null,
    },
    isAuthenticated: false,
};

// Фабрика для создания user store
export const createUserStore = (initState: UserState = defaultUserState) => {
    return createStore<UserStore>()(
        persist(
            (set, get) => ({
                ...initState,
                setOrder: (order: Order) =>
                    set({
                        order: { data: order, loading: 'success', error: null },
                        isAuthenticated: true,
                    }),
                updateOrder: (order: Order) =>
                    set({
                        order: { data: order, loading: 'success', error: null },
                        isAuthenticated: true,
                    }),
                deleteOrder: (orderId: string) => {
                    const currentOrder = get().order.data;
                    if (currentOrder?.id === orderId) {
                        set({ order: { data: null, loading: 'idle', error: null } });
                    }
                },
                deleteAllOrders: () =>
                    set({
                        order: { data: null, loading: 'idle', error: null },
                    }),
                getAllOrders: () => {
                    const orderData = get().order.data;
                    return orderData ? [orderData] : [];
                },

                // Обновить профиль (заглушка для будущей реализации)
            }),
            {
                name: 'user-storage',
                storage: createJSONStorage(() => localStorage),
            },
        ),
    );
};
