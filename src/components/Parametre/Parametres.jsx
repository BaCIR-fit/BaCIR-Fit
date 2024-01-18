// Parametres.js
import React from 'react';
import './Parametres.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Parametres = () => {
  

  const handleDeconnexion = () => {
    // Logique de déconnexion ici
    console.log('Déconnexion effectuée');
    fetch('https://apibacir.fly.dev/auth/logout',{
      method:'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }}).then(() => {
        sessionStorage.removeItem("user_data")
        localStorage.removeItem("qr_code")
        localStorage.removeItem("SessionID")
        window.location.pathname = "/"
      })
  };
  return (
    <div>
    <ul>
        <li><Link to="/resiliation">Résilier mon abonnement</Link></li>
        <li><a href="#mes-informations">Mes informations</a></li>
        <li><Link to="/historique"> Mes visites </Link></li>
    </ul>
    <button id="deco" onClick={handleDeconnexion}>Déconnexion</button>
      
    </div>
  );
};




export default Parametres;
