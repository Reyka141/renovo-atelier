"use client";

import { useStore } from "@/hooks";
import { useCounterStore } from "@/providers/counter-store-provider";
import { CounterStore } from "@/types";

export const Counter = () => {
    // Используем кастомный хук для корректной работы с persist в Next.js
    const storeData = useStore(useCounterStore, (state) => state) as
        | CounterStore
        | undefined;

    // Показываем загрузку пока данные не загрузились (предотвращение ошибок гидратации)
    if (!storeData) {
        return (
            <div className="flex flex-col items-center space-y-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    Загрузка счетчика...
                </div>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const { count, incrementCount, decrementCount, resetCount } = storeData!;

    return (
        <div className="flex flex-col items-center space-y-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Счетчик с Zustand
            </h2>

            {/* Отображение текущего значения счетчика */}
            <div className="text-6xl font-mono font-bold text-blue-600 dark:text-blue-400">
                {count}
            </div>

            {/* Кнопки управления */}
            <div className="flex space-x-4">
                <button
                    onClick={decrementCount}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    -
                </button>

                <button
                    onClick={resetCount}
                    className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    Сброс
                </button>

                <button
                    onClick={incrementCount}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    +
                </button>
            </div>

            {/* Дополнительная информация */}
            <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
                <p>Состояние управляется через Zustand с persist</p>
                <p className="text-xs mt-1 mb-2">
                    🔒 Значение автоматически сохраняется в localStorage
                </p>
                <p className="text-xs">
                    {count === 0 && "Счетчик в начальном положении"}
                    {count > 0 && `Положительное значение: +${count}`}
                    {count < 0 && `Отрицательное значение: ${count}`}
                </p>
            </div>
        </div>
    );
};
