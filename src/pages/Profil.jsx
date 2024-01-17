import React from 'react'
import Header from "../components/Header.jsx"
import DivHeader from '../components/DivHeader.jsx';
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"
import BulleGPT from '../components/BulleGPT.jsx';

function Profil() {
    return (
      <div className="Profil">
        <Header /> <DivHeader/>
        <Infos title="info"/>
        <Infos title="info"/>
        <BulleGPT />
        <Footer />
      </div>
    );
  }
  
  export default Profil;
  