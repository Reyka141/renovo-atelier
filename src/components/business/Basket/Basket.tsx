'use client';

import { HStack, VStack } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { BasketList } from './BasketList';
import { BasketForm } from './BasketForm';

interface BasketProps {
    className?: string;
}

export const Basket: FC<BasketProps> = (props) => {
    const { className } = props;
    const t = useTranslations('Basket');

    return (
        <div className={cn(className, 'container flex flex-col gap-6')}>
            <VStack max gap="64">
                <HStack max justify="between" className="border-b border-black pb-4">
                    <h2 className="font-secondary text-2xl md:text-4xl xl:text-6xl">{t('title')}</h2>
                </HStack>
                <div className="flex flex-col gap-6 md:flex-row lg:gap-16">
                    <BasketList className="w-full" />
                    <BasketForm />
                </div>
            </VStack>
        </div>
    );
};
