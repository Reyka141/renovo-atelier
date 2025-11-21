'use client';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import { Button, HStack, VStack } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface OurWorkProps {
    className?: string;
}

export const OurWork: FC<OurWorkProps> = (props) => {
    const { className } = props;
    const t = useTranslations('OurWork');

    const swiperRef = useRef<SwiperCore | null>(null);
    const [current, setCurrent] = useState(1);
    const [pages, setPages] = useState(1);
    useEffect(() => {
        setPages(swiperRef.current?.snapGrid.length || 1);
    }, [swiperRef]);

    return (
        <div className={cn(className, 'container flex flex-col gap-6')}>
            <VStack max gap="16">
                <HStack max justify="between" className="border-b border-black pb-4">
                    <h2 className="font-secondary text-2xl md:text-4xl xl:text-6xl">{t('title')}</h2>

                    <HStack gap="4">
                        <Button className={cn("!p-6 cursor-pointer", swiperRef.current?.isBeginning && 'opacity-50 cursor-not-allowed')} onClick={() => swiperRef.current?.slidePrev()} variant="clear">
                            <ArrowRightIcon className="h-6 w-6 rotate-180" />
                        </Button>
                        <p className="font-secondary text-4xl tracking-[-0.4rem] min-w-[70px] text-center">
                            <span className="text-2xl xl:text-6xl">{current} /</span> {pages}
                        </p>
                        <Button className={cn("!p-6 cursor-pointer", swiperRef.current?.isEnd && 'opacity-50 cursor-not-allowed')} onClick={() => swiperRef.current?.slideNext()} variant="clear">
                            <ArrowRightIcon className="h-6 w-6" />
                        </Button>
                    </HStack>
                </HStack>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        setCurrent(swiper.activeIndex + 1);
                    }}
                    className="h-full w-full"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                    <SwiperSlide>Slide 10</SwiperSlide>
                </Swiper>
            </VStack>
        </div>
    );
};
