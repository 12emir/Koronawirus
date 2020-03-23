import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GiVirus } from "react-icons/gi"

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
        Najświeższe info o jeb@#!ym wirusie.
      </span>
      <div className="flex items-left  pl-2 mt-3">
        <a href="/">
          <button className="py-1 px-3 bg-white text-color-purple-500 rounded text-sm mr-2">
            Home
          </button>
        </a>
        <a href="/map">
          <button className="py-1 px-3 bg-white text-color-purple-500 rounded text-sm">
            Mapa zachorowań
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
