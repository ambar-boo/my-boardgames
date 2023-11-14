import type { ReactElement } from 'react'
import Layout from '../../../components/layout'
import GameCard from '../../../components/games/game'
import { useRouter } from 'next/router'
import type { NextPageWithLayout } from '../../_app'

const Game: NextPageWithLayout = () => {
  return (
      <>
          <GameCard />
      </>
  )
}

Game.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Game