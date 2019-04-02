import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Sidebar = (props) => (
    <div
        style={{
            background: '#222222',
            maxWidth: 480,
            padding: '0.5rem',
            margin: '1',
        }}
    >
        <h3>{props.text}.</h3>
    </div>
);

export default Sidebar
