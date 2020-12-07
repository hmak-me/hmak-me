import React from "react"
import styles from "./index.module.styl"

const Button = ({children, icon, className, ...props}) => {
  return (
    <button className={`${styles.button} ${className || ''}`} {...props}>
      {icon}
      {children}
    </button>
  )
}

export default Button
