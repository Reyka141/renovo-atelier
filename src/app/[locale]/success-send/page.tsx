import { Link, VStack } from '@/components';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function BasketPage() {
    const t = await getTranslations('SuccessSend');
    return (
        <div className="container bg-white">
            <main className="flex flex-col gap-9 xl:gap-16 2xl:gap-28">
                <VStack
                    max
                    gap="24"
                    align="center"
                    className="relative z-10 mx-auto max-w-[900px] px-2 text-center md:px-28 md:py-3 xl:px-16 xl:py-12 2xl:py-56"
                >
                    <h3 className="font-secondary lg:text-h1 text-h1-mobile max-w-fit border-b border-black pb-3">
                        {t('title')}
                    </h3>
                    <p className="lg:text-body-desktop text-body-mobile">{t('description')}</p>
                    <Image src={'/success-send/main.png'} alt="success-send" width={360} height={160} />
                    <VStack gap="24">
                        <p className="lg:text-h2 text-h2-mobile text-brown">{t('contactUs')}</p>
                        <VStack gap="12">
                            <p className="text-brown">{t('email')}</p>
                            <p className="text-brown">{t('phone')}</p>
                        </VStack>
                    </VStack>
                    <Link href="/" className="text-primary-500">
                        {t('backToHome')}
                    </Link>
                </VStack>
            </main>
        </div>
    );
}
