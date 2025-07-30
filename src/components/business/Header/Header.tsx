import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
    const t = await getTranslations('Header');
    return (
        <header className="mx-auto flex max-w-[var(--container-width)] items-center justify-between bg-black">
            <Image src={'/header/logo.svg'} alt="logo" width={120} height={24} />
            <nav className=" py-6">
                <ul className="flex gap-9 xl:gap-16">
                    <li className="">
                        {/* Меню навигации по разделам сайта */}
                        <Link href="/services">{t('services')}</Link>
                    </li>
                    <li className="">
                        <Link href="/about">{t('about')}</Link>
                    </li>
                    <li className="">
                        <Link href="/examples">{t('examples')}</Link>
                    </li>
                    <li className="">
                        <Link href="/reviews">{t('reviews')}</Link>
                    </li>
                    <li className="">
                        <Link href="/faq">{t('faq')}</Link>
                    </li>
                    <li className="">
                        <Link href="/contacts">{t('contacts')}</Link>
                    </li>
                </ul>
            </nav>
            <div className="">{/* <LanguageSwitcher /> */}</div>
        </header>
    );
}
// h-[560px] md:h-[640px] xl:h-[900px]