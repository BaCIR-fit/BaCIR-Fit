// Parametres.js
import React from 'react';
import './Parametres.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Parametres = () => {
  return (
    <div>
    <ul>
        <li><a href="#gerer-abonnement">Gérer mon abonnement</a></li>
        <li><a href="#mes-informations">Mes informations</a></li>
        <li><Link to="/historique"> Mes visites </Link></li>
    </ul>
    <button id="deco">Déconnexion</button>
      
    </div>
  );
};




export default Parametres;
