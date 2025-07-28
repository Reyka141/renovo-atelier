import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { UserStore, UserState, API } from '../../types'

// Дефолтное состояние пользователя
export const defaultUserState: UserState = {
    user: {
        data: null,
        loading: 'idle',
        error: null,
    },
    isAuthenticated: false,
}

// Фабрика для создания user store
export const createUserStore = (initState: UserState = defaultUserState) => {
    return createStore<UserStore>()(
        persist(
            (set, get) => ({
                ...initState,

                // Установить пользователя
                setUser: (user: API.User) => set({
                    user: { data: user, loading: 'success', error: null },
                    isAuthenticated: true,
                }),

                // Очистить пользователя
                clearUser: () => set({
                    user: { data: null, loading: 'idle', error: null },
                    isAuthenticated: false,
                }),

                // Обновить профиль (заглушка для будущей реализации)
                updateProfile: async (data: Partial<API.User>) => {
                    set(state => ({
                        user: { ...state.user, loading: 'loading' }
                    }));

                    try {
                        // Здесь будет API вызов
                        const currentUser = get().user.data;
                        if (currentUser) {
                            const updatedUser = { ...currentUser, ...data };
                            set({
                                user: { data: updatedUser, loading: 'success', error: null }
                            });
                        }
                    } catch (error) {
                        set(state => ({
                            user: { ...state.user, loading: 'error', error: 'Ошибка обновления профиля' }
                        }));
                    }
                },
            }),
            {
                name: 'user-storage',
                storage: createJSONStorage(() => localStorage),
            },
        ),
    )
} 