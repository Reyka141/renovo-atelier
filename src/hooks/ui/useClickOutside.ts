import { useEffect, useRef } from 'react';

/**
 * Хук для обработки кликов вне элемента
 * - Использует `pointerdown` для поддержки мыши/тача/пера
 * - Корректно работает с порталами через `composedPath`
 * - Закрывает по клавише Escape
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(handler: () => void) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const isEventInside = (evt: Event): boolean => {
            const element = ref.current;
            if (!element) return false;

            const eventWithPath = evt as Event & { composedPath?: () => EventTarget[] };
            const path = typeof eventWithPath.composedPath === 'function' ? eventWithPath.composedPath() : undefined;
            if (Array.isArray(path)) {
                return path.includes(element);
            }

            const targetNode = evt.target as Node | null;
            return !!targetNode && element.contains(targetNode);
        };

        const handlePointerDown = (evt: PointerEvent) => {
            if (!isEventInside(evt)) {
                handler();
            }
        };

        const handleKeyDown = (evt: KeyboardEvent) => {
            if (evt.key === 'Escape') {
                handler();
            }
        };

        // capture: true — чтобы обработать до возможных stopPropagation внутри UI-библиотек
        document.addEventListener('pointerdown', handlePointerDown, true);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown, true);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handler]);

    return ref;
}
