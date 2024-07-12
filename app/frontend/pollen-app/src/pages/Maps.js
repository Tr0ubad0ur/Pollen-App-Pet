import React, { useEffect, useRef, useState } from 'react';
import {LoadScript } from '@react-google-maps/api';
import './pages.css';
import './Maps.css';
import Navigation from '../components/nav';

function getNormalizedCoord(coord, zoom) {
  const y = coord.y;
  let x = coord.x;
  const tileRange = 1 << zoom;

  if (y < 0 || y >= tileRange) {
    return null;
  }

  if (x < 0 || x >= tileRange) {
    x = ((x % tileRange) + tileRange) % tileRange;
  }
  return { x: x, y: y };
}

let pollen = "TREE_UPI";

class PollenMapType {
  tileSize;
  alt = null;
  maxZoom = 16;
  minZoom = 3;
  name = null;
  projection = null;
  radius = 6378137;
  constructor(tileSize) {
    this.tileSize = tileSize;
  }

  getTile(coord, zoom, ownerDocument) {
    const img = ownerDocument.createElement("img");
    const mapType = pollen;
    const normalizedCoord = getNormalizedCoord(coord, zoom);

    const x = coord.x;
    const y = coord.y;
    const key = "YOUR_API_KEY";
    img.style.opacity = 0.8;
    img.src = `https://pollen.googleapis.com/v1/mapTypes/${mapType}/heatmapTiles/${zoom}/${x}/${y}?key=${key}`;
    return img;
  }
  releaseTile(tile) {}
}

const Maps = ({ apiKey }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const eventListenersRef = useRef([]);

  useEffect(() => {
    if (mapRef.current && window.google && !map) {
      console.log("Google Maps API loaded and mapRef is available");
      const myLatLng = { lat: 40.3769, lng: -80.5417 };
      const newMap = new window.google.maps.Map(mapRef.current, {
        mapId: "ffcdd6091fa9fb03",
        zoom: 0,
        center: myLatLng,
        maxZoom: 16,
        minZoom: 3,
        restriction: {
          latLngBounds: { north: 80, south: -80, west: -180, east: 180 },
          strictBounds: true,
        },
        streetViewControl: false,
      });

      const pollenMapType = new PollenMapType(new window.google.maps.Size(256, 256));
      newMap.overlayMapTypes.insertAt(0, pollenMapType);

      setMap(newMap);

      const handleButtonClick = (type) => {
        console.log(`Button clicked: ${type}`);
        pollen = type;
        newMap.overlayMapTypes.removeAt(0);
        const newPollenMapType = new PollenMapType(new window.google.maps.Size(256, 256));
        newMap.overlayMapTypes.insertAt(0, newPollenMapType);
      };

      const buttons = ['tree', 'grass', 'weed'];
      buttons.forEach(buttonId => {
        const button = document.querySelector(`#${buttonId}`);
        if (button) {
          const listener = () => handleButtonClick(`${buttonId.toUpperCase()}_UPI`);
          button.addEventListener('click', listener);
          eventListenersRef.current.push({ button, listener });
        }
      });

      return () => {
        eventListenersRef.current.forEach(({ button, listener }) => {
          button.removeEventListener('click', listener);
        });
        newMap.overlayMapTypes.clear();
      };
    }
  }, [map]);

  return (
    <div className='container'>
      <h1>Карты</h1>
      <LoadScript googleMapsApiKey={apiKey} onLoad={() => console.log("Google Maps API loaded")}>
        <div id="container">
          <button type="button" id="tree">Деревья</button>
          <button type="button" id="grass">Трава</button>
          <button type="button" id="weed">Сорняки</button>
        </div>
        <div id="map" ref={mapRef}></div>
      </LoadScript>
      <div className='footer'>
        <Navigation />
      </div>
    </div>
  );
};

export default Maps;