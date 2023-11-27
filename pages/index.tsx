import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Statistics from '../components/statistics/statistics'
import Search from '../components/search/search'
import List from '../components/games/list'
import type { NextPageWithLayout } from './_app'
import styles from "@/components/search/search.module.scss";
import React from "react";

const Index: NextPageWithLayout = () => {
  return (
      <>
          <Statistics />
          <div className={styles.wrapper}>
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