import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

class NavBar extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/about">
              About
            </Link>
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
