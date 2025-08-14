import { Burger, LanguageSwitcher, Link } from '@/components';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

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

export async function Header() {
    const t = await getTranslations('Header');
    return (
        <header className="border-brown container flex h-[78px] items-center justify-between border-b  absolute top-0 left-0 right-0 z-50">
            <Link href="/">
                <Image src={'/header/logo.svg'} alt="logo" width={120} height={24} />
            </Link>
            <nav>
                <ul className="hidden lg:flex lg:gap-6 xl:gap-16">
                    {links.map((link) => (
                        <li className="text-white" key={link.href}>
                            <Link href={link.href}>{t(link.label)}</Link>
                        </li>
                    ))}
                   
                   
                </ul>
            </nav>
            <div className="flex items-center gap-3 xl:gap-10">
                <div className="flex cursor-pointer items-center gap-2">
                    <span className="leading-[150%] font-normal text-white">1</span>
                    <Image src={'/header/cart.svg'} alt="cart" width={24} height={24} />
                </div>
                <LanguageSwitcher />

                <Burger className="lg:hidden" links={links} />
            </div>
        </header>
    );
}
// h-[560px] md:h-[640px] xl:h-[900px]
