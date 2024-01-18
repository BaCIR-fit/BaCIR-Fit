import React from 'react';

import logo from '../CIR_fit.svg';
import "./InfoSalle.css"; 


const InfoSalle = (props) => {

    let freqClass = ""; // Classe CSS par défaut
    let freqState = "";

    let frequentation = "";
    let ouverture = "";

    let instant = new Date();

    // Condition pour déterminer la classe CSS en fonction de la valeur de props.freq pour changer la couleur
    if (props.cap_actu/props.cap_max < 0.35) {
        frequentation = "Faible";
        freqClass = "Low";
    } else if (props.cap_actu/props.capaMax > 0.75) {
        frequentation = "Elevée";
        freqClass = "High";
    } else {
        frequentation = "Modérée";
        freqClass = "Moderate";
    }

    if (instant.getHours() >= 8 && instant.getHours() <= 22) {
        ouverture = "Ouverte";
        freqState = "Low";
    } else{
        ouverture = "Fermée";
        freqState = "High";
    }
    
    return (
        <div className="SalleData">
            
            <div id='ZoneImgSalle'>
                <img src={logo} className="header-logo" alt="logo" />
            </div>

            <div id='ZoneTxtSalle'>
                <div>
                <span className='BoldViolet'>{props.club_name}</span>
                </div>

                <div>
                    <span className='BoldViolet'>Adresse : {props.adress}</span>
                </div>

                <div>
                    <span className='BoldViolet'>Horaires : {props.horaires}</span>
                </div>

                <div>
                <span className='BoldViolet'>Etat : </span><span className={freqState}>{ouverture}</span>
                </div>

                <div>
                <span className='BoldViolet'>Fréquentation : </span><span className={freqClass}>{frequentation}</span>
                </div>
            </div>
        </div>
    )
}

export default InfoSalle