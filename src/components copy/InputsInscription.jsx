import React from 'react'

import "./InputsInscription.css"


const InputsInscription = (props) => {
    return (
        <div className="renseignement">
            <input type={props.type} placeholder={props.placeholder} required />
        </div>
    )
}

export default InputsInscription