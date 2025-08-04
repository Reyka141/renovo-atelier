import cn from 'classnames';
import NextLink from 'next/link';
import { FC } from 'react';

interface LinkProps {
    className?: string;
    href: string;
    children: React.ReactNode;
}

export const Link: FC<LinkProps> = (props) => {
    const { className, href, children } = props;
    return (
        <NextLink href={href} className={cn(className, '')}>
            {children}
        </NextLink>
    );
};
