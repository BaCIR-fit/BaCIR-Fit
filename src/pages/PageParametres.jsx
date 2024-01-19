// Parametres.js
import React from 'react';
import HeaderParametres from '../components/Parametre/HeaderParametres.jsx'
import Parametres from '../components/Parametre/Parametres.jsx'
import Footer from "../components/Footer.jsx"
import { Button } from '@mui/material';

const PageParametres = () => {

  const handleRedirect = () => {
    window.location.pathname = "/login"
  }

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
    <Button variant="contained" onClick={handleRedirect} className="modalButton" style={{width: '40%', backgroundColor: '#635d9e'}} >
          Connexion
        </Button>
    <Footer />
    </div>)

  }
  
};

export default PageParametres;