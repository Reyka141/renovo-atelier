import { Button, HStack, VStack } from '@/components/ui';
import { useBasketStore } from '@/providers';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { BasketItem } from './BasketItem';

interface BasketListProps {
    className?: string;
}
export const BasketList: FC<BasketListProps> = (props) => {
    const { className } = props;
    const items = useBasketStore((state) => state.items);
    const clearBasket = useBasketStore((state) => state.clearBasket);
    const t = useTranslations('Basket');

    const count = items.length;

    const handleClearAll = () => {
        clearBasket();
    };

    return (
        <div className={cn(className)}>
            <HStack max justify="between" className="pb-6">
                <h3>{t('totalServices', { count })}</h3>
                <Button variant="clear" onClick={handleClearAll} disabled={count === 0} className="cursor-pointer">
                    {t('clearAll')}
                </Button>
            </HStack>
            {count === 0 ? (
                <div className="text-gray py-12 text-center">{t('basketIsEmpty')}</div>
            ) : (
                <VStack max gap="16">
                    {items.map((item) => (
                        <BasketItem key={item.id} item={item} />
                    ))}
                </VStack>
            )}
        </div>
    );
};
