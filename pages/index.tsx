import type { ReactElement } from 'react'
import Layout from './components/layout'
import Search from './components/search/search'
import List from './components/games/list'
import type { NextPageWithLayout } from './_app'

const Index: NextPageWithLayout = () => {
  return (
      <>
          <Search />
          <List />
      </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Index