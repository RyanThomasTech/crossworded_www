import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"
import { rhythm } from "../utils/typography"

class NavBar extends React.Component {
  render() {
    return (
      <nav
        style={{
          display: "box",
          margin: "auto",
          maxWidth: rhythm(24),
        }}
      >
        <ul class={styles.ul}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
