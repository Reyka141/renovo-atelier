'use client';

import { HStack, ListBox, VStack } from '@/components';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { AllProductCards } from '../AllProductCards/AllProductCards';
import { FilterButtons } from './FilterButtons';
import { ServiceType } from './types';

interface OurServicesProps {
    className?: string;
}

const items = [
    { value: 'all', label: 'all', id: 1 },
    { value: 'Clothing Repair', label: 'Clothing Repair', id: 2 },
    { value: 'Custom Tailoring', label: 'Custom Tailoring', id: 3 },
    { value: 'Alteration & Restoration', label: 'Alteration & Restoration', id: 4 },
    { value: 'Embroidery & Decor', label: 'Embroidery & Decor', id: 5 },
];

export const OurServices: FC<OurServicesProps> = (props) => {
    const { className } = props;
    const [activeType, setActiveType] = useState<ServiceType>('all');
    const t = useTranslations('OurServices');
    return (
        <div className={cn(className, 'container flex flex-col gap-6 xl:gap-8 2xl:gap-16')}>
            <VStack gap="16" max>
                <HStack max justify="between" className="border-b border-black xl:border-none">
                    <h2 className="font-secondary pb-4 text-2xl md:text-4xl xl:border-b-0 xl:pb-0 xl:text-6xl">
                        {t('title')}
                    </h2>
                    <ListBox className='xl:hidden' items={items} onChange={(item) => setActiveType(item as ServiceType)} />
                </HStack>

                <FilterButtons className="hidden xl:flex" activeType={activeType} onTypeChange={setActiveType} />
            </VStack>
            <AllProductCards type={activeType} />
        </div>
    );
};
