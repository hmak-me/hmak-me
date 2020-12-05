import React from "react"
import Layout from "../../layout"
import SEO from "../../components/seo"
import styles from './index.module.styl'


const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1 className={styles.title}>Portfolio</h1>
    </Layout>
  )
}

export default PortfolioPage
