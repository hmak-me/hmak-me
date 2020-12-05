import React from "react"
import Layout from "../../layout"
import SEO from "../../components/seo"
import styles from './index.module.styl'

const CVPage = () => {
  return (
    <Layout>
      <SEO title="CV" />
      <h1 className={styles.title}>CV</h1>
    </Layout>
  )
}

export default CVPage
