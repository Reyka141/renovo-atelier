'use client';
import { useClickOutside } from '@/hooks/ui/useClickOutside';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC, useState } from 'react';

interface BurgerProps {
    className?: string;
    links: {
        href: string;
        label: string;
    }[];
}
export const Burger: FC<BurgerProps> = (props) => {
    const { className, links } = props;
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
    const t = useTranslations('Header');
    return (
        <div ref={ref} className={className}>
            <Menu>
                <MenuButton className="burger focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <input type="checkbox" id="burger" onChange={() => ''} checked={isOpen} />
                    <span />
                    <span />
                    <span />
                </MenuButton>
                <MenuItems
                    anchor="bottom end"
                    className="border-brown absolute top-full right-0 z-50 mt-1 flex w-48 origin-top-right flex-col gap-2 overflow-hidden border bg-white p-4 shadow-lg"
                >
                    {links.map((link) => (
                        <MenuItem key={link.href}>
                            <Link className="block data-focus:bg-blue-100" href={link.href}>
                                {t(link.label)}
                            </Link>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </div>
    );
};
