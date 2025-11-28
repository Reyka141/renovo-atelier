'use client';

import cn from 'classnames';
import NextLink from 'next/link';
import { FC, MouseEvent } from 'react';

interface SmoothScrollLinkProps {
    className?: string;
    href: string;
    children: React.ReactNode;
    offset?: number; // Отступ от верха при скролле (для учета высоты хедера)
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export const SmoothScrollLink: FC<SmoothScrollLinkProps> = (props) => {
    const { className, href, children, offset = 78, onClick } = props;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Проверяем, является ли ссылка якорной (начинается с #)
        if (href.startsWith('#')) {
            e.preventDefault();

            // Проверяем, что мы находимся на главной странице (pathname === '/' или === '/[locale]')
            // window.location.pathname может быть '/en' (для локализации), проверяем это
            const pathname = window.location.pathname;
            // Разрешаем и '/' и '/xx' где xx - 2 буквы (локаль)
            const isHome =
                pathname === '/' || (pathname.match(/^\/[a-zA-Z-]{2,5}$/) && pathname.split('/').length === 2);

            if (!isHome) {
                // Перенаправляем на главную с якорем
                window.location.href = `${pathname.match(/^\/[a-zA-Z-]{2,5}$/) ? pathname : ''}/${href}`;
                return;
            }

            const targetId = href.slice(1); // Убираем #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }

        // Вызываем дополнительный обработчик, если он передан
        onClick?.(e);
    };

    return (
        <NextLink href={href} className={cn(className, '')} onClick={handleClick}>
            {children}
        </NextLink>
    );
};
