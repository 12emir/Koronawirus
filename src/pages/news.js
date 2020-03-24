import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContentLoader from "react-content-loader"
import gsap, { Back } from "gsap"
const News = () => {
  const [news, setNews] = useState([])
  const [sorted, setSorted] = useState([])

  useEffect(async () => {
    fetch("https://thevirustracker.com/free-api?countryTotal=pl").then(
      response => {
        response.json().then(async data => {
          setNews(data.countrynewsitems[0])
          setSorted(
            Object.values(data.countrynewsitems[0])
              .reverse()
              .slice(0, 90)
          )
          var tl = gsap.timeline()
          tl.staggerFrom(
            ".item",
            0.8,
            { x: -40, opacity: 0, ease: Back.easeOut, delay: 0.2 },
            0.08
          )
        })
      }
    )
  }, [])
  console.log(sorted.shift())
  return (
    <Layout className="bg-gray-100">
      <SEO title="Koronawirus mapa zachorowań i zgonów " />
      <div className="pl-3">
        <h1 className="font-bold mt-4 text-2xl text-teal-400">Latest news</h1>
      </div>
      {sorted.length < 1 ? (
        <ContentLoader
          viewBox="0 0 1360 900"
          height={900}
          width={1360}
          speed={1}
          backgroundColor="#e2e4e4"
          foregroundColor="#f5f5f5"
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
              className="item w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5  p-3    rounded-lg "
            >
              <a href={item.url} target="_blank">
                <div
                  key={item.newsid}
                  className="h-full bg-white flex flex-col justify-between items-start content-start shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-500 rounded-lg overflow-hidden pb-3  "
                >
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "50%, 50%",
                    }}
                    className="w-full h-64 md:h-40 lg:h-40 xl:h-40 mb-2"
                  ></div>
                  <span className=" text-teal-400 p-1 px-3 text-sm  absolute top-0 right-0 bg-purple-700 font-hairline rounded-lg ">
                    {item.time.slice(0, item.time.length - 10)}{" "}
                    <span className=" text-white ml-1">
                      {" "}
                      {item.time.slice(item.time.length - 4, item.time.length)}
                    </span>
                  </span>
                  <h3 className="text-sm text-gray-700 pl-3  py-2 pr-3 leading-tight font-thin tracking-wide">
                    {item.title}
                  </h3>
                  <span className=" ml-3 text-sm flex-initial  font-hairline text-purple-500 bg-gray-100 p-1 px-2 rounded-lg ">
                    Read more
                  </span>
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
