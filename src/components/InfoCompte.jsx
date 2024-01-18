import React from 'react';
import logoCercle from '../icons/circle-user-solid.svg';
import "./InfoCompte.css";

const InfoCompte = (props) => {
    return (
        <div className="SalleData">

            <div id="IconZone">
                <img src={logoCercle} id="Accountlogo" alt="logo" />
            </div>

            <div id='ZoneTxtSalle'>
                <div>
                    <span className='BoldViolet'>Nom : </span>{props.user.surname}
                </div>
                
                <div>
                    <span className='BoldViolet'>Prénom : </span>{props.user.name}
                </div>

                <div>
                    <span className='BoldViolet'>Date de naissance : </span>{props.user.birth}
                </div>

                <div>
                    <span className='BoldViolet'>Genre : </span>{props.user.gender}
                </div>

                <div>
                    <span className='BoldViolet'>Mail : </span>{props.user.mail}
                </div>

                <div>
                    <span className='BoldViolet'>Compte : </span>{props.user.active == false ? "Inactif":"Actif"}
                </div>
            </div>
        </div>
    );
}

export default InfoCompte;
