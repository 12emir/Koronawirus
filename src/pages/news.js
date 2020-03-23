import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContentLoader from "react-content-loader"

const News = () => {
  const [news, setNews] = useState([])
  const [sorted, setSorted] = useState([])

  useEffect(async () => {
    fetch("https://thevirustracker.com/free-api?countryTotal=pl").then(
      response => {
        response.json().then(async data => {
          setNews(data.countrynewsitems[0])
          setSorted(Object.values(data.countrynewsitems[0]).reverse())
        })
      }
    )
  }, [])
  console.log(sorted.shift())
  return (
    <Layout className="bg-gray-100">
      <SEO title="Koronawirus mapa zachorowań i zgonów " />
      <div className="pl-3">
        <h1 className="font-bold mt-4 text-2xl text-teal-500">Latest news</h1>
        <h2 className="text-purple-800 text-xs uppercase">
          Coronawirus Covid-19
        </h2>
      </div>
      {sorted.length < 1 ? (
        <ContentLoader
          viewBox="0 0 1360 900"
          height={900}
          width={1360}
          speed={1}
        >
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>
      ) : (
        ""
      )}

      <div className="flex flex-row flex-wrap">
        {sorted.map(item => {
          return (
            <div
              key={item.newsid}
              className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5  p-3 "
            >
              <a href={item.url} target="_blank">
                <div
                  key={item.newsid}
                  className="h-full bg-white shadow-xl rounded-lg overflow-hidden pb-3  "
                >
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "50%, 50%",
                    }}
                    className="w-full h-56 md:h-348 lg:h-32 xl:h-32 mb-2"
                  ></div>
                  <span className="uppercase text-teal-400 pl-3  text-sm ">
                    {item.time}
                  </span>
                  <h3 className="text-sm text-purple-700 pl-3 font-hairline pr-3">
                    {item.title}
                  </h3>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default News
