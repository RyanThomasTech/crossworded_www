import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="#">Resume</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
