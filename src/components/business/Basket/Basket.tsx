import cn from 'classnames';
import { FC } from 'react';
interface BasketProps {
    className?: string;
}
export const Basket: FC<BasketProps> = (props) => {
    const { className } = props;
    return <div className={cn(className)}></div>;
};
