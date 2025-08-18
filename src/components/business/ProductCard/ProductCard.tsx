import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
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
        <div className={cn(className, 'flex flex-col gap-2 border border-black p-3 lg:gap-3')}>
            <Image
                src={image}
                alt={title}
                width={336}
                height={512}
                className="h-50 w-full object-contain sm:h-100 md:h-full"
            />
            <p className="">{t(title)}</p>
            <Button size="sm">
                <span className="flex w-full items-center justify-between">
                    {t('fromPrice', { price })}
                    <ArrowRightIcon className="h-6 w-6" />
                </span>
            </Button>
        </div>
    );
};
