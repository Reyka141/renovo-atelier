'use client';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import { useClickOutside } from '@/hooks/ui/useClickOutside';
import { ListboxButton, Listbox as ListBoxHeadless, ListboxOption, ListboxOptions } from '@headlessui/react';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

interface ListBoxProps {
    className?: string;
    items: {
        value: string;
        label: string;
        id: number;
    }[];
    onChange: (item: string) => void;
}
export const ListBox: FC<ListBoxProps> = (props) => {
    const { className, items, onChange } = props;
    const [selectedPerson, setSelectedPerson] = useState(items[0]);
    const ref = useClickOutside<HTMLButtonElement>(() => setIsOpen(false));
    const [isOpen, setIsOpen] = useState(false);
    const changeItem = (item: { value: string; label: string; id: number }) => {
        setSelectedPerson(item);
        setIsOpen(false);
        onChange(item.value);
    };
    const t = useTranslations('OurServices');
    return (
        <ListBoxHeadless value={selectedPerson} onChange={changeItem}>
            <ListboxButton
                ref={ref}
                className={cn(
                    'text-button flex items-center gap-2',
                    'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                    className,
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                {t(selectedPerson.label)}
                <ArrowDown className={cn('duration-200', isOpen && 'rotate-180')} />
            </ListboxButton>
            <ListboxOptions anchor="bottom" className="border-brown border bg-white focus:outline-none">
                {items.map((person) => (
                    <ListboxOption
                        key={person.id}
                        value={person}
                        className="text-button group data-focus:bg-brown/20 flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none"
                    >
                        {t(person.label)}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </ListBoxHeadless>
    );
};

{
    /* <ListBoxHeadless
            name="status"
            aria-label="select items"
            className={cn(className, 'text-button inline-flex appearance-none p-2')}
            {...rest}
        >
            {items.map((item) => (
                <option key={item.value} value={item.value}>
                    {t(item.label)}
                </option>
            ))}
            <ArrowDown  />
        </ListBoxHeadless> */
}
