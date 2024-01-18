// HeaderParametres.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderParametres.css';
import Croix from './croix.png'
import logo from './CIR_fit.svg'


const HeaderParametres = () => {
  return (
    <header>
      <img src={logo} className="header-logo" alt="logo" />
        <button id="croix">
          <Link to="/"><img src={Croix} alt="Logo" className="croix"/></Link>
        </button>
    </header>
  );
};
/*<button id="croix">
        <Link to="/"><img src={Croix} alt="Logo" className="croix"/></Link>
      </button>*/
export default HeaderParametres;
