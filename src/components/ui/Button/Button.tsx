import { useTranslations } from 'next-intl';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'clear';
    size?: 'sm' | 'md' | 'lg' | 'clear';
    isLoading?: boolean;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'clear',
    isLoading = false,
    children,
    className = '',
    disabled,
    ...props
}) => {
    const baseClasses = 'font-normal';
    const t = useTranslations('Common');
    const variantClasses = {
        primary:
            'bg-transparent border border-black hover:bg-transparent hover:text-brown text-black focus:ring-transparent transition-all duration-300',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500',
        danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
        success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
        clear: 'bg-transparent hover:bg-transparent hover:text-brown text-black focus:ring-transparent',
    };

    const sizeClasses = {
        sm: 'lg:p-3 p-2 text-button-mobile leading-[110%] lg:text-button',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg',
        clear: 'px-0 py-0',
    };

    const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={finalClassName} disabled={disabled || isLoading} {...props}>
            {isLoading ? (
                <div className="flex items-center">
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                    {t('loading')}
                </div>
            ) : (
                children
            )}
        </button>
    );
};
