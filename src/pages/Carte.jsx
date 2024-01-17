import React from 'react';
import logo from '../CIR_fit.svg';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Map from '../components/Map';

const Carte = () => {
  const position = [51.505, -0.09]; // Coordonnées de position par défaut

return (
<>
    <div className='FakeHeader'>
            <img src={logo} className="header-logo" alt="logo" />
    </div>

    <Header />
    <div>
        <p style={{ fontWeight: "bold", fontSize: "5vh", margin: "5px 0px" }}>Nos salles :</p>
    </div>

    <Map center={position} zoom={13} markerPosition={position} />

    <Footer />
</>
);
};

export default Carte;
