import React from "react"
import Layout from "../layout"
import SEO from "../components/seo"
import styles from "./index.module.styl"
import Button from "../components/button"
import { Link } from "gatsby"

const HomePage = () => (
  <Layout className={styles.homePage}>
    <SEO title="Home" />

    <div className="container">
      <div className={styles.info}>
        <div className={styles.hi}>Hi, I'm</div>
        <div className={styles.name}>Hossein</div>
        <div className={styles.jobTitle}>Web Developer</div>
      </div>

      <Link to='/cv'>
        <Button>Download CV</Button>
      </Link>
    </div>
  </Layout>
)

export default HomePage
