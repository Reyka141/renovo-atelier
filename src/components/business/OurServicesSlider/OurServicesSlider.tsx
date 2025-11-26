'use client';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button, HStack, VStack } from '@/components/ui';
import { products } from '@/constants';
import { useIsMobile, useIsTablet } from '@/hooks';
import { useBasketStore } from '@/providers';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../ProductCard/ProductCard';

interface OurServicesSliderProps {
    className?: string;
}

export const OurServicesSlider: FC<OurServicesSliderProps> = (props) => {
    const { className } = props;
    const t = useTranslations('OurServices');
    const items = useBasketStore((state) => state.items);
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const swiperRef = useRef<SwiperCore | null>(null);
    const [current, setCurrent] = useState(1);
    const [pages, setPages] = useState(1);
    const filteredProducts = useMemo(
        () => products.filter((product) => !items.some((item) => item.id === product.title)),
        [items],
    );

    useEffect(() => {
        if (isMobile) {
            setPages(swiperRef.current?.slides.length || 1);
        } else {
            setPages(swiperRef.current?.snapGrid.length || 1);
        }
    }, [swiperRef, isMobile, items]);
    const slidesPerView = useMemo(() => (isMobile ? 1 : isTablet ? 3 : 4), [isMobile, isTablet]);

    return (
        <div className={cn(className, 'container flex flex-col gap-6')}>
            <VStack max gap="64">
                <HStack max justify="between" className="border-b border-black pb-4">
                    <h2 className="font-secondary text-2xl md:text-4xl xl:text-6xl">{t('anotherOffers')}</h2>

                    <HStack gap="4">
                        <Button
                            className={cn(
                                'cursor-pointer p-2 md:!p-3 xl:!p-6',
                                swiperRef.current?.isBeginning && 'cursor-not-allowed opacity-50',
                            )}
                            onClick={() => swiperRef.current?.slidePrev()}
                            variant="clear"
                        >
                            <ArrowRightIcon className="h-6 w-6 rotate-180" />
                        </Button>
                        <p className="font-secondary min-w-[41px] text-center text-2xl tracking-tighter xl:min-w-[70px] xl:text-4xl xl:tracking-[-0.4rem]">
                            <span className="text-2xl md:text-4xl xl:text-6xl">{current} /</span> {pages}
                        </p>
                        <Button
                            className={cn(
                                'cursor-pointer p-2 md:!p-3 xl:!p-6',
                                swiperRef.current?.isEnd && 'cursor-not-allowed opacity-50',
                            )}
                            onClick={() => swiperRef.current?.slideNext()}
                            variant="clear"
                        >
                            <ArrowRightIcon className="h-6 w-6" />
                        </Button>
                    </HStack>
                </HStack>

                <Swiper
                    spaceBetween={12}
                    slidesPerView={slidesPerView}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        setCurrent(swiper.activeIndex + 1);
                    }}
                    className="align-items-center h-full w-full"
                >
                    {filteredProducts.map((product) => (
                        <SwiperSlide className="h-full w-full" key={product.title}>
                            <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </VStack>
        </div>
    );
};
