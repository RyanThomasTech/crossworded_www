/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { jsx, css } from "@emotion/core"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const bodyMinWidth = rhythm(20)
    const bodyMaxWidth = rhythm(24)
    const bodyWidthParams = `min-width: ${bodyMinWidth};\nmax-width: ${bodyMaxWidth};\n`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          css={css`
            ${bodyWidthParams}
            margin: ${rhythm(1)} auto;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <p
          css={css`
            font-size: 14px;
            line-height: 14px;
            display: block;
            margin: ${rhythm(-1)} auto ${rhythm(1)};
            ${bodyWidthParams}
          `}
        >
          {post.frontmatter.date}
        </p>
        <div
          css={css`
            ${bodyWidthParams}
            margin: 0 auto;
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
