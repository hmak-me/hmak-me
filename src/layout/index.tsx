import React from "react"
import Header from "./header"
import "./index.styl"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
