import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Легкие обертки вокруг навигационных API Next.js
// которые учитывают конфигурацию роутинга
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing); 