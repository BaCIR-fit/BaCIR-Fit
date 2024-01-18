import React from 'react'
import Header from "../components/Header.jsx"
import InputsInscription from '../components/InputsInscription.jsx';
import BoutonValidation from '../components/BoutonValidation.jsx';
import Footer from "../components/Footer.jsx"
import Titreh1 from '../components/Titreh1.jsx';
import DivFooter from "../components/DivFooter.jsx"
import { useState } from 'react';
import { TextField,Button } from '@mui/material';
import "./Login.css"
// import mod

function Signin() {

  const [settings] = useState({
    email: "",
    password:""
  });
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  const handleRegister = () => {
    // redirect("/signin");
    window.location.pathname = "/signin"
    return;
  }
  const handleSubmit = () => {
    // Enregistrez vos paramètres mis à jour ici (onSave(updatedSettings))
    //onClose();  // Fermer le modal après la sauvegarde
    console.log(updatedSettings)
    fetch('https://apibacir.fly.dev/auth/login',{
      method:'POST',
      body:JSON.stringify(updatedSettings),
      headers: {
        'accept':'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      }})
    .then(response => response.json())
    .then(data => {
      try{ 
        localStorage.setItem("SessionID",data.data.token)
        localStorage.setItem("qr_code",data.data.qr_code)
        sessionStorage.setItem("user_data",data.data.user_data);
        // console.log(data)
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
            size="small"
            style={{ margin: '8px 0', width: '70%' }}
          />

        ))}
        <Button variant="contained" onClick={handleSubmit} className="modalButton" style={{width: '40%', backgroundColor: '#635d9e'}} >
          Connexion
        </Button>
          <DivFooter/>
        </body>

        <Button variant="contained" onClick={handleRegister} className="modalButton" style={{backgroundColor: '#635d9e'}}>
          Créer un compte
        </Button>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  