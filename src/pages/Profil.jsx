import React from 'react'
import Header from "../components/Header.jsx"
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"

import "../components/Body.css"


function Profil() {
    return (
      <body>
      <div className="Profil">
        <Header />
        <Infos title="info"/>
        <Infos title="info"/>
        <Footer />
      </div>
      </body>
    );
  }
  
  export default Profil;
  