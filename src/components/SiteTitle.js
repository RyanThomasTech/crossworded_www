import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import config from "../../gatsby-config"

class SiteTitle extends React.Component {
  innerTitle() {
    const siteTitle = config.siteMetadata.title
    return (
      <Link to={"/"} style={{ ...styles.linkStyle }}>
        {siteTitle}
      </Link>
    )
  }

  render() {
    const { size } = this.props
    const siteTitle = config.siteMetadata.title

    const largeStyle = {
      ...scale(1.5),
      marginTop: 0,
      marginBottom: rhythm(1),
    }

    const smallStyle = {
      fontFamily: "Montserrat, sans-serif",
      marginTop: 0,
      marginBottom: rhythm(0.5),
    }

    const large = <h1 style={largeStyle}>{this.innerTitle()}</h1>
    const small = <h3 style={smallStyle}>{this.innerTitle()}</h3>

    if (size === "large") {
      return large
    } else {
      return small
    }
  }
}

export default SiteTitle

const styles = {
  linkStyle: {
    boxShadow: `none`,
    textDecoration: `none`,
    color: `inherit`,
  },
}
