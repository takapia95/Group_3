import GoogleMapReact from 'google-map-react'
import LocationMaker from './LocationMaker'
import { useState } from 'react'

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map(eventData => {
    if(eventData.categories[0].id === 12 ){
      return <LocationMaker lat={eventData.geometries[0].coordinates[1]}
                            lng={eventData.geometries[0].coordinates[0]}/>
    }
    return null
  })
  return (
    <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAMBNlif9sG2Ioi3pCGkjYQzc6GWha8nuc'}}
            defaultCenter={ center}
            defaultZoom={ zoom }
            
        >
          {markers}
        </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 32.1574,
        lng: -82.9071
    },
    zoom: 0
}
export default Map