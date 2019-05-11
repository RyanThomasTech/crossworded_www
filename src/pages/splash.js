/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import Navbar from "../components/navbar"
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
      <div>
        <Navbar />
        <div className="container">
          <span className="ryan-y">
            <h1>y</h1>
          </span>
          <span className="ryan-n">
            <h1>n</h1>
          </span>
          <span className="ryan-h">
            <h1>h</h1>
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
          <span className="verticalContainer-entrtnr">
            <span className="entrtnr-before entrtnr crossword">
              <h2>enter</h2>
            </span>
            <span className="entrtnr-after entrtnr crossword">
              <h2>ainer</h2>
            </span>
            <span className="entrtnr-mid entrtnr">
              <h1>T</h1>
            </span>
          </span>
          <span className="verticalContainer-blog">
            <span className="blog-before blog crossword">
              <h2>bl</h2>
            </span>
            <span className="blog-after blog crossword">
              <h2>g</h2>
            </span>
            <span className="blog-mid blog">
              <h1>o</h1>
            </span>
          </span>
          <span className="verticalContainer-resume">
            <span className="resume-before resume crossword">
              <h2>resu</h2>
            </span>
            <span className="resume-after resume crossword">
              <h2>e</h2>
            </span>
            <span className="resume-mid resume">
              <h1>m</h1>
            </span>
          </span>
          <span className="verticalContainer-contact">
            <span className="contact-before contact crossword">
              <h2>cont</h2>
            </span>
            <span className="contact-after contact crossword">
              <h2>ct</h2>
            </span>
            <span className="contact-mid contact">
              <h1>a</h1>
            </span>
          </span>
        </div>
      </div>
    )
  }
}
export default splash
