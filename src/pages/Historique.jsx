import React from 'react'
import Header from "../components/Parametre/HeaderParametres.jsx"
import DivHeader from '../components/DivHeader.jsx';
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"
import Entrainements from '../components/Entrainements.jsx'
function Historique() {
    return (
      <div className="Accueil">
        <Header />
        <Entrainements/>
        <Footer />
      </div>
    );
  }
  export default Historique 