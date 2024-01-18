// Parametres.js
import React from 'react';
import HeaderParametres from '../components/Parametre/HeaderParametres.jsx'
import Parametres from '../components/Parametre/Parametres.jsx'
import Footer from "../components/Footer.jsx"


const PageParametres = () => {
  return (
    <div>
    <HeaderParametres/>
    <Parametres/>
    <Footer />
    </div>
    
  );
};

const handleDeconnexion = () => {
  // Logique de déconnexion ici
  console.log('Déconnexion effectuée');
};

export default PageParametres;