import card1 from '@/assets/ourServices/card1.png';
import card2 from '@/assets/ourServices/card2.png';
import card3 from '@/assets/ourServices/card3.png';
import card4 from '@/assets/ourServices/card4.png';
import card5 from '@/assets/ourServices/card5.png';
import card6 from '@/assets/ourServices/card6.png';
import card7 from '@/assets/ourServices/card7.png';
import card8 from '@/assets/ourServices/card8.png';
import card9 from '@/assets/ourServices/card9.png';
import card10 from '@/assets/ourServices/card10.png';
import card11 from '@/assets/ourServices/card11.png';
import card12 from '@/assets/ourServices/card12.png';
import card13 from '@/assets/ourServices/card13.png';
import card14 from '@/assets/ourServices/card14.png';
import { Button, HStack, VStack } from '@/components/ui';
import cn from 'classnames';
import { getTranslations } from 'next-intl/server';
import { FC } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

interface OurServicesProps {
    className?: string;
}

const products = [
    {
        image: card1,
        title: 'Замена молнии',
        price: '25',
    },
    {
        image: card2,
        title: 'Укорачивание брюк/юбки',
        price: '20',
    },
    {
        image: card3,
        title: 'Укорачивание рукавов',
        price: '25',
    },
    {
        image: card4,
        title: 'Подгонка платья/пиджака',
        price: '40',
    },
    {
        image: card5,
        title: 'Устранение дыр/разрывов',
        price: '15',
    },
    {
        image: card6,
        title: 'Пошив юбки',
        price: '100',
    },
    {
        image: card7,
        title: 'Пошив простого платья',
        price: '160',
    },
    {
        image: card8,
        title: 'Пошив мужской рубашки',
        price: '140',
    },
    {
        image: card9,
        title: 'Модернизация фасона',
        price: '80',
    },
    {
        image: card10,
        title: 'Замена фурнитуры/декора',
        price: '8',
    },
    {
        image: card11,
        title: 'Перешив старой вещи',
        price: '50',
    },
    {
        image: card12,
        title: 'Машинная вышивка',
        price: '25',
    },
    {
        image: card13   ,
        title: 'Украшение кружевом',
        price: '30',
    },
    {
        image: card14,
        title: 'Украшение декором',
        price: '20',
    },
];

export const OurServices: FC<OurServicesProps> = async (props) => {
    const { className } = props;
    const t = await getTranslations('OurServices');
    return (
        <div className={cn(className, 'container flex flex-col gap-16')}>
            <VStack gap="16" max>
                <h2 className="font-secondary text-6xl">{t('title')}</h2>
                {/* filters */}
                <HStack max justify="between" className="border-t border-b border-black p-6">
                    {/* Кнопки фильтров на русском и английском языках */}
                    <Button variant="clear">{t('all')}</Button>
                    <Button variant="clear">{t('Clothing Repair')}</Button>
                    <Button variant="clear">{t('Custom Tailoring')}</Button>
                    <Button variant="clear">{t('Alteration & Restoration')}</Button>
                    <Button variant="clear">{t('Embroidery & Decor')}</Button>
                </HStack>
            </VStack>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.title} {...product} />
                ))}
            </div>
        </div>
    );
};
