import { Burger, LanguageSwitcher, Link } from '@/components';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface HeaderProps {
    textColor?: 'white' | 'black';
}

const links = [
    {
        href: '/services',
        label: 'services',
    },
    {
        href: '/about',
        label: 'about',
    },
    {
        href: '/examples',
        label: 'examples',
    },
    {
        href: '/reviews',
        label: 'reviews',
    },
    {
        href: '/faq',
        label: 'faq',
    },
    {
        href: '/contacts',
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
                            <Link className={textColorClass} href={link.href}>
                                {t(link.label)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex flex-1 items-center justify-end gap-3 md:flex-none lg:justify-end xl:gap-10">
                <Link href="/basket" className="flex cursor-pointer items-center gap-2">
                    <span className={`leading-[150%] font-normal ${textColorClass}`}>1</span>
                    <Image src={`/header/cart-${textColor}.svg`} alt="cart" width={24} height={24} />
                </Link>
                <LanguageSwitcher className="hidden md:block" textColor={textColor} />

                <Burger className="lg:hidden" links={links} textColor={textColor} />
            </div>
        </header>
    );
}
// h-[560px] md:h-[640px] xl:h-[900px]
