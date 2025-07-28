/**
 * Типы для компонентов
 */

import { ComponentSize, ComponentVariant } from './common';

// Базовые props для всех компонентов
export interface BaseComponentProps {
    className?: string;
    'data-testid'?: string;
}

// Props для UI компонентов
export interface ButtonComponentProps extends BaseComponentProps {
    variant?: ComponentVariant;
    size?: ComponentSize;
    isLoading?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export interface InputComponentProps extends BaseComponentProps {
    label?: string;
    placeholder?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

// Props для layout компонентов
export interface PageLayoutProps extends BaseComponentProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export interface HeaderProps extends BaseComponentProps {
    showUserMenu?: boolean;
    showLanguageSwitcher?: boolean;
}

// Props для бизнес-компонентов
export interface CounterProps extends BaseComponentProps {
    initialValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onValueChange?: (value: number) => void;
}

export interface LanguageSwitcherProps extends BaseComponentProps {
    currentLocale?: string;
    availableLocales?: string[];
    onLocaleChange?: (locale: string) => void;
} 