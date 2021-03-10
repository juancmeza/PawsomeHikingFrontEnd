import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import LocationOnIcon from '@material-ui/icons/LocationOn';import './map.css'
import ApiKey from './ApiKey.js'

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationOnIcon className="pin-icon" color='secondary'/>
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2"></h2>

    <div className="google-map">
      <div>{console.log(process.env.REACT_APP_API_KEY)}</div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `` }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map