import React from "react"
import logo from '../CIR_fit.svg'

import "./Header.css"


const Header = () => {
    return (
        <header>
            <img src={logo} className="header-logo" alt="logo" />
        </header>
    )
}

export default Header