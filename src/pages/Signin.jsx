import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import InputSexeInscription from '../components/InputSexeInscription.jsx';
import Footer from "../components/Footer.jsx"
import DivHeader from '../components/DivHeader.jsx';

function Signin() {
    return (
      <div className="Signin">
        <Header />
        <DivHeader/>
        <p>Créer un compte</p>
        <InputsInscription title="Nom"/>
        <InputsInscription title="Prenom"/>
        <InputsInscription title="Pseudo"/>
        <br></br>
        <InputsInscription title="Nom" type="date"/>
        <InputSexeInscription/>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  