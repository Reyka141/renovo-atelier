'use client';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button, HStack, VStack } from '@/components/ui';
import { useIsMobile, useIsTablet } from '@/hooks';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FeedbackCard } from './FeedbackCard';

interface FeedbackProps {
    className?: string;
}

export const Feedback: FC<FeedbackProps> = (props) => {
    const { className } = props;
    const t = useTranslations('Feedback');
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const swiperRef = useRef<SwiperCore | null>(null);
    const [current, setCurrent] = useState(1);
    const [pages, setPages] = useState(1);
    useEffect(() => {
        if (isMobile) {
            setPages(swiperRef.current?.slides.length || 1);
        } else {
            setPages(swiperRef.current?.snapGrid.length || 1);
        }
    }, [swiperRef, isMobile]);

    const items = useMemo(
        () => [
            {
                name: t('feedback1.name'),
                id: 1,
                date: t('feedback1.date'),
                stars: t('feedback1.stars'),
                text: t('feedback1.text'),
                image: t('feedback1.image'),
            },
            {
                name: t('feedback2.name'),
                id: 2,
                date: t('feedback2.date'),
                stars: t('feedback2.stars'),
                text: t('feedback2.text'),
                image: t('feedback2.image'),
            },
            {
                name: t('feedback3.name'),
                id: 3,
                date: t('feedback3.date'),
                stars: t('feedback3.stars'),
                text: t('feedback3.text'),
                image: t('feedback3.image'),
            },
            {
                name: t('feedback4.name'),
                id: 4,
                date: t('feedback4.date'),
                stars: t('feedback4.stars'),
                text: t('feedback4.text'),
                image: t('feedback4.image'),
            },
        ],
        [t],
    );

    return (
        <div id="reviews" className={cn(className, 'container flex flex-col gap-6')}>
            <VStack max gap="64">
                <HStack max justify="between" className="border-b border-black pb-4">
                    <h2 className="font-secondary text-2xl md:text-4xl xl:text-6xl">{t('title')}</h2>

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
                    spaceBetween={isTablet ? 12 : 64}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        setCurrent(swiper.activeIndex + 1);
                    }}
                    className="h-full w-full"
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <FeedbackCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </VStack>
        </div>
    );
};
