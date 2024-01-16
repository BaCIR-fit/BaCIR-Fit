import React from "react"
import logo from '../logo.svg'

import "./Header.css"


const Header = () => {
    return (
        <header>
            <img src={logo} className="header-logo" alt="logo" />
            <h1>
                BasiCIR
            </h1>
        </header>
    )
}

export default Header