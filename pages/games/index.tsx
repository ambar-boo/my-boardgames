import type { ReactElement } from 'react'
import Layout from '../components/layout'
import List from '../components/games/list'
import type { NextPageWithLayout } from '../_app'

const Games: NextPageWithLayout = () => {
  return (
      <>
          <List />
      </>
  )
}

Games.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Games