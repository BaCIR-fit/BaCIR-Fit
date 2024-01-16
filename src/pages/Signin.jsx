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
        <p>Créer un compte</p>
        <InputsInscription placeholder="Nom" type="text"/>
        <InputsInscription placeholder="Prenom" type="text"/>
        <InputsInscription placeholder="Pseudo" type="text"/>
        <br></br>
        <InputsInscription placeholder="Naissance" type="date"/>
        <InputSexeInscription/>
        <br></br>
        <InputsInscription placeholder="Email" type="email"/>
        <InputsInscription placeholder="Mot de passe" type="password"/>
        <InputsInscription placeholder="Confirmation mot de passe" type="password"/>
        <br></br>
        <BoutonValidation value="S'inscrire"/>

        
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  