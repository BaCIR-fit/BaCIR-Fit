import React from 'react';

import logo from '../CIR_fit.svg';
import "./InfoSalle.css"; 


const InfoSalle = (props) => {

    let freqClass = ""; // Classe CSS par défaut
    let freqState = "";

    // Condition pour déterminer la classe CSS en fonction de la valeur de props.freq pour changer la couleur
    if (props.freq === "Faible") {
        freqClass = "Low";
    } else if (props.freq === "Modérée") {
        freqClass = "Moderate";
    } else if (props.freq === "Elevée") {
        freqClass = "High";
    }

    if (props.state === "Ouvert") {
        freqState = "Low";
    } else if (props.state === "Fermé") {
        freqState = "High";
    }
    
    return (
        <div className="SalleData">
            
            <div id='ZoneImgSalle'>
                <img src={logo} className="header-logo" alt="logo" />
            </div>

            <div id='ZoneTxtSalle'>
                <div>
                <span className='BoldViolet'>{props.title}</span>
                </div>
                <div>
                    <span className='BoldViolet'>Adresse : </span>{props.adress}
                </div>
                <div>
                    <span className='BoldViolet'>Horaires : </span>{props.horaires}
                </div>
                <div>
                <span className='BoldViolet'>Etat : </span><span className={freqState}>{props.state}</span>
                </div>
                <div>
                <span className='BoldViolet'>Fréquentation : </span><span className={freqClass}>{props.freq}</span>
                </div>
            </div>
        </div>
    )
}

export default InfoSalle