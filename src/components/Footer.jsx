import React from 'react'

import Maison from "./icons/maison.png"
import Planning from "./icons/calendrier.png"
import Carte from "./icons/carte.png"
import Musculation from "./icons/musculation.png"
import Qrcode from "./icons/qr-code.png"

import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <button className="button_menu">
            <img src={Maison} alt="Logo" />
            </button>
            <button className="button_menu"><img src={Planning} alt="Logo" /></button>
            <button className="button_menu"><img src={Carte} alt="Logo" /></button>
            <button className="button_menu"><img src={Musculation} alt="Logo" /></button>
            <button className="button_menu"><img src={Qrcode} alt="Logo" /></button>
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