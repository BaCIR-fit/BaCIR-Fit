import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import InputSexeInscription from '../components/InputSexeInscription.jsx';
import BoutonValidation from '../components/BoutonValidation.jsx';
import Footer from "../components/Footer.jsx"
import DivHeader from '../components/DivHeader.jsx';

function Signin() {
    return (
      <div className="Signin">
        <Header />
        <DivHeader/>
        <p>Connexion</p>
        <InputsInscription placeholder="Pseudo" type="text"/>
        <InputsInscription placeholder="Mot de passe" type="password"/>
        <br></br>
        <BoutonValidation value="S'inscrire"/>

        
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  