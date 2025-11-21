import StarIcon from '@/assets/icons/star.svg';
import StarIconMobile from '@/assets/icons/star_mobile.svg';
import { HStack } from '@/components/ui';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { useIsMobile } from '@/hooks';

interface FeedbackItem {
    name: string;
    date: string;
    stars: string;
    text: string;
    image: string;
}

interface FeedbackCardProps {
    className?: string;
    item: FeedbackItem;
}
export const FeedbackCard: FC<FeedbackCardProps> = (props) => {
    const { className, item } = props;
    const isMobile = useIsMobile();
    return (
        <div className={cn(className, 'flex flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-16')}>
            <div className="flex w-full min-w-[296px] items-center gap-3 md:gap-6">
                <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="h-[64px] w-[64px] object-cover object-top md:h-[120px] md:w-[120px]"
                />
                <div className="flex flex-col md:gap-2">
                    <p className="text-base font-medium md:text-2xl">{item.name}</p>
                    <p className="text-base font-medium text-nowrap md:text-2xl">{item.date}</p>
                    <HStack gap="8">
                        {Array.from({ length: Number(item.stars) }).map((_, index) =>
                            isMobile ? <StarIconMobile key={index} /> : <StarIcon key={index} />,
                        )}
                    </HStack>
                </div>
            </div>
            <div className="h-px bg-black lg:h-auto lg:w-px" />
            <div className="flex items-center gap-2">
                <p className="text-base font-normal md:text-xl">{item.text}</p>
            </div>
        </div>
    );
};
