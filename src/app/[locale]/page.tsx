import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import { Counter, CounterIndicator } from "@/components/business/counter";
import { LanguageSwitcher } from "@/components";

interface HomePageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
    // Получаем переводы для Server Component
    const t = await getTranslations("HomePage");

    return (
        <CounterStoreProvider>
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                {/* Заголовок с переключателем языков */}
                <header className="w-full flex justify-between items-center row-start-1">
                    <h1 className="text-2xl font-bold">{t("title")}</h1>
                    <div className="flex items-center space-x-4">
                        <CounterIndicator />
                        <LanguageSwitcher />
                    </div>
                </header>

                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />

                    <p className="text-lg text-center sm:text-left text-gray-600 dark:text-gray-400">
                        {t("description")}
                    </p>

                    {/* Добавляем компонент счетчика */}
                    <Counter />

                    <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
                        <li className="mb-2 tracking-[-.01em]">
                            {t("getStarted")}{" "}
                            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                                src/app/[locale]/page.tsx
                            </code>
                            .
                        </li>
                        <li className="tracking-[-.01em]">
                            {t("saveChanges")}
                        </li>
                    </ol>

                    <div className="flex gap-4 items-center flex-col sm:flex-row">
                        <a
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="dark:invert"
                                src="/vercel.svg"
                                alt="Vercel logomark"
                                width={20}
                                height={20}
                            />
                            {t("deployNow")}
                        </a>
                        <a
                            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("readDocs")}
                        </a>
                    </div>

                    <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
                        <p>{t("learnMore")}</p>
                        <p>{t("contactUs")}</p>
                    </footer>
                </main>
            </div>
        </CounterStoreProvider>
    );
}
