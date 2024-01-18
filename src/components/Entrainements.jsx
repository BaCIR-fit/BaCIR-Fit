// Entrainements.js
import React from 'react';
import './Entrainements.css';

const Entrainements = () => {
  const entrainements = [
    { date: '2024-01-01', time: '10:00', salle: 'Salle A', type: 'Cardio', duration: 60 },
    { date: '2024-01-05', time: '15:30', salle: 'Salle B', type: 'Musculation', duration: 45 },
    // Ajoutez d'autres entrainements ici
  ];

  return (
    <div>
      <h2>Historique des entrainements</h2>
      <ul>
        {entrainements.map((entrainement, index) => (
          <li key={index}>
            <div className="row">
              <div className="column">
                <p>entrainement.date</p>
                <p>{entrainement.time}</p>
                <p>{entrainement.salle}</p>
              </div>
              <div className="column">
                <p>{entrainement.duration} minutes</p>
                <p>{entrainement.type}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entrainements;
