import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import BoutonValidation from '../components/BoutonValidation.jsx';
import Footer from "../components/Footer.jsx"
import DivHeader from '../components/DivHeader.jsx';
import Titreh1 from '../components/Titreh1.jsx';
import Textep from '../components/Textep.jsx';


let texteAdhesion = "Voulez-vous adhérer à BacirFit ? Adhérer à BacirFit vous permettra d'accéder à nos 3 salles en illimité, d'utiliser toutes nos machines et de vous inscrire à des séances personnalisées avec l'un de nos coachs."

function Signin() {
    return (
      <div className="Signin">
        <Header />
        <DivHeader/>
        <Titreh1 texte="Paiement"/>
        <Textep texte={texteAdhesion}/>
        <InputsInscription placeholder="Email" type="email"/>
        <InputsInscription placeholder="Mot de passe" type="password"/>
        <br></br>
        <BoutonValidation value="J'adhère" couleur="couleurTrue"/>
        <BoutonValidation value="Je ne souhaite pas adhérer" couleur="couleurFalse"/>
        

        
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  