import { Button } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import ArrowRight  from '@/assets/icons/arrow-right.svg';
import { FC } from 'react';

interface ProductCardProps {
    className?: string;
    image: StaticImageData;
    title: string;
    price: string;
}
export const ProductCard: FC<ProductCardProps> = (props) => {
    const { className, image, title, price } = props;
    const t = useTranslations('OurServices');
    return (
        <div className={cn(className, 'flex flex-col gap-3 border border-black p-3')}>
            <Image src={image} alt={title} width={336} height={512} className="h-full w-full object-contain" />
            <p>{t(title)}</p>
            <Button size="sm">
                <span className="flex items-center justify-between text-xl">{t('fromPrice', { price })} <Image src={ArrowRight} alt="arrow-right" width={24} height={24} /></span>
            </Button>
        </div>
    );
};
