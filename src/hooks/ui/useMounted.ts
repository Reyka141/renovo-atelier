import { useEffect, useState } from 'react';

/**
 * Хук для проверки, что компонент смонтирован на клиенте
 * Используется для предотвращения ошибок гидратации в Next.js
 */
export function useMounted(): boolean {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}
