import { FC } from 'react';
import cn from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'secondary';
}

export const Input: FC<InputProps> = (props) => {
    const { className } = props;
    return (
        <input
            className={cn(className, 'border-gray border-b pb-2 outline-none focus:border-black')}
            {...props}
        ></input>
    );
};
