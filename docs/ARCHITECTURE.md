# 🏗️ Архитектура проекта Renovo Atelier

## 📊 Обзор структуры

Проект организован по принципу разделения ответственности с четкой иерархией папок:

```
src/
├── components/           # Компоненты UI и бизнес-логики
│   ├── ui/              # Переиспользуемые UI компоненты
│   ├── business/        # Бизнес-компоненты
│   └── layout/          # Layout компоненты (будущее)
├── hooks/               # React хуки
│   ├── state/           # Хуки для состояния
│   ├── ui/              # UI хуки
│   └── data/            # Хуки для данных (будущее)
├── stores/              # Zustand stores
│   ├── counter/         # Store счетчика
│   ├── user/            # Store пользователя
│   └── app/             # Store приложения
├── types/               # TypeScript типы
├── utils/               # Утилиты
│   ├── formatting/      # Форматирование
│   ├── validation/      # Валидация
│   └── helpers/         # Вспомогательные функции
├── constants/           # Константы приложения
├── providers/           # React провайдеры
└── i18n/               # Интернационализация
```

## 🎯 Принципы архитектуры

### 1. **Разделение ответственности**
- **UI компоненты** отвечают только за отображение
- **Business компоненты** содержат бизнес-логику
- **Stores** управляют состоянием
- **Utils** предоставляют переиспользуемые функции

### 2. **Типизация**
- Централизованные TypeScript типы в папке `types/`
- Строгая типизация всех компонентов и функций
- Использование `const assertions` для констант

### 3. **Модульность**
- Каждая папка имеет свой `index.ts` для публичного API
- Возможность импорта на любом уровне
- Легкое тестирование отдельных модулей

## 📁 Детальное описание папок

### Components

#### UI компоненты (`src/components/ui/`)
Переиспользуемые компоненты без бизнес-логики:
- `buttons/` - Button компонент с вариантами
- `feedback/` - LoadingSpinner и другие индикаторы
- `forms/` - Input, Form компоненты (будущее)
- `layout/` - Container, Grid компоненты (будущее)

#### Business компоненты (`src/components/business/`)
Компоненты с бизнес-логикой:
- `counter/` - Counter, CounterIndicator
- `language/` - LanguageSwitcher

### Hooks

#### State хуки (`src/hooks/state/`)
- `use-store.ts` - Хук для работы с Zustand в Next.js

#### UI хуки (`src/hooks/ui/`)
- `useLocalStorage.ts` - Работа с localStorage
- `useDebounce.ts` - Debounce значений
- `useClickOutside.ts` - Обработка кликов вне элемента
- `useMediaQuery.ts` - Responsive breakpoints

### Stores

Организованы по доменам с использованием Zustand:

#### Counter Store (`src/stores/counter/`)
- Управление состоянием счетчика
- Persist в localStorage
- Типизированные действия

#### User Store (`src/stores/user/`)
- Управление пользователем (готово к использованию)
- Авторизация
- Профиль пользователя

#### App Store (`src/stores/app/`)
- Глобальные настройки
- Тема, локаль
- Состояние инициализации

### Types

Централизованная типизация:
- `common.ts` - Базовые типы
- `api.ts` - API типы (для будущего)
- `store.ts` - Store типы
- `components.ts` - Props компонентов

### Utils

#### Formatting (`src/utils/formatting/`)
- Форматирование чисел, дат, валют
- Интернационализация форматов
- Обрезка текста

#### Validation (`src/utils/validation/`)
- Email, телефон, URL валидация
- Проверка паролей
- Валидация диапазонов

#### Helpers (`src/utils/helpers/`)
- Debounce, throttle
- Генерация ID
- Глубокое клонирование
- Определение устройств

### Constants

- `routes.ts` - Маршруты приложения
- `ui.ts` - UI константы (breakpoints, z-index, анимации)
- `config.ts` - Конфигурация приложения

## 🔄 Паттерны использования

### Импорты
```typescript
// ✅ Хорошо - через публичные API
import { Button, LoadingSpinner } from 'components'
import { useDebounce, useLocalStorage } from 'hooks'
import { formatDate, isValidEmail } from 'utils'

// ❌ Плохо - прямые импорты
import { Button } from 'components/ui/buttons/Button'
```

### Компоненты
```typescript
// UI компонент
export const Button: React.FC<ButtonProps> = ({ variant, size, children, ...props }) => {
    // Только UI логика
}

// Business компонент
export const Counter = () => {
    const { count, increment } = useCounterStore()
    // Бизнес-логика + UI
}
```

### Stores
```typescript
// Всегда используем фабрики для SSR совместимости
export const createCounterStore = (initState = defaultState) => {
    return createStore<CounterStore>()(
        persist(
            (set) => ({
                // Состояние и действия
            }),
            { name: 'storage-key' }
        )
    )
}
```

## 🚀 Расширение архитектуры

### Добавление новых компонентов
1. UI компонент → `src/components/ui/[category]/`
2. Business компонент → `src/components/business/[domain]/`
3. Обновить соответствующие `index.ts`

### Добавление новых stores
1. Создать папку → `src/stores/[domain]/`
2. Добавить типы в `src/types/store.ts`
3. Создать provider в `src/providers/`

### Добавление новых утилит
1. Выбрать категорию → `formatting/validation/helpers`
2. Добавить функции с типизацией
3. Экспортировать через `index.ts`

## 🧪 Тестирование

Архитектура поддерживает легкое тестирование:
- Компоненты изолированы
- Utils - чистые функции
- Stores - предсказуемое состояние
- Типизация предотвращает ошибки

## 📈 Производительность

- Lazy loading через dynamic imports
- Tree shaking через ES modules
- Мемоизация в компонентах
- Оптимизированные re-renders в stores

## 🎨 Стилизация

- Tailwind CSS для быстрой разработки
- Централизованные константы для цветов и размеров
- Responsive breakpoints в константах
- Темная/светлая темы готовы к использованию 