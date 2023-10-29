import Header from './header'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['cyrillic-ext'] })

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            <Header />
            <main>{children}</main>
            2
        </div>
    )
}