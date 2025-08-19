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
        <div className={cn(className, 'flex max-w-full flex-col gap-3')}>
            {items?.map((item) => (
                <DisclosureHeadless as="div" defaultOpen={true} key={item.title}>
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-h2-mobile lg:text-h2 font-secondary">{item.title}</span>
                        <ArrowDown className="group-data-open:rotate-180 transition-transform duration-300" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 pb-3 border-b border-gray text-left">{item.answer}</DisclosurePanel>
                </DisclosureHeadless>
            ))}
        </div>
    );
};
