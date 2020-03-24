import React, { useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"
import Header from "../components/header"
import SEO from "../components/seo"
import mapStyle from "../mapstyle"

const Marker = ({ children }) => children

const Map = () => {
  const [locations, setLocations] = useState([])
  useEffect(async () => {
    await fetch(
      "https://coronavirus-tracker-api.herokuapp.com/v2/locations"
    ).then(response => {
      response.json().then(async function(data) {
        let places = data.locations
        const sliced = places.slice(1, 190)

        await setLocations(sliced)
      })
    })
  }, [])

  return (
    <>
      <Header />
      <SEO title="Koronawirus mapa zachorowań i zgonów " />

      <div style={{ height: "85vh", width: "100%" }}>
        <div className="legenda flex text-center text-white text-sm  ">
          <div className="bg-purple-500 w-1/3 h-full  flex justify-center items-center content-center">
            Potwierdzone
          </div>
          <div className="bg-pink-500 w-1/3 flex justify-center items-center content-center">
            Zgony
          </div>

          <div className="bg-teal-500 w-1/3 flex justify-center items-center content-center">
            Wyleczeni
          </div>
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDmlsd-e_tZNjoXJ2khfYSgEyodVmwJiZ4",
          }}
          defaultCenter={{ lat: 50.6376, lng: 20.135171 }}
          defaultZoom={5}
          options={{ styles: mapStyle }}
        >
          {locations.map(item => (
            <Marker
              key={item.id}
              lat={item.coordinates.latitude}
              lng={item.coordinates.longitude}
            >
              <div className="text-white item-marker p-2 text-xs ">
                <div className="text-white ">{item.country}</div>
                <span className="text-purple-500">
                  {item.latest.confirmed}
                </span>{" "}
                <span className="text-pink-500">{item.latest.deaths}</span>{" "}
                <span className="text-teal-500">{item.latest.recovered}</span>{" "}
              </div>
            </Marker>
          ))}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default Map
