import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    // Настройки Next.js могут быть добавлены здесь
};

export default withNextIntl(nextConfig);
