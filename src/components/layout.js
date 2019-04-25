/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import SiteTitle from "./SiteTitle"
import NavBar from "./navbar"
import "./layout.css"
import Sidebar from "./sidebar"
import { jsx, css } from "@emotion/core"

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
      <div
        css={css`
          display: block;
          background-color: #ffffeb;
          color: #110;
          width: 75%;
          min-width: ${rhythm(20)};
          padding: ${rhythm(0.5)} ${rhythm(1)};
          margin: ${rhythm(1)} auto;
          max-width: ${rhythm(26)};
          overflow: auto;
          -webkit-box-shadow: 2px 3px 9px -3px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 2px 3px 9px -3px rgba(0, 0, 0, 0.75);
          box-shadow: 2px 3px 9px -3px rgba(0, 0, 0, 0.75);
        `}
      >
        <header>{header}</header>
        <NavBar />
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
