import { Button, HStack } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { ServiceType } from './types';

interface FilterButtonsProps {
    activeType: ServiceType;
    onTypeChange: (type: ServiceType) => void;
    className?: string;
}

export const FilterButtons: FC<FilterButtonsProps> = ({ activeType, onTypeChange, className }) => {
    const t = useTranslations('OurServices');

    return (
        <HStack max justify="between" className={cn(className, 'border-t border-b border-black p-6')}>
            <Button
                variant="clear"
                onClick={() => onTypeChange('all')}
                className={cn(activeType === 'all' && 'text-brown')}
            >
                {t('all')}
            </Button>
            <Button
                variant="clear"
                onClick={() => onTypeChange('Clothing Repair')}
                className={cn(activeType === 'Clothing Repair' && 'text-brown')}
            >
                {t('Clothing Repair')}
            </Button>
            <Button
                variant="clear"
                onClick={() => onTypeChange('Custom Tailoring')}
                className={cn(activeType === 'Custom Tailoring' && 'text-brown')}
            >
                {t('Custom Tailoring')}
            </Button>
            <Button
                variant="clear"
                onClick={() => onTypeChange('Alteration & Restoration')}
                className={cn(activeType === 'Alteration & Restoration' && 'text-brown')}
            >   
                {t('Alteration & Restoration')}
            </Button>
            <Button
                variant="clear"
                onClick={() => onTypeChange('Embroidery & Decor')}
                className={cn(activeType === 'Embroidery & Decor' && 'text-brown')}
            >
                {t('Embroidery & Decor')}
            </Button>
        </HStack>
    );
};
