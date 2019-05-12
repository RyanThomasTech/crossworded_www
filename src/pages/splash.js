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
        <div>
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
            <span className="ryan-m">
              <h1>m</h1>
            </span>
            <span className="verticalContainer-prog">
              <span className="mid prog">
                <a
                  href="https://github.com/ryanthomastech"
                  title="Github"
                  className="splashLink"
                >
                  <h1>R</h1>
                </a>
              </span>
              <span className="before prog crossword">
                <h2>prog</h2>
              </span>
              <span className="after prog crossword">
                <h2>ammer</h2>
              </span>
            </span>
            <span className="verticalContainer-artist artist">
              <span className="mid artist">
                <h1>a</h1>
              </span>
              <span className="after artist crossword">
                <h2>rtist</h2>
              </span>
            </span>
            <span className="verticalContainer-entrtnr">
              <span className="before entrtnr crossword">
                <h2>enter</h2>
              </span>
              <span className="after entrtnr crossword">
                <h2>ainer</h2>
              </span>
              <span className="mid entrtnr">
                <h1>T</h1>
              </span>
            </span>
            <span className="verticalContainer-blog">
              <span className="before blog crossword">
                <h2>bl</h2>
              </span>
              <span className="after blog crossword">
                <h2>g</h2>
              </span>
              <span className="mid blog">
                <h1>o</h1>
              </span>
            </span>
            <span className="verticalContainer-resume">
              <span className="before resume crossword">
                <h2>re</h2>
              </span>
              <span className="after resume crossword">
                <h2>ume</h2>
              </span>
              <span className="mid resume">
                <h1>s</h1>
              </span>
            </span>
            <span className="verticalContainer-contact">
              <span className="before contact crossword">
                <h2>cont</h2>
              </span>
              <span className="after contact crossword">
                <h2>ct</h2>
              </span>
              <span className="mid contact">
                <h1>a</h1>
              </span>
            </span>
          </div>
          <div
              css={css`
              font-family: "roboto_monoregular";
              text-align: center;
              margin: 0 auto 0 auto;
              font-size: 30px;
            `}
          >
            I know that I know nothing.
          </div>
        </div>
      </div>
    )
  }
}
export default splash
