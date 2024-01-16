import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Map from '../components/Map';

const Carte = () => {
  const position = [51.505, -0.09]; // Coordonnées de position par défaut

return (
<>
    <Header />
    <div style={{ paddingTop: "19vh", margin: 0 }}>
        <p style={{ fontWeight: "bold", fontSize: "5vh", margin: "5px 0px" }}>Nos salles :</p>
    </div>

    <Map center={position} zoom={13} markerPosition={position} />

    <Footer />
</>
);
};

export default Carte;
