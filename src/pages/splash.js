/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import Layout from "../components/layout"
import "./splash.css"

/* TODO: javascript decorations
 * first priority is getting a css-primary 
 * website out there in case of NoScript users,
 * will be concerned with javascript decos later
 *
function mouseoverBrie() {
  let thingie = document.getElementsByClassName("brie")[0];
  thingie.style.color = "red";
}

*/

class splash extends React.Component {
  render() {
    return (
      <Layout location="splash">
        <span className="container">
          <span className="ryan-y">
            <h1>y</h1>
          </span>
          <span className="ryan-n">
            <h1>n</h1>
          </span>
          <span className="ryan-t">
            <h1>T</h1>
          </span>
          <span className="ryan-o">
            <h1>o</h1>
          </span>
          <span className="ryan-m">
            <h1>m</h1>
          </span>
          <span className="ryan-a1">
            <h1>a</h1>
          </span>
          <span className="ryan-s">
            <h1>s</h1>
          </span>
          <span className="verticalContainer-prog">
            <span className="prog-r prog">
              <h1>R</h1>
            </span>
            <span className="prog-before prog crossword">
              <h2>prog</h2>
            </span>
            <span className="prog-after prog crossword">
              <h2>ammer</h2>
            </span>
          </span>
          <span className="verticalContainer-artist artist">
            <span className="artist-a artist">
              <h1>a</h1>
            </span>
            <span className="artist-after artist crossword">
              <h2>rtist</h2>
            </span>
          </span>
          <span className="verticalContainer-fishkpr">
            <span className="fishkpr-before fishkpr crossword">
              <h2>fis</h2>
            </span>
            <span className="fishkpr-after fishkpr crossword">
              <h2>keeper</h2>
            </span>
            <span className="fishkpr-h fishkpr">
              <h1>h</h1>
            </span>
          </span>
        </span>
      </Layout>
    )
  }
}
export default splash
