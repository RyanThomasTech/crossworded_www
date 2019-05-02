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
              <span class="brie-b"><h1>B</h1></span>
              <span class="brie-i"><h1>I</h1></span>
              <span class="brie-e"><h1>E</h1></span>
          <span class="ryan-r">
            <h1>R</h1>
          </span>
          <span class="ryan-y">
            <h1>y</h1>
          </span>
          <span class="ryan-a0">
            <h1>a</h1>
          </span>
          <span class="ryan-n">
            <h1>n</h1>
          </span>
          <span class="ryan-t">
            <h1>T</h1>
          </span>
          <span class="ryan-h">
            <h1>h</h1>
          </span>
          <span class="ryan-o">
              <h1>o</h1>
          </span>
          <span class="ryan-m">
            <h1>m</h1>
          </span>
          <span class="ryan-a1">
            <h1>a</h1>
          </span>
          <span class="ryan-s">
            <h1>s</h1>
          </span>
        </div>
      </Layout>
    )
  }
}
export default splash
