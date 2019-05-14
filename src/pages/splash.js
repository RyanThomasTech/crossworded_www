/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import Navbar from "../components/navbar"
import styles from "./splash.module.css"

console.log(styles)

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

const nameStyle = css`
  font-family: "roboto_monoregular", monospace;
  font-size: 64px;
  margin: 0;
  line-height: 1.1;
  font-weight: 900;
`

class splash extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className={styles.container}>
            <span id={styles.ryan_y} css={nameStyle}>
              y
            </span>
            <span id={styles.ryan_n} css={nameStyle}>
              n
            </span>
            <span id={styles.ryan_h} css={nameStyle}>
              h
            </span>
            <span id={styles.ryan_m} css={nameStyle}>
              m
            </span>
            <span className={styles.verticalContainer} id={styles.vc_prog}>
              <span className={styles.mid} css={nameStyle}>
                <a
                  href="https://github.com/ryanthomastech"
                  title="Github"
                  className="splashLink"
                >
                  R
                </a>
              </span>
              <span className={styles.before}>
                <h2>prog</h2>
              </span>
              <span className={styles.after}>
                <h2>ammer</h2>
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_artist}>
              <span className={styles.mid} css={nameStyle}>
                a
              </span>
              <span className={styles.after}>
                <h2>rtist</h2>
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_entrtnr}>
              <span className={styles.before}>
                <h2>enter</h2>
              </span>
              <span className={styles.after}>
                <h2>ainer</h2>
              </span>
              <span className={styles.mid} css={nameStyle}>
                T
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_blog}>
              <span className={styles.before}>
                <h2>bl</h2>
              </span>
              <span className={styles.after}>
                <h2>g</h2>
              </span>
              <span className={styles.mid} css={nameStyle}>
                o
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_resume}>
              <span className={styles.before}>
                <h2>re</h2>
              </span>
              <span className={styles.after}>
                <h2>ume</h2>
              </span>
              <span className={styles.mid} css={nameStyle}>
                s
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_contact}>
              <span className={styles.before}>
                <h2>cont</h2>
              </span>
              <span className={styles.after}>
                <h2>ct</h2>
              </span>
              <span className={styles.mid} css={nameStyle}>
                a
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
