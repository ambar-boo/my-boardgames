import type { ReactElement, ReactNode } from 'react'
import type { Metadata } from 'next'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Настолки',
}


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}