import React from "react"
import { Link } from "gatsby"
import SiteTitle from "./SiteTitle"
import NavBar from "./navbar"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <SiteTitle size="large">{children}</SiteTitle>
    } else {
      header = <SiteTitle size="small">{children}</SiteTitle>
    }

    return (
      <div id="__outer">
        <header>{header}</header>
        <div id="NavBar">
          <NavBar />
        </div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
