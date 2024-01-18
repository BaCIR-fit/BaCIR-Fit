// HeaderParametres.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderParametres.css';

const HeaderParametres = () => {
  return (
    <div className="header-parametres">
      <h2>Paramètres</h2>
      <button id="croix">
        <Link to="/accueil">X</Link>
      </button>
    </div>
  );
};

export default HeaderParametres;
