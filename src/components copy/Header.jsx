import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../CIR_fit.svg'
import Settings from '../icons/parametres.png'

import "./Header.css"


const Header = () => {
    return (
        <header>
            <img src={logo} className="header-logo" alt="logo" />
            <button className="header-settings">
                <Link to="/pageparametres"> <img src={Settings} alt="Logo" className="icon_menu"/> </Link> 
            </button>
        </header>
    )
}

export default Header