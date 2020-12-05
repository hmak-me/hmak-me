import React from "react"
import Layout from "../../layout"
import SEO from "../../components/seo"
import styles from './index.module.styl'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 className={styles.title}>Contact</h1>
    </Layout>
  )
}

export default ContactPage
