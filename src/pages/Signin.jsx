import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import Footer from "../components/Footer.jsx"

function Signin() {
    return (
      <div className="Signin">
        <Header />
        <InputsInscription title="Nom"/>
        <InputsInscription title="Prenom"/>
        <InputsInscription title="Pseudo"/>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  