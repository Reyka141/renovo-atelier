import { useState, useEffect } from 'react'

/**
 * Хук для работы с localStorage с синхронизацией состояния
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
    // Получить значение из localStorage или использовать начальное
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.warn(`Ошибка чтения localStorage ключа "${key}":`, error)
            return initialValue
        }
    })

    // Функция для обновления значения
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            console.warn(`Ошибка записи в localStorage ключа "${key}":`, error)
        }
    }

    return [storedValue, setValue] as const
} 