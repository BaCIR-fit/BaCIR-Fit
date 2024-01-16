import React from 'react'

import "./InputsInscription.css"

const InputsInscription = (props) => {
    return (
        <div className={props.title}>
            <input name="InputInscription" type="text" placeholder={props.title} required />
        </div>
    )
}

export default InputsInscription