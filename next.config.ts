import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    webpack(config) {
        // Находим существующее правило для файлов SVG и исключаем его
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fileLoaderRule = config.module.rules.find((rule: any) => rule?.test?.test?.('.svg'));

        config.module.rules.push(
            // Переопределяем дефолтное правило для обработки *.svg с ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Конвертируем все остальные *.svg импорты в React компоненты
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // исключить если есть ?url
                use: ['@svgr/webpack'],
            },
        );

        // Модифицируем правило по умолчанию, чтобы игнорировать *.svg
        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },
};

export default withNextIntl(nextConfig);
