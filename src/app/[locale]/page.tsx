import { AboutUs, FAQAnswers, Feedback, Header, Hero, OurServices, OurWork } from '@/components';

export default async function HomePage() {
    return (
        <div className="bg-white">
            <Header />
            <main className="flex flex-col gap-9 xl:gap-16 2xl:gap-28">
                <Hero />
                <OurServices />
                <AboutUs />
                <OurWork />
                <Feedback />

                <FAQAnswers />
            </main>
        </div>
    );
}

// export default async function HomePage() {
//     // Получаем переводы для Server Component
//     const t = await getTranslations('HomePage');

//     return (
//         <CounterStoreProvider>
//             <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
//                 {/* Заголовок с переключателем языков */}
//                 <header className="row-start-1 flex w-full items-center justify-between">
//                     <h1 className="text-2xl font-bold">{t('title')}</h1>
//                     <div className="flex items-center space-x-4">
//                         <CounterIndicator />
//                         <LanguageSwitcher />
//                     </div>
//                 </header>

//                 <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
//                     <Image
//                         className="dark:invert"
//                         src="/next.svg"
//                         alt="Next.js logo"
//                         width={180}
//                         height={38}
//                         priority
//                     />

//                     <p className="text-center text-lg text-gray-600 sm:text-left dark:text-gray-400">
//                         {t('description')}
//                     </p>

//                     {/* Добавляем компонент счетчика */}
//                     <Counter />

//                     <ol className="list-inside list-decimal text-center font-mono text-sm/6 sm:text-left">
//                         <li className="mb-2 tracking-[-.01em]">
//                             {t('getStarted')}{' '}
//                             <code className="rounded bg-black/[.05] px-1 py-0.5 font-mono font-semibold dark:bg-white/[.06]">
//                                 src/app/[locale]/page.tsx
//                             </code>
//                             .
//                         </li>
//                         <li className="tracking-[-.01em]">{t('saveChanges')}</li>
//                     </ol>

//                     <div className="flex flex-col items-center gap-4 sm:flex-row">
//                         <a
//                             className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
//                             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Image
//                                 className="dark:invert"
//                                 src="/vercel.svg"
//                                 alt="Vercel logomark"
//                                 width={20}
//                                 height={20}
//                             />
//                             {t('deployNow')}
//                         </a>
//                         <a
//                             className="flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
//                             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             {t('readDocs')}
//                         </a>
//                     </div>

//                     <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
//                         <p>{t('learnMore')}</p>
//                         <p>{t('contactUs')}</p>
//                     </footer>
//                 </main>
//             </div>
//         </CounterStoreProvider>
//     );
// }
