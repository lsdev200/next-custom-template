"use client";
// components/Map.tsx
import React from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";

interface Location {
  lat: number;
  lng: number;
  name: string;
}

interface MapProps {
  locations: Location[];
  center: Location;
}

const Map: React.FC<MapProps> = ({ locations, center }) => {
  const [selectedLocation, setSelectedLocation] =
    React.useState<Location | null>(null);

  return (
    //! put your api key to running map
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelectedLocation(location)}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h2>{selectedLocation.name}</h2>
              <p>Latitude: {selectedLocation.lat}</p>
              <p>Longitude: {selectedLocation.lng}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
