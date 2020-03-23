import React, { useState, useEffect, PureComponent } from "react"
import { FaExclamation } from "react-icons/fa"
import { GiDeathSkull, GiHealthNormal } from "react-icons/gi"
import { AiOutlineReload } from "react-icons/ai"
import { FiCloudLightning, FiSearch } from "react-icons/fi"
import Wykresy from "../components/wykresy"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [data, setData] = useState([])
  const [poland, setPoland] = useState([])
  const [filteredArray, setFilteredArray] = useState([])
  const [lang, setLang] = useState(true)
  const [totalInfected, setTotalInfected] = useState(0)
  const [totalInfectedToday, setTotalInfectedToday] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [totalDeathsToday, setTotalDeathsToday] = useState(0)
  const [totalTotalRecovered, setTotalRecovered] = useState(0)
  const [lastUpdated, setLastUpdated] = useState("")
  const [chartData, setChartData] = useState([])
  const [chartTodayData, setChartTodayData] = useState([])
  const [byRecovered, setByRecovered] = useState([])
  const [byDeaths, setByDeaths] = useState([])

  useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries/poland").then(
      response => {
        response.json().then(function(info) {
          setPoland(info)
        })
      }
    )

    fetch("https://coronavirus-19-api.herokuapp.com/countries").then(
      response => {
        response.json().then(function(info) {
          setData(info)
          setFilteredArray(info)

          setChartData([
            {
              name: info[0].country,
              zakażonych: info[0].cases,
              zgonów: info[0].deaths,
              wyleczonych: info[0].recovered,
            },
            {
              name: info[1].country,
              zakażonych: info[1].cases,
              zgonów: info[1].deaths,
              wyleczonych: info[1].recovered,
            },
            {
              name: info[2].country,
              zakażonych: info[2].cases,
              zgonów: info[2].deaths,
              wyleczonych: info[2].recovered,
            },
            {
              name: info[3].country,
              zakażonych: info[3].cases,
              zgonów: info[3].deaths,
              wyleczonych: info[3].recovered,
            },
            {
              name: info[4].country,
              zakażonych: info[4].cases,
              zgonów: info[4].deaths,
              wyleczonych: info[4].recovered,
            },
            {
              name: info[5].country,
              zakażonych: info[5].cases,
              zgonów: info[5].deaths,
              wyleczonych: info[5].recovered,
            },
          ])

          const byRecoveredArray = info.sort((a, b) => {
            return b.recovered - a.recovered
          })

          setByRecovered([
            {
              name: byRecoveredArray[0].country,

              wyleczonych: byRecoveredArray[0].recovered,
            },
            {
              name: byRecoveredArray[1].country,

              wyleczonych: byRecoveredArray[1].recovered,
            },
            {
              name: byRecoveredArray[2].country,

              wyleczonych: byRecoveredArray[2].recovered,
            },
            {
              name: byRecoveredArray[3].country,

              wyleczonych: byRecoveredArray[3].recovered,
            },
            {
              name: byRecoveredArray[4].country,

              wyleczonych: byRecoveredArray[4].recovered,
            },
            {
              name: byRecoveredArray[5].country,

              wyleczonych: byRecoveredArray[5].recovered,
            },
          ])
          const byDeathsArray = info.sort((a, b) => {
            return b.deaths - a.deaths
          })
          setByDeaths([
            {
              name: byDeathsArray[0].country,

              zgonów: byDeathsArray[0].deaths,
            },
            {
              name: byDeathsArray[1].country,

              zgonów: byDeathsArray[1].deaths,
            },
            {
              name: byDeathsArray[2].country,

              zgonów: byDeathsArray[2].deaths,
            },
            {
              name: byDeathsArray[3].country,

              zgonów: byDeathsArray[3].deaths,
            },
            {
              name: byDeathsArray[4].country,

              zgonów: byDeathsArray[4].deaths,
            },
            {
              name: byDeathsArray[5].country,

              zgonów: byDeathsArray[5].deaths,
            },
          ])
          const byinfectedTodayArray = info.sort((a, b) => {
            return b.todayCases - a.todayCases
          })
          setChartTodayData([
            {
              name: byinfectedTodayArray[0].country,
              zakażonych: byinfectedTodayArray[0].todayCases,
              zgonów: byinfectedTodayArray[0].todayDeaths,
            },
            {
              name: byinfectedTodayArray[1].country,
              zakażonych: byinfectedTodayArray[1].todayCases,
              zgonów: byinfectedTodayArray[1].todayDeaths,
            },
            {
              name: byinfectedTodayArray[2].country,
              zakażonych: byinfectedTodayArray[2].todayCases,
              zgonów: byinfectedTodayArray[2].todayDeaths,
            },
            {
              name: byinfectedTodayArray[3].country,
              zakażonych: byinfectedTodayArray[3].todayCases,
              zgonów: byinfectedTodayArray[3].todayDeaths,
            },
            {
              name: byinfectedTodayArray[4].country,
              zakażonych: byinfectedTodayArray[4].todayCases,
              zgonów: byinfectedTodayArray[4].todayDeaths,
            },
            {
              name: byinfectedTodayArray[5].country,
              zakażonych: byinfectedTodayArray[5].todayCases,
              zgonów: byinfectedTodayArray[5].todayDeaths,
            },
          ])
        })
      }
    )
    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
      .then(response => {
        response.json().then(async function(info) {
          var date = new Date(info.locations[0].last_updated)
          var time = date.toLocaleTimeString("pl-PL")
          setLastUpdated(time)
        })
      })
      .then(info => {})
  }, [])
  console.log("Deaths", byDeaths)
  console.log("reoverercd", byRecovered)
  const totalInfectedHandler = async () => {
    let totalCases = 0
    let totalTodayCases = 0
    let totalDeathsCounter = 0
    let totalDeathstodayCounter = 0
    let totalRecoveredCounter = 0
    await data.forEach(item => {
      totalCases = totalCases + item.cases
      totalTodayCases = totalTodayCases + item.todayCases
      totalDeathsCounter = totalDeathsCounter + item.deaths
      totalDeathstodayCounter = totalDeathstodayCounter + item.todayDeaths
      totalRecoveredCounter = totalRecoveredCounter + item.recovered
    })
    await setTotalInfected(totalCases)
    await setTotalInfectedToday(totalTodayCases)
    await setTotalDeaths(totalDeathsCounter)
    await setTotalDeathsToday(totalDeathstodayCounter)
    await setTotalRecovered(totalRecoveredCounter)
  }

  totalInfectedHandler()

  const langSwitcher = () => {
    setLang(!lang)
  }

  const handler = e => {
    let term = e.target.value
    let termm = term.charAt(0).toUpperCase() + term.slice(1)
    const newArray = data.filter(function(item) {
      return item.country.includes(termm, 0)
    })
    setFilteredArray(newArray)
  }
  const searchOnBlur = e => {
    e.target.value = ""
    if (e.target.value == "") {
    }
  }
  const refresh = () => {
    window.location.reload()
  }

  return (
    <Layout className="">
      <SEO title="Home" />
      <button className="lang" onClick={langSwitcher}>
        {lang ? "English" : "Polski"}
      </button>
      <div className="mt-2 -mb-2 ">
        {" "}
        Aktualizacja:{" "}
        {lastUpdated ? (
          lastUpdated
        ) : (
          <AiOutlineReload
            style={{ display: "inline", marginBottom: "5px" }}
            className="spin"
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row flex-nowrap pt-2">
        <div className="w-full xl:w-1/2 lg:w-1/2 ">
          <div className="p-2">
            <span className="font-bold text-purple-800  rounded-md   text-2xl uppercase">
              {lang ? "Polska" : "Poland"}
            </span>
          </div>
          <div className=" ">
            <div className="bar  shadow-md bg-purple-600 stat-item">
              <span className="flex flex-row ">
                {" "}
                <FaExclamation style={{ marginTop: "3px" }} />{" "}
                {lang ? "Zakażonych: " : "Infected: "}
                {poland.cases ? (
                  poland.cases
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>

            <div className="bar shadow-md bg-purple-600 stat-item">
              <span className="flex flex-row">
                <FaExclamation style={{ marginTop: "3px" }} />{" "}
                {lang ? "Zakażonych dziś: " : "Infected today: "}
                {poland.todayCases ||
                poland.todayCases == [] ||
                poland.todayCases > 0 ? (
                  poland.todayCases
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>

            <div className="bar shadow-md bg-red-500 stat-item">
              <span className="flex flex-row">
                <GiDeathSkull
                  style={{ marginTop: "3px", marginRight: "5px" }}
                />{" "}
                {lang ? "Zgony: " : "Deaths: "}
                {poland.deaths ? (
                  poland.deaths
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>

            <div className="bar shadow-md bg-red-500 stat-item">
              <span className="flex flex-row">
                <GiDeathSkull
                  style={{ marginTop: "3px", marginRight: "5px" }}
                />{" "}
                {lang ? "Zgony dziś: " : "Deaths today: "}
                {poland.todayDeaths == [] || poland.todayDeaths > 0 ? (
                  poland.todayDeaths
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>

            <div className="bar shadow-md bg-teal-400 stat-item">
              <span className="flex flex-row">
                <GiHealthNormal
                  style={{ marginTop: "3px", marginRight: "5px" }}
                />{" "}
                {lang ? "Wyleczonych: " : "Recovered: "}
                {poland.recovered ? (
                  poland.recovered
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>

            <div className="bar shadow-md bg-gray-600 stat-item">
              <span className="flex flex-row">
                <FiCloudLightning
                  style={{ marginTop: "3px", marginRight: "5px" }}
                />{" "}
                {lang ? "Krytyczne przypadki: " : "Critical cases: "}
                {poland.critical ? (
                  poland.critical
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 lg:w-1/2  ">
          {" "}
          <div className="p-2">
            <span className="font-bold text-purple-800  rounded-md  text-2xl uppercase">
              {lang ? "Świat" : "World"}
            </span>
          </div>
          <div className=" ">
            <div className="bar shadow-md bg-purple-600">
              <span className="flex flex-row">
                <FaExclamation style={{ marginTop: "3px" }} />{" "}
                {lang ? "Zakażonych: " : "Infected: "}
                {totalInfected > 0 ? (
                  totalInfected
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>
            <div className="bar shadow-md bg-purple-600">
              <span className="flex flex-row">
                <FaExclamation style={{ marginTop: "3px" }} />{" "}
                {lang ? " Zakażonych dziś: " : "Infected today : "}
                {totalInfectedToday > 0 ? (
                  totalInfectedToday
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>
            <div className="bar shadow-md bg-red-500">
              <span className="flex flex-row">
                <GiDeathSkull
                  style={{ marginTop: "3px", marginRight: "5px" }}
                />{" "}
                {lang ? " Zgony : " : "Deaths : "}
                {totalDeaths > 0 ? (
                  totalDeaths
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>
            <div className="bar shadow-md bg-red-500">
              <span className="flex flex-row">
                <GiDeathSkull
                  style={{ marginTop: "3px", marginRight: "5px" }}
                />{" "}
                {lang ? " Zgony dziś: " : "Deaths today: "}
                {totalDeathsToday > 0 ? (
                  totalDeathsToday
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>

            <div className="bar shadow-md bg-teal-400">
              <span className="flex flex-row">
                <GiHealthNormal
                  style={{ marginTop: "3px", marginRight: "5px" }}
                />{" "}
                {lang ? " Wyleczonych: " : "Recovered: "}
                {totalTotalRecovered > 0 ? (
                  totalTotalRecovered
                ) : (
                  <AiOutlineReload className="spin" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="md:w-full w-full lg:w-1/2">
          <div className="pt-8">
            <span className="font-bold text-purple-800  rounded-md px-3  text-2xl uppercase">
              {lang ? "Top 6 krajów" : "Top 6 countries"}
            </span>
          </div>
          <ResponsiveContainer
            className="mt-4 text-xs -ml-4"
            width="100%"
            height={300}
          >
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend className="" />
              <Bar dataKey="zakażonych" fill="#805BD5" />
              <Bar dataKey="zgonów" fill="#F56565" />
              <Bar dataKey="wyleczonych" fill="#4FD1C5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-full w-full lg:w-1/2 xl:w-1/2">
          <div className="pt-8">
            <span className="font-bold text-purple-800  rounded-md px-3  text-2xl uppercase">
              {lang ? "Najwięcej zachorowań dziś" : "Top infected today"}
            </span>
          </div>{" "}
          <ResponsiveContainer
            className="mt-4 text-xs -ml-4"
            width="100%"
            height={300}
          >
            <BarChart data={chartTodayData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend className="" />
              <Bar dataKey="zakażonych" fill="#805BD5" />
              <Bar dataKey="zgonów" fill="#F56565" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="md:w-full w-full lg:w-1/2">
          <div className="pt-8">
            <span className="font-bold text-purple-800  rounded-md px-3  text-2xl uppercase">
              {lang ? "Najwięcej wyleczonych" : "Most recovered"}
            </span>
          </div>
          <ResponsiveContainer
            className="mt-4 text-xs -ml-4"
            width="100%"
            height={300}
          >
            <BarChart data={byRecovered}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend className="" />

              <Bar dataKey="wyleczonych" fill="#4FD1C5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-full w-full lg:w-1/2 xl:w-1/2">
          <div className="pt-8">
            <span className="font-bold text-purple-800  rounded-md px-3  text-2xl uppercase">
              {lang ? "Najwięcej zgonów " : "Most deaths"}
            </span>
          </div>{" "}
          <ResponsiveContainer
            className="mt-4 text-xs -ml-4"
            width="100%"
            height={300}
          >
            <BarChart data={byDeaths}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend className="" />

              <Bar dataKey="zgonów" fill="#F56565" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Wykresy lang={lang} />
      <div className="pt-8">
        <span className="font-bold text-purple-800  rounded-md px-3  text-2xl uppercase">
          {lang ? "Wszystkie kraje" : "All countries"}
        </span>
      </div>
      <div className="">
        <div className="w-full flex flex-row relative mt-4">
          <FiSearch className="search-icon text-purple-500" />
          <input
            className=" hover:bg-purple-200 transition-all  duration-150 rounded-full w-full h-16  shadow-md uppercase pl-12 mb-2  bg-purple-100  text-purple-500 placeholder-purple-500 hover:placeholder-purple-800"
            type="text"
            name="search"
            placeholder={lang ? "Wyszukaj kraj: " : "Search for country: "}
            onChange={handler}
            onBlur={searchOnBlur}
          ></input>
        </div>
        <span
          className="text-sm text-gray-600 ml-4 cursor-pointer"
          onClick={refresh}
        >
          Odśwież widok
        </span>
      </div>
      <div className="w-full text-center flex justify-center items-center mt-4">
        {filteredArray.length < 1 ? (
          <AiOutlineReload className="spin big" />
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex flex-row flex-wrap ">
        {filteredArray.map((item, i) => (
          <div className="grid-item p-3 flex-grow xl:w-1/4 lg:w-1/4 md:w-full sm:w-full ">
            <div
              className="p-3  bg-white  shadow-md rounded-lg"
              key={item.country}
            >
              <h3 className="text-purple-900 mb-2 font-black text-lg uppercase">
                {i + 1}. {item.country}
              </h3>

              <div class="text-purple-800 flex flex-col text-sm">
                <div className="flex flex-row justify-between text-purple-600">
                  <span> {lang ? "Zakażonych: " : "Infected: "}</span>
                  <span className="font-black">{item.cases}</span>
                </div>

                <div className="flex flex-row justify-between text-purple-600">
                  <span>
                    {" "}
                    {lang ? "Zakażonych dzis: " : "Infected today: "}
                  </span>{" "}
                  <span className="font-black">{item.todayCases}</span>
                </div>

                <div className="flex flex-row justify-between text-red-500">
                  <span> {lang ? "Zgony: " : "Deaths: "}</span>{" "}
                  <span className="font-black">{item.deaths}</span>
                </div>
                <div className="flex flex-row justify-between text-red-500">
                  <span> {lang ? "Zgony dziś: " : "Deaths today: "}</span>{" "}
                  <span className="font-black">{item.todayDeaths}</span>
                </div>
                <div className="flex flex-row justify-between text-teal-400">
                  <span> {lang ? "Wyleczonych: " : "Recovered: "}</span>{" "}
                  <span className="font-black">{item.recovered}</span>
                </div>
                <div className="flex flex-row justify-between text-gray-600">
                  <span>
                    {" "}
                    {lang ? "Krytyczne przypadki: " : "Critical cases: "}
                  </span>{" "}
                  <span className="font-black">{item.critical}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center mt-8 flex flex-col text-xs">
        <span className="font-bold uppercase text-purple-700 ">Donate</span>
        <div>BTC: 1LTS5Zoc4Edp3yUAr39K2sbqxrU9R6YyAu</div>
        <div>ETH: 0x6007687862f310aab1c153441b5c2d29ad333ef5</div>
        <div>USDT: 0x6007687862f310aab1c153441b5c2d29ad333ef5</div>
        <span className="font-bold uppercase text-purple-700 mt-8 ">API</span>
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
    </Layout>
  )
}

export default IndexPage
