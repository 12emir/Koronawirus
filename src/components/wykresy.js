import React, { useState, useEffect, PureComponent } from "react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const Wykresy = ({ lang }) => {
  const [infectedDaily, setInfectedDaily] = useState([])
  const [infectedTotal, setInfectedTotal] = useState([])

  useEffect(async () => {
    await fetch("https://thevirustracker.com/free-api?countryTimeline=pl").then(
      response => {
        response.json().then(async function(info) {
          const dates = await Object.keys(info.timelineitems[0])
          const values = await Object.values(info.timelineitems[0])
          await setInfectedDaily([
            {
              name: dates[dates.length - 12],
              zachorowan: values[values.length - 12].new_daily_cases,
            },
            {
              name: dates[dates.length - 11],
              zachorowan: values[values.length - 11].new_daily_cases,
            },
            {
              name: dates[dates.length - 10],
              zachorowan: values[values.length - 10].new_daily_cases,
            },
            {
              name: dates[dates.length - 9],
              zachorowan: values[values.length - 9].new_daily_cases,
            },
            {
              name: dates[dates.length - 8],
              zachorowan: values[values.length - 8].new_daily_cases,
            },
            {
              name: dates[dates.length - 7],
              zachorowan: values[values.length - 7].new_daily_cases,
            },
            {
              name: dates[dates.length - 6],
              zachorowan: values[values.length - 6].new_daily_cases,
            },
            {
              name: dates[dates.length - 5],
              zachorowan: values[values.length - 5].new_daily_cases,
            },
            {
              name: dates[dates.length - 4],
              zachorowan: values[values.length - 4].new_daily_cases,
            },
            {
              name: dates[dates.length - 3],
              zachorowan: values[values.length - 3].new_daily_cases,
            },
            {
              name: dates[dates.length - 2],
              zachorowan: values[values.length - 2].new_daily_cases,
            },
          ])

          await setInfectedTotal([
            {
              name: dates[dates.length - 12],
              zachorowan: values[values.length - 12].total_cases,
            },
            {
              name: dates[dates.length - 11],
              zachorowan: values[values.length - 11].total_cases,
            },
            {
              name: dates[dates.length - 10],
              zachorowan: values[values.length - 10].total_cases,
            },
            {
              name: dates[dates.length - 9],
              zachorowan: values[values.length - 9].total_cases,
            },
            {
              name: dates[dates.length - 8],
              zachorowan: values[values.length - 8].total_cases,
            },
            {
              name: dates[dates.length - 7],
              zachorowan: values[values.length - 7].total_cases,
            },
            {
              name: dates[dates.length - 6],
              zachorowan: values[values.length - 6].total_cases,
            },
            {
              name: dates[dates.length - 5],
              zachorowan: values[values.length - 5].total_cases,
            },
            {
              name: dates[dates.length - 4],
              zachorowan: values[values.length - 4].total_cases,
            },
            {
              name: dates[dates.length - 3],
              zachorowan: values[values.length - 3].total_cases,
            },
            {
              name: dates[dates.length - 2],
              zachorowan: values[values.length - 2].total_cases,
            },
          ])
        })
      }
    )
  }, [])
  return (
    <>
      <div className="pt-8">
        <span className="font-bold text-purple-800  rounded-md px-3  text-2xl uppercase">
          {lang ? "Zachorowania dzienne w Polsce" : "Poland - Daily infections"}
        </span>
      </div>
      <ResponsiveContainer
        className="mt-4 text-xs -ml-4"
        width="100%"
        height={300}
      >
        <LineChart width={730} height={250} data={infectedDaily}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="zachorowan" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <div className="pt-8">
        <span className="font-bold text-purple-800  rounded-md px-3  text-2xl uppercase">
          {lang
            ? " Zachorowania łącznie w Polsce"
            : "Poland - Total infections"}
        </span>
      </div>
      <ResponsiveContainer
        className="mt-4 text-xs -ml-4"
        width="100%"
        height={300}
      >
        <LineChart width={730} height={250} data={infectedTotal}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="zachorowan" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Wykresy
