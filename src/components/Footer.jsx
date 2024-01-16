import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Maison from "../icons/maison-blanc.png"
import Planning from "../icons/calendrier-blanc.png"
import Carte from "../icons/carte-blanc.png"
import Musculation from "../icons/musculation-blanc.png"
import Qrcode from "../icons/qr-code-blanc.png"

import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <button className="button_menu">
                <img src={Maison} alt="Logo" />
            </button>

            <button className="button_menu">
                <Link to="/">
                    <img src={Planning} alt="Logo" />
                    Login
                </Link>
            </button>
            
            <button className="button_menu">
                <img src={Carte} alt="Logo" />
            </button>

            <button className="button_menu">
                <img src={Musculation} alt="Logo" />
            </button>
            
            <button className="button_menu">
                <img src={Qrcode} alt="Logo" />
            </button>
        </footer>
    )
}

export default Footer

/* <a
 className="header-link"
 href="https://reactjs.org"
target="_blank"
 rel="noopener noreferrer"
>
    Learn React
</a> */