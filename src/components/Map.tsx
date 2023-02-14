'use client'
import { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api'
import exampleMapStyles from './GoogleMapStyle'

type Location = {
    lat: number
    lng: number
}

function Map () {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''
  const [location, setLocation] = useState<Location>({
    lat: 0,
    lng: 0
  })

  useEffect(() => {
    if ('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords
        setLocation({ lat: latitude, lng: longitude })
      })
    }
  }, [])

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerClassName='w-full h-screen'
        center={location}
        zoom={15}
        options={{
          styles: exampleMapStyles
        }}
      >
        <>
          <Circle
            onClick={(event) => {
              console.log('click')
            }}
            center={location}
          />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
