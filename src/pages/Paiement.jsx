import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import BoutonValidation from '../components/BoutonValidation.jsx';
import Footer from "../components/Footer.jsx"
import Titreh1 from '../components/Titreh1.jsx';
import Textep from '../components/Textep.jsx';
import DivFooter from "../components/DivFooter.jsx"


let texteAdhesion = "Voulez-vous adhérer à BacirFit ? Adhérer à BacirFit vous permettra d'accéder à nos 3 salles en illimité, d'utiliser toutes nos machines et de vous inscrire à des séances personnalisées avec l'un de nos coachs."

function Signin() {
    return (
      <div className="Signin">
        <Header />
        <body>
          <Titreh1 texte="Paiement"/>
          <Textep texte={texteAdhesion}/>
          <br></br>
          <BoutonValidation value="J'adhère" couleur="couleurTrue"/>
          <BoutonValidation value="Je ne souhaite pas adhérer" couleur="couleurFalse"/>
          
          <DivFooter/>
        </body>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  