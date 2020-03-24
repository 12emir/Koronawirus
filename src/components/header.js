import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-800 ">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `0.5em`,
        minHeight: "11vh",
      }}
    >
      <h1 className="text-teal-400 font-black text-2xl ">
        <span className="flex flex-row">Koronawirus COVID-19</span>
      </h1>
      <span className="text-white text-sm">
        Najświeższe info o koronawirusie.
      </span>
      <div className="flex items-left  pl-2 mt-3">
        <a href="/">
          <button className="py-1 px-3 bg-purple-600 text-purple-200 font-hairline uppercase rounded-lg text-sm mr-2 tracking-wide">
            Stats
          </button>
        </a>
        <a href="/map">
          <button className="py-1 px-3 bg-purple-600 text-purple-200  font-hairline uppercase rounded-lg text-sm mr-2 tracking-wide">
            Mapa
          </button>
        </a>
        <a href="/news">
          <button className="py-1 px-3 bg-purple-600 text-purple-200 font-hairline  uppercase rounded-lg text-sm tracking-wide">
            News
          </button>
        </a>
      </div>
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
