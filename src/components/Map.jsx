import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importez les styles de Leaflet
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import InfoSalle from "../components/InfoSalle.jsx";
import icon from '../icons/location-dot.svg';

const Map = ({ center, zoom, markerPosition }) => {
const mapContainerStyle = {
    width: '80%',
    height: '300px',
    margin: 'auto auto',
};

const [infoSalleVisible, setInfoSalleVisible] = useState(false); //Afficher ou non la case des infos sur la salle
const [selectedMarker, setSelectedMarker] = useState(null); //Afficher les bonnes datas

const toggleInfoSalleVisibility = (marker) => {
    setInfoSalleVisible(true);
    setSelectedMarker(marker);
};

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 30],
});

L.Marker.prototype.options.icon = DefaultIcon;

  const position = [50.633333, 3.066667]; // position lille

//Données qu'il faudra charger sur la page API ALED
const positionsMarkers = [
    { title: "BaCIR Fit Lille", coordinates: [50.633333, 3.066667], adress: "52 rue du Zouloulou", horaires: "8h-22h", state:"Fermé", freq:"Faible"},
    { title: "BaCIR Fit Panam", coordinates: [48.8566, 2.3522], adress: "52 rue du Zouloulou", horaires: "8h-22h", state:"Ouvert" ,freq:"Modérée"},
    { title: "BaCIR Fit Madrid", coordinates: [40.4168, -3.7038], adress: "52 rue du Zouloulou", horaires: "8h-22h", state:"Ouvert", freq:"Elevée",},
];

return (
    <>
    <MapContainer center={position} zoom={12} style={mapContainerStyle}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        />

        {positionsMarkers.map((position, index) => (
            <Marker
                key={index}
                position={position.coordinates}
                eventHandlers={{ click: () => toggleInfoSalleVisibility(position) }}
            >
            <Popup>
                {position.title}
            </Popup>
            </Marker>
        ))}

    </MapContainer>

    {infoSalleVisible && selectedMarker && (
        <InfoSalle
            title={selectedMarker.title}
            adress={selectedMarker.adress}
            horaires={selectedMarker.horaires}
            state={selectedMarker.state}
            freq={selectedMarker.freq}
        />
    )}
    </>
);
};

export default Map;
