import { LanguageSwitcher, Link } from '@/components';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Header() {
    const t = await getTranslations('Header');
    return (
        <header className="mx-auto flex max-w-[var(--container-width)] items-center justify-between bg-black">
            <Link href="/">
                <Image src={'/header/logo.svg'} alt="logo" width={120} height={24} />
            </Link>
            <nav className="py-6">
                <ul className="flex gap-9 xl:gap-16">
                    <li className="text-white">
                        {/* Меню навигации по разделам сайта */}
                        <Link href="/services">{t('services')}</Link>
                    </li>
                    <li className="text-white">
                        <Link href="/about">{t('about')}</Link>
                    </li>
                    <li className="text-white">
                        <Link href="/examples">{t('examples')}</Link>
                    </li>
                    <li className="text-white">
                        <Link href="/reviews">{t('reviews')}</Link>
                    </li>
                    <li className="text-white">
                        <Link href="/faq">{t('faq')}</Link>
                    </li>
                    <li className="text-white">
                        <Link href="/contacts">{t('contacts')}</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-10">
                <div className="flex cursor-pointer items-center gap-2">
                    <span className="text-white font-normal leading-[150%]">1</span>
                    <Image src={'/header/cart.svg'} alt="cart" width={24} height={24} />
                </div>
                <LanguageSwitcher />
            </div>
        </header>
    );
}
// h-[560px] md:h-[640px] xl:h-[900px]
