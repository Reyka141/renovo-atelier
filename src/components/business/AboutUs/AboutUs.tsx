import leftSideImg from '@/assets/aboutUs/leftSideImg.png';
import rightSideImg from '@/assets/aboutUs/rightSideImg.png';
import { VStack } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

interface AboutUsProps {
    className?: string;
}
export const AboutUs: FC<AboutUsProps> = (props) => {
    const { className } = props;
    const t = useTranslations('AboutUs');
    return (
        <div id="about" className={cn(className, 'relative')}>
            <VStack
                max
                gap="24"
                align="center"
                className="relative z-10 mx-auto max-w-[768px] px-2 text-center md:px-28 md:py-3 xl:px-16 xl:py-12 2xl:py-56"
            >
                <h3 className="font-secondary lg:text-h1 text-h1-mobile max-w-fit border-b border-black pb-3">
                    {t('title')}
                </h3>
                <p className="lg:text-body-desktop text-body-mobile">{t('description')}</p>
            </VStack>
            <Image
                src={leftSideImg}
                alt="about-us"
                width={560}
                height={764}
                className="max-h-auto absolute top-0 left-0 hidden md:block md:max-w-43 xl:max-w-72 2xl:max-w-full"
            />

            <Image
                src={rightSideImg}
                alt="about-us"
                width={560}
                height={764}
                className="max-h-auto absolute top-0 right-0 hidden md:block md:max-w-43 xl:max-w-72 2xl:max-w-full"
            />
        </div>
    );
};
