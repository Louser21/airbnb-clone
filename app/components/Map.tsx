"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const icon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


interface MapProps {
  center?: number[],
}

function ScrollZoom() {
  const map = useMap();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const zoom = Math.min(10, 2 + scrollY / 200);
      map.setZoom(zoom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [map]);
  return null;
}


const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={center as L.LatLngExpression || [51, -0.09]}
      zoom={center ? 4 : 1}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && (
        <Marker position={center as L.LatLngExpression} icon={icon}/>
      )}
      <ScrollZoom />
    </MapContainer>
  )
}

export default Map