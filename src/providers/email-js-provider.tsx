import emailjs from '@emailjs/browser';
import { FC, useEffect } from 'react';

export const EmailJsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        emailjs.init({
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        });
    }, []);
    return <>{children}</>;
};
