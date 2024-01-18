import React from "react"

import "./BoutonValidation.css"


const BoutonValidation = (props) => {
    return (
        <div className="validation">
            <input type="button" placeholder={props.placeholder} value={props.value}className={props.couleur} required />
        </div>
    )
}

export default BoutonValidation