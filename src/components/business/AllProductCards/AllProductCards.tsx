import { products } from '@/constants';
import cn from 'classnames';
import { FC } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

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
