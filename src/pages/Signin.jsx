import React from 'react'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Titreh1 from '../components/Titreh1.jsx';
import DivFooter from '../components/DivFooter.jsx';
// import { Form } from 'react-router-dom';
import { useRef, useState } from 'react';
// import { useState } from 'react';
//import { TextField,Button } from '@mui/material';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';




function Signin() {
  
  const [settings] = useState({
    Prenom: "",
    Nom: "",
    Email:"",
  });
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  const [password] = useState({
    MotDePasse: "",
  });
  const [updatedPassword, setUpdatedPassword] = useState(password);


  let JSONfinal = {}

const [date, setDate] = useState("");
const dateInputRef = useRef(null);

function transfertInfos(varFinale, varInit, date, gender, password) {
  varFinale.first_name = varInit.Prenom
  varFinale.last_name = varInit.Nom
  varFinale.email = varInit.Email
  varFinale.birth_date = date
  varFinale.gender = gender
  varFinale.password = password

}


const [selectedGender, setSelectedGender] = useState('');

  

  const handleChangeGender = (e) => {
    setSelectedGender(e.target.value);
  };


// setUpdatedSettings(testJSON)

  const handleSubmit = () => {
    transfertInfos(JSONfinal, updatedSettings, date, selectedGender, updatedPassword.MotDePasse)
    // Enregistrez vos paramètres mis à jour ici (onSave(updatedSettings))
    //onClose();  // Fermer le modal après la sauvegarde
    console.log(JSONfinal)
    fetch('http://localhost:3000/auth/register',{
      method:'POST',
      body:JSON.stringify(JSONfinal),
      
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

    const handlePasswordChange = (e) => {
      const { name, value } = e.target;
      setUpdatedPassword((prevPassword) => ({
        ...prevPassword,
        [name]: value,
      }));
    };
    

    const handleChangeDate = (e) => {
      setDate(e.target.value);
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
            style={{ margin: '8px 0', width: '70%'}}

          />
        ))}

        <input type="date" onChange={handleChangeDate} ref={dateInputRef} className="modalInput" style={{ margin: '8px 0', width: '70%', height: '40px'}}/>

        <FormControl fullWidth style={{ margin: '8px 0', width: '70%' }}>
          <InputLabel id="gender-label">Genre</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            name="gender"
            value={selectedGender}
            onChange={handleChangeGender}
            >
            <MenuItem value="Homme">Homme</MenuItem>
            <MenuItem value="Femme">Femme</MenuItem>
            <MenuItem value="Autre">Autre</MenuItem>
          </Select>
        </FormControl>

        {Object.entries(updatedPassword).map(([paramName, paramValue]) => (
          <TextField
            key={paramName}
            fullWidth
            label={paramName}
            id={paramName}
            name={paramName}
            value={paramValue}
            onChange={handlePasswordChange}
            className="modalInput"
            type={paramName=="password"?"password":"input"}
            style={{ margin: '8px 0', width: '70%' }}
          />
        ))}
        
      
        <Button variant="contained" onClick={handleSubmit} className="modalButton" style={{width: '40%', backgroundColor: '#635d9e'}}>
          S'inscrire
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
          <DivFooter/>
        </body>
        
        <Footer />
      </div>
    );
  }
  
  export default Signin;
  