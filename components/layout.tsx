import { ReactNode } from 'react';
import { Header } from './header';

export function Layout({ children }: {children?: ReactNode;}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer>FOOTER</footer>
        </>
    )
}