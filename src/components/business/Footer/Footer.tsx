import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button, HStack, Input, Link, VStack } from '@/components/ui';
import { getTranslations } from 'next-intl/server';

export async function Footer() {
    const t = await getTranslations('Footer');
    return (
        <footer className="container pb-32">
            <VStack max gap="64">
                <HStack max justify="between" className="border-b border-black pb-4">
                    <h2 className="font-secondary text-2xl md:text-4xl xl:text-6xl">{t('title')}</h2>
                </HStack>
                <HStack gap="8" max className="!flex-col-reverse md:!flex-row" justify="between" align="start">
                    <div className="flex flex-col gap-0 md:gap-3">
                        <p>
                            <a href="mailto:renovoateliermail@gmail.com" className="lg:text-size-s text-body-mobile">
                                renovoateliermail@gmail.com
                            </a>
                        </p>
                        <p className="mb-3">
                            <a href="tel:+48796271708" className="lg:text-size-s text-body-mobile">
                                +48 796 271 708
                            </a>
                        </p>
                        <p className="max-w-[250px]">
                            <a
                                href="https://maps.app.goo.gl/B22rdmCQ7kvNejFRA"
                                target="_blank"
                                className="lg:text-size-s text-body-mobile"
                            >
                                Piotrków trybunalski, ul. Słowackiego 129/6
                            </a>
                        </p>
                    </div>
                    <HStack>
                        <form action="" className="hidden gap-16 lg:flex">
                            <VStack gap="32" className="w-full max-w-[447px]">
                                <Input placeholder={t('name')} required />
                                <p className="text-gray text-body-mobile">
                                    {t('privacyPolicy')}{' '}
                                    <Link href="/privacy-policy" className="text-brown">
                                        {t('privacyPolicyLink')}
                                    </Link>
                                </p>
                            </VStack>
                            <VStack gap="32" className="w-full max-w-[447px]">
                                <Input type="tel" placeholder={t('phone')} required />
                                <Button
                                    className="flex items-center justify-between gap-2"
                                    variant="primary"
                                    size="sm"
                                    type="submit"
                                >
                                    {t('send')} <ArrowRightIcon />
                                </Button>
                            </VStack>
                        </form>
                        <form action="" className="flex flex-col gap-6 lg:hidden">
                            <VStack gap="32" className="w-full md:max-w-[447px]">
                                <Input placeholder={t('name')} required />
                                <Input type="tel" placeholder={t('phone')} required />
                            </VStack>
                            <VStack gap="32" className="w-full md:max-w-[447px]">
                                <Button
                                    className="flex items-center justify-between gap-2"
                                    variant="primary"
                                    size="sm"
                                    type="submit"
                                >
                                    {t('send')} <ArrowRightIcon />
                                </Button>
                                <p className="text-gray text-body-mobile text-balance">
                                    {t('privacyPolicy')}{' '}
                                    <Link href="/privacy-policy" className="text-brown">
                                        {t('privacyPolicyLink')}
                                    </Link>
                                </p>
                            </VStack>
                        </form>
                    </HStack>
                </HStack>
            </VStack>
        </footer>
    );
}
