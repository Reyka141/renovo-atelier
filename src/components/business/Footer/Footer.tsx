'use client';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button, HStack, Input, Link, VStack } from '@/components/ui';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { toast } from 'react-toastify';

export function Footer() {
    const t = useTranslations('Footer');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const data = { title: 'Связаться с нами', message: `Имя: ${name} Хочет связаться с вами\nТелефон: ${phone}` };
        emailjs
            .send('service_eofo1fm', 'template_s25n40c', data)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success(t('messageSentSuccessfully'));
            })
            .catch((error) => {
                toast.error(t('failedToSendMessage'));
                console.log('FAILED...', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
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
                        <form onSubmit={handleSubmit} className="hidden gap-16 lg:flex">
                            <VStack gap="32" className="w-full max-w-[447px]">
                                <Input name="name" placeholder={t('name')} required />
                                <p className="text-gray text-body-mobile">
                                    {t('privacyPolicy')}{' '}
                                    <Link href="/privacy-policy" className="text-brown">
                                        {t('privacyPolicyLink')}
                                    </Link>
                                </p>
                            </VStack>
                            <VStack gap="32" className="w-full max-w-[447px]">
                                <Input name="phone" type="tel" placeholder={t('phone')} required />
                                <Button
                                    className="flex items-center justify-between gap-2"
                                    variant="primary"
                                    size="sm"
                                    type="submit"
                                    isLoading={isLoading}
                                    disabled={isLoading}
                                >
                                    {t('send')} <ArrowRightIcon />
                                </Button>
                            </VStack>
                        </form>
                        <form action="" className="flex flex-col gap-6 lg:hidden">
                            <VStack gap="32" className="w-full md:max-w-[447px]">
                                <Input name="name" placeholder={t('name')} required />
                                <Input name="phone" type="tel" placeholder={t('phone')} required />
                            </VStack>
                            <VStack gap="32" className="w-full md:max-w-[447px]">
                                <Button
                                    className="flex items-center justify-between gap-2"
                                    variant="primary"
                                    size="sm"
                                    type="submit"
                                    isLoading={isLoading}
                                    disabled={isLoading}
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
