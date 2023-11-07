import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Device } from "./Device";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

;

const center = { lat: 51.1609, lng: 4.9614 };

interface MapWrapperProps {
  devices: Device[];
}

const MapWrapper: React.FC<MapWrapperProps> = ({devices}) =>
{
  return (
    <MapContainer
      style={{ height: "50vh", width: "78vw" }}
      center={center}
      zoom={16}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {devices.map((device) => (
        <Marker
          key={device.id}
          position={[device.location.latitude, device.location.longitude]}
        >
          <Popup>{device.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );}

  export default MapWrapper;