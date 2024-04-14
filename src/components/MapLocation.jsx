
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapLocation = ({popup_text,position}) => {
    // const position = [51.505, -0.09];
    console.log(popup_text,position)
  return (
    <div className="w-full h-screen flex items-center justify-center">
    <MapContainer center={position} zoom={13} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          {popup_text}
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  );
};

export default MapLocation;
