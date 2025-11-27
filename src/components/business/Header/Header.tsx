import { Burger, LanguageSwitcher, Link, SmoothScrollLink } from '@/components';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { BasketHeader } from '../Basket/BasketHeader';

interface HeaderProps {
    textColor?: 'white' | 'black';
}

const links = [
    {
        href: '#services',
        label: 'services',
    },
    {
        href: '#about',
        label: 'about',
    },
    {
        href: '#examples',
        label: 'examples',
    },
    {
        href: '#reviews',
        label: 'reviews',
    },
    {
        href: '#faq',
        label: 'faq',
    },
    {
        href: '#contacts',
        label: 'contacts',
    },
];

export async function Header({ textColor = 'white' }: HeaderProps) {
    const t = await getTranslations('Header');
    const textColorClass = textColor === 'black' ? 'text-black' : 'text-white';
    return (
        <header className="border-brown absolute top-0 right-0 left-0 z-50 container flex h-[78px] items-center justify-between border-b">
            <Link href="/">
                <Image src={`/header/logo-${textColor}.svg`} alt="logo" width={120} height={24} />
            </Link>
            <nav className="hidden lg:block">
                <ul className="flex lg:gap-6 xl:gap-16">
                    {links.map((link) => (
                        <li key={link.href}>
                            <SmoothScrollLink className={textColorClass} href={link.href}>
                                {t(link.label)}
                            </SmoothScrollLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex flex-1 items-center justify-end gap-3 md:flex-none lg:justify-end xl:gap-10">
                <BasketHeader textColor={textColor} />
                <LanguageSwitcher className="hidden md:block" textColor={textColor} />

                <Burger className="lg:hidden" links={links} textColor={textColor} />
            </div>
        </header>
    );
}
// h-[560px] md:h-[640px] xl:h-[900px]
