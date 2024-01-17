import React from 'react'
import Header from "../components/Header.jsx"
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"
import BulleGPT from '../components/BulleGPT.jsx';
import DivFooter from "../components/DivFooter.jsx"



function Profil() {
    return (
      <div className="Profil">
        <Header />
        <body>
          <Infos title="info"/>
          <Infos title="info"/>
          <BulleGPT />
          <DivFooter/>
        </body>
        <Footer />
      
      </div>
    );
  }
  
  export default Profil;
  