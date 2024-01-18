import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import BoutonValidation from '../components/BoutonValidation.jsx';
import Footer from "../components/Footer.jsx"
import Titreh1 from '../components/Titreh1.jsx';
import DivFooter from "../components/DivFooter.jsx"
import { useState } from 'react';
import { TextField,Button } from '@mui/material';


function Signin() {

  const [settings] = useState({
    email: "",
    password: "",
  });
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  const handleSubmit = () => {
    // Enregistrez vos paramètres mis à jour ici (onSave(updatedSettings))
    //onClose();  // Fermer le modal après la sauvegarde
    console.log(updatedSettings)
    fetch('http://localhost:4000/auth/login',{
      method:'POST',
      body:JSON.stringify(updatedSettings),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }})
    .then(response => response.json())
    .then(data => {
      try{ 
        localStorage.setItem("SessionID",data.data.token)
      } catch {
        console.log(data.message)
      }})

  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedSettings((prevSettings) => ({
        ...prevSettings,
        [name]: value,
      }));
    };

    return (
      <div className="Signin">
        <Header/>
        <body>
          <Titreh1 texte="Connexion"/>
          {/* <InputsInscription placeholder="Email" type="email"/>
          <InputsInscription placeholder="Mot de passe" type="password"/>
          <br></br>
          <BoutonValidation value="S'inscrire" couleur="couleurTrue"/> */}
           {Object.entries(updatedSettings).map(([paramName, paramValue]) => (
          <TextField
            key={paramName}
            fullWidth
            label={paramName}
            id={paramName}
            name={paramName}
            value={paramValue}
            onChange={handleChange}
            className="modalInput"
          />
        ))}
        <Button variant="contained" onClick={handleSubmit} className="modalButton">
          Login
        </Button>
          <DivFooter/>
        </body>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  