import BgLeft from '@/assets/faqAnswers/bg-left.png';
import BgRight from '@/assets/faqAnswers/bg-right.png';
import { Disclosure, VStack } from '@/components/ui';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

interface FAQAnswersProps {
    className?: string;
}

export const FAQAnswers: FC<FAQAnswersProps> = (props) => {
    const { className } = props;
    const t = useTranslations('FAQAnswers');

    const items = [
        {
            title: t('title1'),
            answer: t('answer1'),
        },
        {
            title: t('title2'),
            answer: t('answer2'),
        },
        {
            title: t('title3'),
            answer: t('answer3'),
        },
    ];

    return (
        <div id="faq" className={cn(className, 'relative')}>
            <VStack
                max
                gap="24"
                align="center"
                className="relative z-10 mx-auto max-w-[768px] text-center sm:px-28 md:py-3 xl:px-16 xl:py-12 2xl:py-56"
            >
                <h3 className="font-secondary lg:text-h1 text-h1-mobile max-w-fit border-b border-black pb-3">
                    {t('title')}
                </h3>
                <Disclosure className="w-2xs sm:w-full" items={items} />
            </VStack>
            <Image
                src={BgLeft}
                alt="about-us"
                width={560}
                height={764}
                className="max-h-auto pointer-events-none absolute top-0 left-0 hidden md:block md:max-w-43 xl:max-w-72 2xl:max-w-full"
            />

            <Image
                src={BgRight}
                alt="about-us"
                width={560}
                height={764}
                className="max-h-auto pointer-events-none absolute top-0 right-0 hidden md:block md:max-w-43 xl:max-w-72 2xl:max-w-full"
            />
        </div>
    );
};
