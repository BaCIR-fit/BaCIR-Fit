import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import Footer from "../components/Footer.jsx"
import DivHeader from '../components/DivHeader.jsx';

function Signin() {
    return (
      <div className="Signin">
        <Header />
        <DivHeader/>
        <InputsInscription title="Nom"/>
        <InputsInscription title="Prenom"/>
        <InputsInscription title="Pseudo"/>
        <br></br>
        <InputsInscription title="Nom" type="date"/>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  