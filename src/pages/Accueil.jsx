import React from 'react'
import Header from "../components/Header.jsx"
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"
import DivFooter from "../components/DivFooter.jsx"

function Accueil() {
    return (
      <div className="Accueil">
        <Header />
        <body>
        
          <Infos title="info"/>
          <Infos title="info"/>
          <Infos title="info"/>
          <Infos title="info"/>
          <DivFooter/>
        
        </body>
        <Footer />
      </div>
    );
  }
  
  export default Accueil;
  