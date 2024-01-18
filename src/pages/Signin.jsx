import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import InputSexeInscription from '../components/InputSexeInscription.jsx';
import BoutonValidation from '../components/BoutonValidation.jsx';
import Footer from "../components/Footer.jsx"
import Titreh1 from '../components/Titreh1.jsx';
import DivFooter from '../components/DivFooter.jsx';
// import { Form } from 'react-router-dom';
import { useState } from 'react';
import { TextField,Button } from '@mui/material';

function Signin() {
  
  const [settings] = useState({
    first_name: "",
    last_name: "",
    email:"",
    birth_date:Date("2000-02-09T00:00:00.000+00:00"),
    gender:"",
    password: "",
  });
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  const handleSubmit = () => {
    // Enregistrez vos paramètres mis à jour ici (onSave(updatedSettings))
    //onClose();  // Fermer le modal après la sauvegarde
    console.log(updatedSettings)
    fetch('https://apibacir.fly.dev/auth/register',{
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
        <Header />
        <body>

          <Titreh1 texte="Créer un compte"/>
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
            type={paramName=="password"?"password":"input"}
          />
        ))}
        <Button variant="contained" onClick={handleSubmit} className="modalButton">
          Register
        </Button>
          {/* <form onSubmit={console.log("bruh")}>
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
          <BoutonValidation value="S'inscrire" couleur="couleurTrue"/>
          <DivFooter/>
          </form> */}
        </body>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  