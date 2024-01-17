import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import BoutonValidation from '../components/BoutonValidation.jsx';
import Footer from "../components/Footer.jsx"
import Titreh1 from '../components/Titreh1.jsx';
import DivFooter from "../components/DivFooter.jsx"

function Signin() {
    return (
      <div className="Signin">
        <Header/>
        <body>
          <Titreh1 texte="Connexion"/>
          <InputsInscription placeholder="Email" type="email"/>
          <InputsInscription placeholder="Mot de passe" type="password"/>
          <br></br>
          <BoutonValidation value="S'inscrire" couleur="couleurTrue"/>
          <DivFooter/>
        </body>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  