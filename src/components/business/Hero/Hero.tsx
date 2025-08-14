import bg from '@/assets/hero/bg.png';
import { VStack } from '@/components/ui/Stack';
import cn from 'classnames';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { FC } from 'react';

interface HeroProps {
    className?: string;
}
export const Hero: FC<HeroProps> = async (props) => {
    const { className } = props;
    const t = await getTranslations('Hero');
    return (
        <div
            className={cn(className, 'relative h-[500px] pt-20 md:h-[640px] md:pt-24 xl:pt-28 2xl:h-[900px] 2xl:pt-36')}
        >
            <Image
                src={bg}
                alt="hero"
                width={1440}
                height={900}
                className="absolute top-0 left-0 h-full max-h-[500px] w-full object-cover md:max-h-[640px] 2xl:max-h-[900px]"
            />
            <div className="relative z-10 container">
                <VStack gap="16" max className="text-center md:text-left">
                    <p className="text-white">{t('subtitle')}</p>
                    <h1 className="font-secondary text-[80px] leading-[100%] tracking-[-0.02em] text-balance text-white md:text-[120px] md:leading-[80%] xl:text-[200px] 2xl:text-[240px]">
                        Renovo<span className="text-brown">&</span>
                        <span className="block md:inline">atelier</span>
                    </h1>
                </VStack>
            </div>
        </div>
    );
};
