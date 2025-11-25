'use client';
import { useBasketStore } from '@/providers';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface BasketHeaderProps {
    textColor?: 'white' | 'black';
}
export const BasketHeader: FC<BasketHeaderProps> = (props) => {
    const { textColor = 'white' } = props;
    const textColorClass = textColor === 'black' ? 'text-black' : 'text-white';
    const items = useBasketStore((state) => state.items);
    return (
        <Link href="/basket" className="flex cursor-pointer items-center gap-2">
            <span className={`leading-[150%] font-normal ${textColorClass}`}>{items.length}</span>
            <Image src={`/header/cart-${textColor}.svg`} alt="cart" width={24} height={24} />
        </Link>
    );
};
