import type { ReactElement } from 'react'
import Layout from './components/layout'
import List from './components/list'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
      <List />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Page