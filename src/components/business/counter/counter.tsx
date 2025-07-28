'use client';

import { useStore } from '@/hooks';
import { useCounterStore } from '@/providers/counter-store-provider';
import { CounterStore } from '@/types';

export const Counter = () => {
    // Используем кастомный хук для корректной работы с persist в Next.js
    const storeData = useStore(useCounterStore, (state) => state) as CounterStore | undefined;

    // Показываем загрузку пока данные не загрузились (предотвращение ошибок гидратации)
    if (!storeData) {
        return (
            <div className="mx-auto flex max-w-md flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">Загрузка счетчика...</div>
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const { count, incrementCount, decrementCount, resetCount } = storeData!;

    return (
        <div className="mx-auto flex max-w-md flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Счетчик с Zustand</h2>

            {/* Отображение текущего значения счетчика */}
            <div className="font-mono text-6xl font-bold text-blue-600 dark:text-blue-400">{count}</div>

            {/* Кнопки управления */}
            <div className="flex space-x-4">
                <button
                    onClick={decrementCount}
                    className="rounded-lg bg-red-500 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-red-600 hover:shadow-lg"
                >
                    -
                </button>

                <button
                    onClick={resetCount}
                    className="rounded-lg bg-gray-500 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-gray-600 hover:shadow-lg"
                >
                    Сброс
                </button>

                <button
                    onClick={incrementCount}
                    className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-green-600 hover:shadow-lg"
                >
                    +
                </button>
            </div>

            {/* Дополнительная информация */}
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                <p>Состояние управляется через Zustand с persist</p>
                <p className="mt-1 mb-2 text-xs">🔒 Значение автоматически сохраняется в localStorage</p>
                <p className="text-xs">
                    {count === 0 && 'Счетчик в начальном положении'}
                    {count > 0 && `Положительное значение: +${count}`}
                    {count < 0 && `Отрицательное значение: ${count}`}
                </p>
            </div>
        </div>
    );
};
