import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '2' | '4' | '6' | '16' | '24' | '32' | '64';

const justifyClasses: Record<FlexJustify, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
};

const alignClasses: Record<FlexAlign, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
};

const directionClasses: Record<FlexDirection, string> = {
    row: 'flex-row',
    column: 'flex-col',
};

const gapClasses: Record<FlexGap, string> = {
    2: 'gap-0.5',
    4: 'gap-1', // gap-1 = 4px в Tailwind
    6: 'gap-1.5', // gap-2 = 8px в Tailwind
    16: 'gap-2 sm:gap-4', // gap-4 = 16px в Tailwind
    24: 'gap-4 sm:gap-6', // gap-6 = 24px в Tailwind
    32: 'gap-6 sm:gap-8', // gap-8 = 32px в Tailwind
    64: 'gap-6 sm:gap-16', // gap-16 = 64px в Tailwind
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const { className, children, justify = 'start', align = 'center', direction = 'row', gap, max } = props;

    const classes = [
        'flex',
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        max && 'w-full',
        className,
    ].filter(Boolean);

    return <div className={classes.join(' ')}>{children}</div>;
};
