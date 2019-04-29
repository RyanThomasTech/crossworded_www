/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import SiteTitle from "./SiteTitle"
import NavBar from "./navbar"
import Sidebar from "./sidebar"
import { Global, jsx, css } from "@emotion/core"

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
      <>
        <NavBar />
        <div
          css={css`
            display: block;
            background-color: #ffffeb;
            color: #110;
            min-width: ${rhythm(20)};
            padding: ${rhythm(0.5)} ${rhythm(1)};
            margin: ${rhythm(0.5)} auto ${rhythm(1)};
            overflow: auto;
          `}
        >
          <Global
            styles={css`
              body {
                background-color: #666;
              }
              a {
                color: #cc5500;
              }
            `}
          />
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
