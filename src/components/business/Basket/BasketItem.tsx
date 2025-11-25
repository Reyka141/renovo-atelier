import { Button, HStack, VStack } from '@/components/ui';
import { useBasketStore } from '@/providers';
import { BasketItem as BasketItemType } from '@/types';
import Image from 'next/image';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

interface BasketItemProps {
    item: BasketItemType;
}
export const BasketItem: FC<BasketItemProps> = (props) => {
    const { item } = props;
    const removeItem = useBasketStore((state) => state.removeItem);
    const t = useTranslations('OurServices');

    const handleRemove = () => {
        removeItem(item.id);
    };

    return (
        <HStack max justify="between" className="border-gray border-b pb-3">
            <HStack justify="between" gap="12">
                <Image src={item.image} alt={item.title} className="h-16 w-16 object-cover" width={64} height={64} />
                <VStack>
                    <p>{t(item.title)}</p>
                    <p className="text-gray">{t('fromPrice', { price: item.price })}</p>
                </VStack>
            </HStack>
            <Button variant="clear" className="cursor-pointer" onClick={handleRemove}>
                <Image src="/Trash_Full.svg" alt="trash" width={24} height={24} />
            </Button>
        </HStack>
    );
};
