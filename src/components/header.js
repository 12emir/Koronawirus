import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-800">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `1em`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: "20px",
          }}
        >
          <h1 className="text-teal-400">Koronawirus COVID-19</h1>
          <h2 className="text-sm">w Polsce i na świecie</h2>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
