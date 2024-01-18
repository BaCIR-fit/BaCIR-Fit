import React from 'react'

import "./InputsInscription.css"


const InputsInscription = (props) => {
    return (
        <div className="renseignement">
            <select name="sexe" id="choix-sexe">
            <option value="">--Choisissez une option--</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
            </select>
        </div>
    )
}

export default InputsInscription