import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

class NavBar extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="#">
              About
            </Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
