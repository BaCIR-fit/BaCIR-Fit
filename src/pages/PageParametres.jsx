// Parametres.js
import React from 'react';
import HeaderParametres from '../components/Parametre/HeaderParametres.jsx'
import Parametres from '../components/Parametre/Parametres.jsx'
import Footer from "../components/Footer.jsx"


const PageParametres = () => {
  if(sessionStorage.getItem("user_data")){
    return (
      <div>
      <HeaderParametres/>
      <Parametres/>
      <Footer />
      </div>
    );
  } else {
    return (
    <div>
    <HeaderParametres/>
    {/* <Parametres/> */} 
    <h1>Vous n'êtes pas connecté</h1>
    <Footer />
    </div>)

  }
  
};

export default PageParametres;