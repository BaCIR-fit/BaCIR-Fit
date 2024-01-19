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
    if (props.capaActu/props.capaMax < 0.35) {
        frequentation = "Faible";
        freqClass = "Low";
    } else if (props.capaActu/props.capaMax > 0.75) {
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
        <div className="SalleData DeleteMax">
            
            <div id='ZoneImgSalle'>
                <img src={logo} className="header-logo" alt="logo" />
            </div>

            <div id='ZoneTxtSalle' className='ZoneTxtSalleA'>
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