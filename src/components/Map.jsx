import 'leaflet/dist/leaflet.css'; // Importez les styles de Leaflet
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = ({ center, zoom, markerPosition }) => {
const mapContainerStyle = {
width: '100%',
height: '400px',
margin: 'auto auto', // Ajoutez cette ligne pour centrer le conteneur
};

return (
<MapContainer center={center} zoom={zoom} style={mapContainerStyle}>
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />

    <Marker position={markerPosition}>
    <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
    </Marker>
</MapContainer>
);
};

export default Map;
