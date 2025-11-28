import { Footer, Header, Link, VStack } from '@/components';
import { getTranslations } from 'next-intl/server';

export default async function PrivacyPolicyPage() {
    const t = await getTranslations('PrivacyPolicy');

    return (
        <div className="bg-white">
            <Header textColor="black" />
            <main className="flex flex-col gap-9 pt-[102px] md:pt-[120px] lg:pt-[136px] xl:gap-16 2xl:gap-28">
                <article className="container pb-16">
                    <VStack max gap="32" className="mx-auto max-w-[900px]">
                        {/* Заголовок страницы */}
                        <VStack gap="16" className="border-b border-black pb-6">
                            <h1 className="
                             lg:text-h1 text-h1-mobile">{t('title')}</h1>
                            <p className="text-gray lg:text-body-desktop text-body-mobile">{t('lastUpdated')}</p>
                        </VStack>

                        {/* Вступление */}
                        <p className="lg:text-body-desktop text-body-mobile">{t('intro')}</p>

                        {/* Раздел 1 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section1.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section1.description')}</p>
                            <ul className="lg:text-body-desktop text-body-mobile list-disc space-y-2 pl-6">
                                <li>{t('section1.item1')}</li>
                                <li>{t('section1.item2')}</li>
                                <li>{t('section1.item3')}</li>
                            </ul>
                        </VStack>

                        {/* Раздел 2 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section2.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section2.description')}</p>
                            <ul className="lg:text-body-desktop text-body-mobile list-disc space-y-2 pl-6">
                                <li>{t('section2.item1')}</li>
                                <li>{t('section2.item2')}</li>
                                <li>{t('section2.item3')}</li>
                                <li>{t('section2.item4')}</li>
                            </ul>
                        </VStack>

                        {/* Раздел 3 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section3.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section3.description')}</p>
                            <ul className="lg:text-body-desktop text-body-mobile list-disc space-y-2 pl-6">
                                <li>{t('section3.item1')}</li>
                                <li>{t('section3.item2')}</li>
                                <li>{t('section3.item3')}</li>
                                <li>{t('section3.item4')}</li>
                            </ul>
                        </VStack>

                        {/* Раздел 4 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section4.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section4.description1')}</p>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section4.description2')}</p>
                        </VStack>

                        {/* Раздел 5 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section5.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section5.description')}</p>
                            <ul className="lg:text-body-desktop text-body-mobile list-disc space-y-2 pl-6">
                                <li>{t('section5.item1')}</li>
                                <li>{t('section5.item2')}</li>
                                <li>{t('section5.item3')}</li>
                            </ul>
                        </VStack>

                        {/* Раздел 6 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section6.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section6.description')}</p>
                        </VStack>

                        {/* Раздел 7 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section7.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section7.description')}</p>
                            <ul className="lg:text-body-desktop text-body-mobile list-disc space-y-2 pl-6">
                                <li>{t('section7.item1')}</li>
                                <li>{t('section7.item2')}</li>
                                <li>{t('section7.item3')}</li>
                                <li>{t('section7.item4')}</li>
                            </ul>
                        </VStack>

                        {/* Раздел 8 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section8.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section8.description')}</p>
                            <ul className="lg:text-body-desktop text-body-mobile list-disc space-y-2 pl-6">
                                <li>{t('section8.item1')}</li>
                                <li>{t('section8.item2')}</li>
                            </ul>
                        </VStack>

                        {/* Раздел 9 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section9.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section9.description')}</p>
                            <ul className="lg:text-body-desktop text-body-mobile list-disc space-y-2 pl-6">
                                <li>{t('section9.item1')}</li>
                                <li>{t('section9.item2')}</li>
                                <li>{t('section9.item3')}</li>
                                <li>{t('section9.item4')}</li>
                                <li>{t('section9.item5')}</li>
                                <li>{t('section9.item6')}</li>
                            </ul>
                        </VStack>

                        {/* Раздел 10 */}
                        <VStack gap="16">
                            <h2 className="
                             lg:text-h2 text-h2-mobile">{t('section10.title')}</h2>
                            <p className="lg:text-body-desktop text-body-mobile">{t('section10.description')}</p>
                        </VStack>

                        {/* Ссылка на главную */}
                        <Link href="/" className="text-brown hover:underline">
                            {t('backToHome')}
                        </Link>
                    </VStack>
                </article>
                <Footer />
            </main>
        </div>
    );
}

