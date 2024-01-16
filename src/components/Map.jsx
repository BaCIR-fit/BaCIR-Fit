import 'leaflet/dist/leaflet.css'; // Importez les styles de Leaflet
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = ({ center, zoom, markerPosition }) => {
const mapContainerStyle = {
    width: '80%',
    height: '300px',
    margin: 'auto auto', // Ajoutez cette ligne pour centrer le conteneur
    
};
const position = [50.633333,3.066667]

return (
<MapContainer center={position} zoom={12} style={mapContainerStyle}>

    <TileLayer
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
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
