import { routing } from '@/i18n/routing';
import { AppProvider } from '@/providers';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Lato, Viaoda_Libre } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import '../globals.css';

const viaodaLibre = Viaoda_Libre({
    variable: '--font-viaoda-libre',
    subsets: ['latin'],
    weight: '400',
});

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['400', '300'],
});

// Генерируем статические параметры для всех локалей
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// Генерируем метаданные с учетом локали
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    // Проверяем, что входящая локаль валидна
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Получаем переводы для клиентских компонентов
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth">
            <body className={`${viaodaLibre.variable} ${lato.variable} antialiased`}>
                {/* EmailJS инициализация */}
                <Script
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
                    strategy="beforeInteractive"
                />
                <Script id="emailjs-init" strategy="beforeInteractive">
                    {`
                        (function(){
                            emailjs.init({
                                publicKey: "AxX5jN7jJ0WvIXgtB",
                            });
                        })();
                    `}
                </Script>

                <NextIntlClientProvider messages={messages}>
                    <AppProvider>{children}</AppProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
