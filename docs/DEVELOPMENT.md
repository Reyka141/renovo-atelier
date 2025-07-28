# 👨‍💻 Руководство для разработчиков

## 🚀 Быстрый старт

### Требования

-   Node.js 18+
-   npm или yarn
-   Git

### Установка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd renovo-atelier

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

### Доступные команды

```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен сборки
npm run lint         # Проверка ESLint
```

## 🏗️ Архитектура

Подробное описание архитектуры смотри в [ARCHITECTURE.md](./ARCHITECTURE.md)

### Основные принципы

1. **Модульность** - каждый модуль имеет четкую ответственность
2. **Типизация** - строгое использование TypeScript
3. **Переиспользование** - максимальное переиспользование кода
4. **Производительность** - оптимизация на всех уровнях

## 📁 Работа с компонентами

### Создание UI компонента

```bash
# Создать папку для компонента
mkdir src/components/ui/input

# Создать файлы
touch src/components/ui/input/Input.tsx
touch src/components/ui/input/index.ts
```

```typescript
// src/components/ui/input/Input.tsx
import React from "react";
import type { InputComponentProps } from "types";

export const Input: React.FC<InputComponentProps> = ({
    label,
    error,
    className = "",
    ...props
}) => {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    );
};
```

```typescript
// src/components/ui/input/index.ts
export { Input } from "./Input";
```

### Обновить главный index

```typescript
// src/components/ui/index.ts
export * from "./buttons";
export * from "./feedback";
export * from "./input"; // ← добавить
```

## 🏪 Работа со stores

### Создание нового store

1. **Добавить типы** в `src/types/store.ts`:

```typescript
export interface SettingsState {
    notifications: boolean;
    language: string;
}

export interface SettingsActions {
    toggleNotifications: () => void;
    setLanguage: (lang: string) => void;
}

export interface SettingsStore extends SettingsState, SettingsActions {}
```

2. **Создать store** в `src/stores/settings/`:

```typescript
// src/stores/settings/settings-store.ts
import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";
import type { SettingsStore, SettingsState } from "../../types";

export const defaultSettingsState: SettingsState = {
    notifications: true,
    language: "en",
};

export const createSettingsStore = (
    initState: SettingsState = defaultSettingsState
) => {
    return createStore<SettingsStore>()(
        persist(
            (set) => ({
                ...initState,
                toggleNotifications: () =>
                    set((state) => ({
                        notifications: !state.notifications,
                    })),
                setLanguage: (language: string) => set({ language }),
            }),
            {
                name: "settings-storage",
                storage: createJSONStorage(() => localStorage),
            }
        )
    );
};
```

3. **Создать provider** в `src/providers/`:

```typescript
// src/providers/settings-store-provider.tsx
"use client";

import { createContext, useContext, useRef, ReactNode } from "react";
import { useStore } from "zustand";
import { createSettingsStore, defaultSettingsState } from "../stores/settings";
import type { SettingsStore } from "../types";

type SettingsStoreApi = ReturnType<typeof createSettingsStore>;

const SettingsStoreContext = createContext<SettingsStoreApi | undefined>(
    undefined
);

export const SettingsStoreProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const storeRef = useRef<SettingsStoreApi | null>(null);

    if (storeRef.current === null) {
        storeRef.current = createSettingsStore(defaultSettingsState);
    }

    return (
        <SettingsStoreContext.Provider value={storeRef.current}>
            {children}
        </SettingsStoreContext.Provider>
    );
};

export const useSettingsStore = <T>(
    selector: (store: SettingsStore) => T
): T => {
    const store = useContext(SettingsStoreContext);
    if (!store) {
        throw new Error(
            "useSettingsStore должен использоваться внутри SettingsStoreProvider"
        );
    }
    return useStore(store, selector);
};
```

## 🛠️ Утилиты

### Добавление новой утилиты

1. **Выбрать категорию**: `formatting`, `validation`, или `helpers`
2. **Добавить функцию** с типизацией:

```typescript
// src/utils/formatting/index.ts
export const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }

    return phone;
};
```

3. **Экспортировать** через index файлы

## 🎨 Стилизация

### Tailwind CSS классы

Используем утилитарные классы Tailwind:

```typescript
const classes = {
    button: "px-4 py-2 rounded-lg transition-colors",
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
};
```

### Цвета из констант

```typescript
import { COLORS } from "constants";

// Используем константы для согласованности
const buttonStyle = {
    backgroundColor: COLORS.primary[500],
    "&:hover": {
        backgroundColor: COLORS.primary[600],
    },
};
```

## 🌍 Интернационализация

### Добавление переводов

```json
// messages/ru.json
{
    "common": {
        "save": "Сохранить",
        "cancel": "Отмена",
        "loading": "Загрузка..."
    },
    "HomePage": {
        "title": "Добро пожаловать",
        "description": "Описание страницы"
    }
}
```

### Использование в компонентах

```typescript
import { useTranslations } from "next-intl";

export const MyComponent = () => {
    const t = useTranslations("common");

    return <button>{t("save")}</button>;
};
```

## 🧪 Тестирование

### Тестирование компонентов

```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "components";

describe("Button", () => {
    it("отображается с правильным текстом", () => {
        render(<Button>Нажми меня</Button>);
        expect(screen.getByText("Нажми меня")).toBeInTheDocument();
    });
});
```

### Тестирование утилит

```typescript
import { formatDate } from "utils";

describe("formatDate", () => {
    it("форматирует дату правильно", () => {
        const date = new Date("2023-12-25");
        const formatted = formatDate(date);
        expect(formatted).toBe("25 декабря 2023 г.");
    });
});
```

## 📝 Код-стайл

### TypeScript

-   Всегда используйте типы
-   Предпочитайте `interface` для объектов
-   Используйте `const assertions` для констант

### React

-   Функциональные компоненты с TypeScript
-   Используйте `React.FC` для типизации пропсов
-   Мемоизация через `React.memo` при необходимости

### Именование

-   `PascalCase` для компонентов
-   `camelCase` для функций и переменных
-   `UPPER_CASE` для констант
-   `kebab-case` для файлов

## 🚨 Частые ошибки

1. **Прямые импорты** вместо публичных API
2. **Отсутствие типизации** в новых компонентах
3. **Забыли обновить index.ts** после добавления файлов
4. **ESLint ошибки** - всегда проверяйте перед коммитом

## 📚 Полезные ссылки

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [Zustand](https://zustand-demo.pmnd.rs/)
-   [TypeScript](https://www.typescriptlang.org/docs/)
