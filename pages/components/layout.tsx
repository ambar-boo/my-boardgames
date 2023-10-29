import Header from './header'
import React from "react";
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['cyrillic-ext'] })
type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: MyComponentProps) {
    return (
        <div className={inter.className}>
            <Header />
            <main>{children}</main>
        </div>
    )
}