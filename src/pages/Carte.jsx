import React from 'react'
import Header from "../components/Header.jsx"
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"

function Carte() {
    return (
      <div className="Carte">
        <Header />
        <Infos title="first-info"/>
        <Infos title="info"/>
        <Footer />
      </div>
    );
  }
  
  export default Carte;
  