import React from 'react'
import Header from "../components/Header.jsx"
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"

function Accueil() {
    return (
      <div className="Accueil">
        <Header />
        <Infos title="first-info"/>
        <Infos title="info"/>
        <Infos title="info"/>
        <Infos title="info"/>
        <Infos title="last-info"/>
        <Footer />
      </div>
    );
  }
  
  export default Accueil;
  