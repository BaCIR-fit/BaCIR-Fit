import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Maison from "../icons/maison-blanc.png"
import Calendrier from "../icons/calendrier-blanc.png"
import Map from "../icons/carte-blanc.png"
import Musculation from "../icons/musculation-blanc.png"
import Qr from "../icons/qr-code-blanc.png"

import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <button className="button_menu">
                <Link to="/"> <img src={Maison} alt="Logo" /> </Link>
            </button>

            <button className="button_menu">
                <Link to="/planning"> <img src={Calendrier} alt="Logo" /> </Link>
            </button>
            
            <button className="button_menu">
                <Link to="/carte"> <img src={Map} alt="Logo" /> </Link>
            </button>

            <button className="button_menu">
                <Link to="/profil"> <img src={Musculation} alt="Logo" /> </Link>
            </button>
            
            <button className="button_menu">
                <Link to="/qrcode"> <img src={Qr} alt="Logo" /> </Link>
            </button>
        </footer>
    )
}

export default Footer