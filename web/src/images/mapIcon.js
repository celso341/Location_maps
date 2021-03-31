import Leaflet from "leaflet";

import mapMarkerImg from '../images/marker-icon.png';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [25, 41],
  iconAnchor: [35, 51],
  popupAnchor: [170, 2]
})

export default mapIcon;