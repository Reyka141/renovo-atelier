/**
 * Типы для store/состояния приложения
 */

import { AsyncState, Locale, Theme } from './common';

// Состояние счетчика
export interface CounterState {
    count: number;
}

export interface CounterActions {
    incrementCount: () => void;
    decrementCount: () => void;
    resetCount: () => void;
    setCount: (count: number) => void;
}

export interface CounterStore extends CounterState, CounterActions {}

// Состояние пользователя
export interface UserState {
    order: AsyncState<Order>;
    isAuthenticated: boolean;
}

export interface Order {
    id: string;
}

export interface UserActions {
    setOrder: (order: Order) => void;
    updateOrder: (order: Order) => void;
    deleteOrder: (orderId: string) => void;
    deleteAllOrders: () => void;
    getAllOrders: () => Order[];
}

export interface UserStore extends UserState, UserActions {}

// Состояние приложения
export interface AppState {
    locale: Locale;
    theme: Theme;
    isInitialized: boolean;
}

export interface AppActions {
    setLocale: (locale: Locale) => void;
    setTheme: (theme: Theme) => void;
    initialize: () => void;
}

export interface AppStore extends AppState, AppActions {}

// Состояние корзины
export interface BasketItem {
    id: string;
    title: string;
    price: string;
    image: string; // путь к изображению
}

export interface BasketState {
    items: BasketItem[];
}

export interface BasketActions {
    addItem: (item: BasketItem) => void;
    removeItem: (itemId: string) => void;
    clearBasket: () => void;
    isItemInBasket: (itemId: string) => boolean;
}

export interface BasketStore extends BasketState, BasketActions {}

// Общий тип для всех stores
export interface RootStore {
    counter: CounterStore;
    user: UserStore;
    app: AppStore;
    basket: BasketStore;
}
