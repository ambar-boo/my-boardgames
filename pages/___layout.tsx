import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.scss'

const inter = Open_Sans({ subsets: ['cyrillic-ext'] })

export const metadata: Metadata = {
  title: 'Настолки',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
