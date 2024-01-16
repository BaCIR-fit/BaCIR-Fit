import React from "react"
import logo from '../logo.svg'

import "./Header.css"

const Header = () => {
    return (
        <header className="header-header">
            <img src={logo} className="header-logo" alt="logo" />
            <p>
                BasiCIR
            </p>
        </header>
    )
}

export default Header