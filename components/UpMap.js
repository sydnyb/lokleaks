
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function UpMap({ markers }) {
  return (
    <MapContainer center={[26.8467, 80.9462]} zoom={7} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {markers.map((m, i) => (
        <Marker key={i} position={[26.8467 + i * 0.01, 80.9462 + i * 0.01]}>
          <Popup>{m.title || "Complaint"}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
