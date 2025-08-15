'use client';

import { VStack } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { AllProductCards } from '../AllProductCards/AllProductCards';
import { FilterButtons } from './FilterButtons';
import { ServiceType } from './types';

interface OurServicesProps {
    className?: string;
}

export const OurServices: FC<OurServicesProps> = (props) => {
    const { className } = props;
    const [activeType, setActiveType] = useState<ServiceType>('all');
    const t = useTranslations('OurServices');

    return (
        <div className={cn(className, 'container flex flex-col gap-16')}>
            <VStack gap="16" max>
                <h2 className="font-secondary text-6xl">{t('title')}</h2>
                <FilterButtons activeType={activeType} onTypeChange={setActiveType} />
            </VStack>
            <AllProductCards type={activeType} />
        </div>
    );
};
