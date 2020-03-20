import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { AiOutlineReload } from "react-icons/ai"

const IndexPage = () => {
  const [data, setData] = useState([])
  const [poland, setPoland] = useState([])
  const [filteredArray, setFilteredArray] = useState([])

  useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries").then(
      response => {
        response.json().then(function(info) {
          setData(info)
          setFilteredArray(info)
        })
      }
    )

    fetch("https://coronavirus-19-api.herokuapp.com/countries/poland").then(
      response => {
        response.json().then(function(info) {
          setPoland(info)
        })
      }
    )
  }, [])

  const handler = e => {
    let term = e.target.value
    let termm = term.charAt(0).toUpperCase() + term.slice(1)
    const newArray = data.filter(function(item) {
      return item.country.includes(termm, 0)
    })
    setFilteredArray(newArray)
    console.log(newArray)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <p>Najnowsze informacje dot. Koronawirusa w Polsce i na świecie</p>
      <div className="flex flex-wrap lg:flex-row xl:flex-row md:flex-col sm:flex-col flex-col lg:text-lg xl:text-lg md:text-2xl text-xl ">
        <div className="p-2 text-white bg-purple-800 rounded m-2 ">
          <span className="flex flex-row">
            {" "}
            Zakażonych:{" "}
            {poland.cases ? poland.cases : <AiOutlineReload className="spin" />}
          </span>
        </div>
        <div className="p-2 text-white bg-purple-800 rounded m-2">
          <span className="flex flex-row">
            Zakażonych dziś:{" "}
            {poland.todayCases ? (
              poland.todayCases
            ) : (
              <AiOutlineReload className="spin" />
            )}
          </span>
        </div>

        <div className="p-2 text-white bg-red-700 rounded m-2">
          <span className="flex flex-row">
            Zgony:{" "}
            {poland.deaths ? (
              poland.deaths
            ) : (
              <AiOutlineReload className="spin" />
            )}
          </span>
        </div>

        <div className="p-2 text-white bg-red-700 rounded m-2">
          <span className="flex flex-row">
            Zgony dziś:{" "}
            {poland.todayDeaths ? (
              poland.todayDeaths
            ) : (
              <AiOutlineReload className="spin" />
            )}
          </span>
        </div>

        <div className="p-2 text-white bg-green-500 rounded m-2">
          <span className="flex flex-row">
            Wyleczonych:{" "}
            {poland.recovered ? (
              poland.recovered
            ) : (
              <AiOutlineReload className="spin" />
            )}
          </span>
        </div>

        <div className="p-2 text-white bg-purple-800 rounded m-2">
          <span className="flex flex-row">
            Krytyczne przypadki:{" "}
            {poland.critical ? (
              poland.critical
            ) : (
              <AiOutlineReload className="spin" />
            )}
          </span>
        </div>
      </div>

      <input
        className="rounded-lg w-full h-16 mt-6 shadow-md text-center  mb-8 text-purple-500 placeholder-purple-500 hover:placeholder-purple-800"
        type="text"
        name="search"
        placeholder={"Wyszukaj kraj..."}
        onChange={handler}
      ></input>

      <div className="w-full text-center flex justify-center items-center">
        {filteredArray.length < 1 ? (
          <AiOutlineReload className="spin big" />
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex flex-row flex-wrap">
        {filteredArray.map(item => (
          <div className=" p-3 flex-grow xl:w-1/4 lg:w-1/4 md:w-full sm:w-full">
            <div className="p-3  shadow-md rounded-lg" key={item.country}>
              <h3 className="text-purple-700 font-black text-lg uppercase">
                {item.country}
              </h3>

              <div class="text-purple-800 flex flex-col text-sm">
                <div className="flex flex-row justify-between ">
                  <span> Zakażonych: </span>
                  <span className="font-black">{item.cases}</span>
                </div>

                <div className="flex flex-row justify-between">
                  <span> Zakażonych dzis: </span>{" "}
                  <span className="font-black">{item.todayCases}</span>
                </div>

                <div className="flex flex-row justify-between">
                  <span> Zgonów: </span>{" "}
                  <span className="font-black">{item.deaths}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span> Zgonów dziś: </span>{" "}
                  <span className="font-black">{item.todayDeaths}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span> Wyleczonych: </span>{" "}
                  <span className="font-black">{item.recovered}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span> Krytyczne przypadki: </span>{" "}
                  <span className="font-black">{item.critical}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center mt-8 flex flex-col text-sm">
        <span className="font-bold ">Donate</span>
        <div>BTC: 1LTS5Zoc4Edp3yUAr39K2sbqxrU9R6YyAu</div>
        <div>ETH: 0x6007687862f310aab1c153441b5c2d29ad333ef5</div>
        <div>USDT: 0x6007687862f310aab1c153441b5c2d29ad333ef5</div>

        <a className="mt-4" href="mailto:emir.alobedi@gmail.com">
          Kontakt
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
