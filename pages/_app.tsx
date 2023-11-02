import type { ReactElement, ReactNode } from 'react'
import type { Metadata } from 'next'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { AppProvider } from './context/AppContext'
import './globals.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<AppProvider><Component {...pageProps} /></AppProvider>)
}