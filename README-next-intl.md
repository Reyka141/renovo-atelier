# 🌍 Интернационализация с next-intl в Renovo Atelier

Данный проект использует **next-intl** - официально рекомендуемую библиотеку для интернационализации в Next.js 15 App Router.

## ✨ Преимущества next-intl

-   ✅ **Официальная поддержка** Next.js
-   ✅ **Совместимость с React 19**
-   ✅ **Встроенная типизация** TypeScript
-   ✅ **Оптимизированная производительность**
-   ✅ **Server Components поддержка**
-   ✅ **Статическая генерация** из коробки

## 🛠 Архитектура

### Структура проекта

```
src/
├── i18n/
│   ├── routing.ts          # Центральная конфигурация роутинга
│   ├── request.ts          # Конфигурация для Server Components
│   └── navigation.ts       # Типизированные навигационные обертки
├── app/
│   └── [locale]/           # Динамические языковые маршруты
│       ├── layout.tsx      # Layout с NextIntlClientProvider
│       └── page.tsx        # Главная страница с переводами
├── components/
│   └── language-switcher.tsx # Переключатель языков
├── messages/
│   ├── en.json            # Английские переводы
│   └── ru.json            # Русские переводы
└── middleware.ts          # Официальный middleware next-intl
```

## ⚙️ Настройка

### 1. Установка

```bash
npm install next-intl
```

### 2. Конфигурация роутинга (`src/i18n/routing.ts`)

```typescript
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "ru"],
    defaultLocale: "en",
});
```

### 3. Конфигурация для Server Components (`src/i18n/request.ts`)

```typescript
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
```

### 4. Next.js конфигурация (`next.config.ts`)

```typescript
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

### 5. Middleware (`src/middleware.ts`)

```typescript
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
    matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
```

## 📝 Использование

### В Server Components

```typescript
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations("HomePage");
    return <h1>{t("title")}</h1>;
}
```

### В Client Components

```typescript
"use client";
import { useTranslations } from "next-intl";

export default function Component() {
    const t = useTranslations("HomePage");
    return <h1>{t("title")}</h1>;
}
```

### Типизированная навигация

```typescript
import { Link, useRouter } from "@/i18n/navigation";

// Автоматическая обработка локалей
<Link href="/about">About</Link>;

// Программная навигация
const router = useRouter();
router.push("/contact");
```

## 🔄 Структура переводов

### Английский (`messages/en.json`)

```json
{
    "HomePage": {
        "title": "Welcome to Renovo Atelier",
        "description": "Next.js application with internationalization"
    },
    "Navigation": {
        "home": "Home",
        "about": "About"
    }
}
```

### Русский (`messages/ru.json`)

```json
{
    "HomePage": {
        "title": "Добро пожаловать в Renovo Atelier",
        "description": "Next.js приложение с интернационализацией"
    },
    "Navigation": {
        "home": "Главная",
        "about": "О нас"
    }
}
```

## 🚀 Ключевые особенности

### 1. Автоматическая типизация

TypeScript автоматически определяет доступные ключи переводов:

```typescript
// ✅ Валидный ключ - автодополнение работает
t("HomePage.title");

// ❌ TypeScript покажет ошибку
t("HomePage.invalid");
```

### 2. Статическая генерация

```typescript
// Автоматически генерирует страницы для всех локалей
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
```

### 3. SEO оптимизация

-   Правильные `lang` атрибуты в HTML
-   Уникальные URL для каждого языка
-   Локализованные метаданные

### 4. Переключение языков

```typescript
import { useRouter, usePathname } from "@/i18n/navigation";

const router = useRouter();
const pathname = usePathname();

// Переключение с сохранением текущего пути
router.push(pathname, { locale: "ru" });
```

## 🔧 Команды разработки

```bash
# Запуск сервера разработки
npm run dev

# Сборка проекта
npm run build

# Запуск продакшн сервера
npm run start
```

## 📊 Маршрутизация

### URL структура

-   `/` → перенаправление на язык по умолчанию
-   `/en` → английская версия
-   `/en/about` → английская страница "о нас"
-   `/ru` → русская версия
-   `/ru/about` → русская страница "о нас"

### Автоматическое определение языка

-   Анализ заголовка `Accept-Language`
-   Перенаправление на предпочитаемый язык
-   Fallback на язык по умолчанию

## 🎯 Лучшие практики

1. **Структурируйте переводы** по страницам/компонентам
2. **Используйте пространства имен** для организации
3. **Добавляйте контекст** в ключи переводов
4. **Тестируйте все языки** регулярно
5. **Используйте TypeScript** для безопасности типов

## 🔄 Миграция с react-i18next

✅ **Завершена миграция на next-intl:**

-   Удалены зависимости react-i18next, i18next
-   Упрощена архитектура (меньше файлов конфигурации)
-   Добавлена автоматическая типизация
-   Решена проблема совместимости с React 19
-   Улучшена производительность

---

**next-intl** обеспечивает современную, производительную и типобезопасную интернационализацию для вашего Next.js 15 приложения! 🎉
