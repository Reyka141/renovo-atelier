import card1 from '@/assets/ourServices/card1.png';
import card10 from '@/assets/ourServices/card10.png';
import card11 from '@/assets/ourServices/card11.png';
import card12 from '@/assets/ourServices/card12.png';
import card13 from '@/assets/ourServices/card13.png';
import card14 from '@/assets/ourServices/card14.png';
import card2 from '@/assets/ourServices/card2.png';
import card3 from '@/assets/ourServices/card3.png';
import card4 from '@/assets/ourServices/card4.png';
import card5 from '@/assets/ourServices/card5.png';
import card6 from '@/assets/ourServices/card6.png';
import card7 from '@/assets/ourServices/card7.png';
import card8 from '@/assets/ourServices/card8.png';
import card9 from '@/assets/ourServices/card9.png';
import cn from 'classnames';
import { FC } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

const products = [
    {
        image: card1,
        title: 'zipperReplacement',
        price: '25',
        type: 'Clothing Repair', // Ремонт одежды
    },
    {
        image: card2,
        title: 'shorteningPantsSkirt',
        price: '20',
        type: 'Alteration & Restoration', // Перешив и реставрация
    },
    {
        image: card3,
        title: 'shorteningSleeves',
        price: '25',
        type: 'Alteration & Restoration', // Перешив и реставрация
    },
    {
        image: card4,
        title: 'dressJacketFitting',
        price: '40',
        type: 'Alteration & Restoration', // Перешив и реставрация
    },
    {
        image: card5,
        title: 'repairHolesRips',
        price: '15',
        type: 'Clothing Repair', // Ремонт одежды
    },
    {
        image: card6,
        title: 'skirtSewing',
        price: '100',
        type: 'Custom Tailoring', // Индивидуальный пошив
    },
    {
        image: card7,
        title: 'simpleDressSewing',
        price: '160',
        type: 'Custom Tailoring', // Индивидуальный пошив
    },
    {
        image: card8,
        title: 'mensShirtSewing',
        price: '140',
        type: 'Custom Tailoring', // Индивидуальный пошив
    },
    {
        image: card9,
        title: 'styleModernization',
        price: '80',
        type: 'Alteration & Restoration', // Перешив и реставрация
    },
    {
        image: card10,
        title: 'hardwareDecorReplacement',
        price: '8',
        type: 'Clothing Repair', // Ремонт одежды
    },
    {
        image: card11,
        title: 'oldItemRedesign',
        price: '50',
        type: 'Alteration & Restoration', // Перешив и реставрация
    },
    {
        image: card12,
        title: 'machineryEmbroidery',
        price: '25',
        type: 'Embroidery & Decor', // Вышивка и декор
    },
    {
        image: card13,
        title: 'laceDecoration',
        price: '30',
        type: 'Embroidery & Decor', // Вышивка и декор
    },
    {
        image: card14,
        title: 'decorDecoration',
        price: '20',
        type: 'Embroidery & Decor', // Вышивка и декор
    },
];

import { ServiceType } from '../OurServices/types';

interface AllProductCardsProps {
    className?: string;
    type: ServiceType;
}

export const AllProductCards: FC<AllProductCardsProps> = (props) => {
    const { className, type } = props;

    const filteredProducts = type === 'all' ? products : products.filter((product) => product.type === type);

    return (
        <div
            className={cn(
                className,
                'grid grid-cols-1 gap-2 transition-all sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
            )}
        >
            {filteredProducts.map((product) => (
                <ProductCard key={product.title} {...product} />
            ))}
        </div>
    );
};
