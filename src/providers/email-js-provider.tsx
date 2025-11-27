import emailjs from '@emailjs/browser';
import { FC, useEffect } from 'react';

export const EmailJsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        emailjs.init({
            publicKey: 'AxX5jN7jJ0WvIXgtB',
        });
    }, []);
    return <>{children}</>;
};
