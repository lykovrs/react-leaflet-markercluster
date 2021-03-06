import React from 'react';

import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './../../constants';

// Helpers
function getStringPopup(name) {
  return (`
    <div>
      <b>Hello world!</b>
      <p>I am a ${name} popup.</p>
    </div>
  `);
}

function getLeafletPopup(name) {
  return L.popup({ minWidth: 200, closeButton: false })
    .setContent(`
      <div>
        <b>Hello world!</b>
        <p>I am a ${name} popup.</p>
      </div>
    `);
}

const redMarker = L.icon({
  iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markers = [
  {
    position: [49.8397, 24.0297], popup: getStringPopup('clustered'), options: { icon: redMarker },
  },
  { position: [50.4501, 30.5234] },
  { position: [52.2297, 21.0122] },
  { position: [50.0647, 19.9450] },
  { position: [48.9226, 24.7111] },
  { position: [48.7164, 21.2611] },
  { position: [51.5, -0.09], popup: getLeafletPopup('lonely') },
];

// E.G. (Exempli Gratia)
const MarkerPopupEGOne = () => (
  <Map
    className="markercluster-map"
    center={MAP_CENTER_COORDINATES}
    zoom={MAP_ZOOM}
    maxZoom={MAP_MAX_ZOOM}
  >

    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <MarkerClusterGroup markers={markers} />
  </Map>
);

export default MarkerPopupEGOne;
