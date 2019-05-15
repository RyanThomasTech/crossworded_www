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

const crosswordStyle = css`
  font-family: "roboto_monoregular", monospace;
  font-size: 50px;
  margin: 0;
  line-height: 41px;
  font-weight: 600;
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
                  className={styles.splashLink}
                >
                  R
                </a>
              </span>
              <span className={styles.before} css={crosswordStyle}>
                prog
              </span>
              <span className={styles.after} css={crosswordStyle}>
                ammer
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_artist}>
              <span className={styles.mid} css={nameStyle}>
                a
              </span>
              <span className={styles.after} css={crosswordStyle}>
                rtist
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_entrtnr}>
              <span className={styles.before} css={crosswordStyle}>
                enter
              </span>
              <span className={styles.after} css={crosswordStyle}>
                ainer
              </span>
              <span className={styles.mid} css={nameStyle}>
                T
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_blog}>
              <span className={styles.before} css={crosswordStyle}>
                bl
              </span>
              <span className={styles.after} css={crosswordStyle}>
                g
              </span>
              <span className={styles.mid} css={nameStyle}>
                o
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_resume}>
              <span className={styles.before} css={crosswordStyle}>
                re
              </span>
              <span className={styles.after} css={crosswordStyle}>
                ume
              </span>
              <span className={styles.mid} css={nameStyle}>
                s
              </span>
            </span>
            <span className={styles.verticalContainer} id={styles.vc_contact}>
              <span className={styles.before} css={crosswordStyle}>
                cont
              </span>
              <span className={styles.after} css={crosswordStyle}>
                ct
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
