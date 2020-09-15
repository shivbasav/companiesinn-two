import { Link } from "gatsby"
import React from "react"

const SubHeader = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `2rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `blue`,
            textDecoration: `none`,
          }}
        >
          Companiesinn
        </Link>
      </h1>
    </div>
  </header>
)



export default SubHeader
