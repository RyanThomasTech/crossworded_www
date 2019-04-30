/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import Layout from "../components/layout"
import "./splash.css"

class splash extends React.Component {
  render() {
    return (
      <Layout location="splash">
        <div class="container">
          <span class="ryan-r">
            <h2>R</h2>
          </span>
          <span class="ryan-y">
            <h2>y</h2>
          </span>
          <span class="ryan-a0">
            <h2>a</h2>
          </span>
          <span class="ryan-n">
            <h2>n</h2>
          </span>
          <span class="ryan-t">
            <h2>T</h2>
          </span>
          <span class="ryan-h">
            <h2>h</h2>
          </span>
          <span class="ryan-o">
            <h2>o</h2>
          </span>
          <span class="ryan-m">
            <h2>m</h2>
          </span>
          <span class="ryan-a1">
            <h2>a</h2>
          </span>
          <span class="ryan-s">
            <h2>s</h2>
          </span>
        </div>
      </Layout>
    )
  }
}
export default splash
