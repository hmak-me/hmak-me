import React from "react"
import SEO from "../../components/seo"
import styles from './index.module.styl'


const PortfolioPage = () => {
  return (
    <main>
      <SEO title="Portfolio" />
      <h1 className={styles.title}>Portfolio</h1>
    </main>
  )
}

export default PortfolioPage
