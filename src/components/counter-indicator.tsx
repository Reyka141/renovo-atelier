"use client";

import { useCounterStore } from "@/providers/counter-store-provider";

export const CounterIndicator = () => {
    // Получаем только count из того же store что и Counter
    const count = useCounterStore((state) => state.count);

    // Показываем placeholder пока данные не загрузились
    if (count === undefined) {
        return (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-gray-600 dark:text-gray-300">
                    Загрузка...
                </span>
            </div>
        );
    }

    // Определяем стиль на основе значения
    const getStatusStyle = () => {
        if (count === 0)
            return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
        if (count > 0)
            return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    };

    const getIcon = () => {
        if (count === 0) return "⚪";
        if (count > 0) return "🟢";
        return "🔴";
    };

    return (
        <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle()}`}
        >
            <span className="mr-2">{getIcon()}</span>
            <span>Счетчик: {count}</span>
        </div>
    );
};
