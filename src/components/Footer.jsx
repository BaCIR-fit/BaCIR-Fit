import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import Maison from "../icons/house-chimney.svg"
import Calendrier from "../icons/calendar-days.svg"
import Map from "../icons/map-location-dot.svg"
import Musculation from "../icons/user.svg"
import Qr from "../icons/qrcode.svg"

import "./Footer.css"




const Footer = () => {

    // const [userId, setUserId] = useState(0);

    // useEffect(() => {
    //     localStorage.setItem('user_id', JSON.stringify(userId));
    // }, [userId]);
    
    // const handleRedirect = () => {
    //     window.location.pathname = "/login"
    // }

    // function redirection(direction, img) {
    //     if(sessionStorage.getItem("user_data")){
    //         return({direction})
    //     }
    //     else {
    //         return("/login")
    //     }
    // }


    return (
        <footer>
            <button className="button_menu">
                <Link to="/"> <img src={Maison} alt="Logo" className="icon_menu"/> </Link> 
            </button>

            <button className="button_menu">
                <Link to="/planning"> <img src={Calendrier} alt="Logo" className="icon_menu"/> </Link>
            </button>
            
            <button className="button_menu">
                <Link to="/carte"> <img src={Map} alt="Logo" className="icon_menu"/> </Link>
            </button>

            <button className="button_menu">
                {/* <Link to={redirection("/profil")}> <img src={Musculation} alt="Logo" className="icon_menu"/> </Link> */}
                <Link to="/profil"> <img src={Musculation} alt="Logo" className="icon_menu"/> </Link>
            </button>
            
            <button className="button_menu">
                {/* <Link to={redirection("/qrcode")}> <img src={Qr} alt="Logo" className="icon_menu"/> </Link> */}
                <Link to="/qrcode"> <img src={Qr} alt="Logo" className="icon_menu"/> </Link>
            </button>
        </footer>
    )
}

export default Footer