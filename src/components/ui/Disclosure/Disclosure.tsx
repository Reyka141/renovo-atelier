import ArrowDown from '@/assets/icons/arrow-down.svg';
import { DisclosureButton, Disclosure as DisclosureHeadless, DisclosurePanel } from '@headlessui/react';
import cn from 'classnames';
import { FC } from 'react';

interface DisclosureProps {
    className?: string;
    items: {
        title: string;
        answer: string;
    }[];
}
export const Disclosure: FC<DisclosureProps> = (props) => {
    const { className, items } = props;
    return (
        <div className={cn(className, 'flex max-w-full flex-col gap-5')}>
            {items?.map((item) => (
                <DisclosureHeadless as="div" defaultOpen={true} key={item.title}>
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-h2-mobile lg:text-h2 font-secondary">{item.title}</span>
                        <ArrowDown className="transition-transform duration-300 group-data-open:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="border-gray mt-2 border-b pb-3 text-left">
                        {item.answer}
                    </DisclosurePanel>
                </DisclosureHeadless>
            ))}
        </div>
    );
};
