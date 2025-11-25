import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button, Input, VStack } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';
interface BasketFormProps {
    className?: string;
}
export const BasketForm: FC<BasketFormProps> = (props) => {
    const { className } = props;
    const t = useTranslations('Basket');
    return (
        <div className={cn(className, 'w-full md:max-w-[480px]')}>
            <h3 className="font-secondary pb-9 text-2xl md:text-4xl">{t('orderTitle')}</h3>
            <form action="" className="flex flex-col gap-6">
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
        </div>
    );
};
