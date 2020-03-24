/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1280,
          padding: "0em 0.8em",
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="w-full text-center mt-8 flex flex-col text-xs">
            <span className="font-bold uppercase text-purple-700 ">Donate</span>
            <div>BTC: 1LTS5Zoc4Edp3yUAr39K2sbqxrU9R6YyAu</div>
            <div>ETH: 0x6007687862f310aab1c153441b5c2d29ad333ef5</div>
            <div>USDT: 0x6007687862f310aab1c153441b5c2d29ad333ef5</div>
            <span className="font-bold uppercase text-purple-700 mt-8 ">
              API
            </span>
            <a href="https://thevirustracker.com/api">
              https://thevirustracker.com/api
            </a>
            <a href="https://coronavirus-19-api.herokuapp.com/countries">
              https://coronavirus-19-api.herokuapp.com/countries
            </a>
            <a
              href="       https://coronavirus-tracker-api.herokuapp.com/v2/locations
"
            >
              {" "}
              https://coronavirus-tracker-api.herokuapp.com/v2/locations
            </a>

            <a
              className="mt-4 text-lg uppercase text-purple-700 mb-8"
              href="mailto:emir.alobedi@gmail.com"
            >
              Kontakt
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
