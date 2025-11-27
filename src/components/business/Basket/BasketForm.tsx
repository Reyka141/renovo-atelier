'use client';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button, Input, VStack } from '@/components/ui';
import { useBasketStore } from '@/providers';
import { generateId } from '@/utils/helpers';
import emailjs from '@emailjs/browser';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
interface BasketFormProps {
    className?: string;
}
export const BasketForm: FC<BasketFormProps> = (props) => {
    const { className } = props;
    const t = useTranslations('Basket');
    const tServices = useTranslations('OurServices');
    const items = useBasketStore((state) => state.items);
    const clearBasket = useBasketStore((state) => state.clearBasket);

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (items.length === 0) {
            return;
        }
        const formData = new FormData(e.target as HTMLFormElement);
        const order_id = generateId();
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const email = (formData.get('email') as string) || '';
        // Исправлено: создаем массив объектов, а не массив массивов
        const orders = items.map((item) => ({ name: tServices(item.title), price: item.price, units: '1' }));
        const total = items.reduce((acc, item) => acc + Number(item.price), 0);
        const cost = {
            total,
            shipping: total,
            tax: 0,
        };
        const data = { order_id, name, phone, email, orders, cost };
        setIsLoading(true);
        emailjs
            .send('service_eofo1fm', 'template_hb369qq', data)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                clearBasket();
                router.push('/success-send');
            })
            .catch((error) => {
                console.log('FAILED...', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className={cn(className, 'w-full md:max-w-[480px]')}>
            <h3 className="font-secondary pb-6 text-2xl md:text-4xl lg:pb-9">{t('orderTitle')}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <VStack gap="32" className="w-full md:max-w-[447px]">
                    <Input name="name" placeholder={t('name')} required />
                    <Input name="phone" type="tel" placeholder={t('phone')} required />
                </VStack>
                <VStack gap="32" className="w-full md:max-w-[447px]">
                    <Button
                        isLoading={isLoading}
                        className="flex items-center justify-between gap-2"
                        variant="primary"
                        size="sm"
                        type="submit"
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
        </div>
    );
};
