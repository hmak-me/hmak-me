import React from "react"
import styles from "./index.module.styl"

const Menu = ({ isOpen = false }: { open: boolean }) => (
  <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
    Menu
  </section>
)

export default Menu
