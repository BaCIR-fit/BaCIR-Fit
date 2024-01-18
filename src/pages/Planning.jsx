import React, { useEffect, useState } from 'react';
import Calendrier from "../components/Calendrier.jsx";
import DivFooter from '../components/DivFooter.jsx';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import SelectPlanning from '../components/MenuDeroulantSalles.jsx';

function Planning() {
  const initialData = [
    { title: 'Zumba café', start: '2024-01-18T10:00:00', end: '2024-01-18T12:00:00', salle: 'Salle de musculation', extendedProps: { isDejaInscrit: false } },
    { title: 'Aquaponey', start: '2024-01-20T14:00:00', end: '2024-01-20T16:00:00', salle: 'Salle de musculation', extendedProps: { isDejaInscrit: false } },
    { title: 'Crossfit', start: '2024-01-20T14:00:00', end: '2024-01-20T16:00:00', salle: 'Salle de Yoga', extendedProps: { isDejaInscrit: false } },
  ];

  const [selectedSalle, setSelectedSalle] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSalleChange = (salle) => {
    setSelectedSalle(salle);
  };

  useEffect(() => {
    filterDataBySalle(selectedSalle);
  }, [selectedSalle]);

  const filterDataBySalle = (salle) => {
    if (salle === '') {
      setFilteredData(initialData);
    } else {
      const filtered = initialData.filter((event) => event.salle === salle);
      setFilteredData(filtered);
    }
  };

  return (
    <div className="Planning" style={{ height: '89vh', overflow: 'auto' }}>
      <Header />
      <body>
        <SelectPlanning data={initialData} onSalleChange={handleSalleChange} />

        <Calendrier data={filteredData} />
        <DivFooter />
      </body>
      <Footer />
    </div>
  );
}

export default Planning;
