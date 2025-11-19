import React, { use } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const warehouses = useLoaderData();
  console.log(warehouses);
  return (
    <div>
      <h2 className="text-5xl">We are available in 64 districts</h2>
      <div></div>
      {/*  */}
      <div className="border w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"       
          />

          {warehouses.map((houses,index) => (
            <Marker key={index} position={[houses.latitude, houses.longitude]}>
              <Popup>
                <strong>{houses.district}</strong> <br /> Service Area: {houses.covered_area.join(',' )}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
