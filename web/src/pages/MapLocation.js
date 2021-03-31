import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

import '../pages/MapLocation.css';
import 'leaflet/dist/leaflet.css';
import mapIcon from '../images/mapIcon';

function MapLocation() {
  const openMap = [-23.5414285,-46.6649087]

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : 
    (
      <Marker position={position} icon={mapIcon}>
        {/* <Popup>You are here</Popup> */}
      </Marker>
    )
  }
  
  return (
    <div id="page-map">
      <MapContainer 
        center={openMap}
        zoom={16}
        style={{ width: '100%', height: '100%'}}
        scrollWheelZoom={true} 
      >

        {/* <TileLayer url={ "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" } /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

        <LocationMarker />
      
      </MapContainer>
        
    </div>
    
  );
}

export default MapLocation;