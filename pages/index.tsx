import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Search from '../components/search/search'
import List from '../components/games/list'
import type { NextPageWithLayout } from './_app'
import styles from "@/components/search/search.module.scss";
const Index: NextPageWithLayout = () => {
  return (
      <>
          <div className={`${styles.wrapper} ${styles.wrapper_image}`}>
              <div className={styles.main_page__image}>
                  <img src="./main-page-fon.jpg" alt=""/>
              </div>
          </div>
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