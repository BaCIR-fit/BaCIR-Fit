import React from 'react';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

import Calendrier from "../components/Calendrier.jsx";
import DivFooter from '../components/DivFooter.jsx';


function Planning() {

  /*Data a chargé depuis l'API*/
  const data = [
    { title: 'Zumba café', start: '2024-01-18T10:00:00', end: '2024-01-18T12:00:00', extendedProps: { isDejaInscrit: false } },
    { title: 'Aquaponey', start: '2024-01-20T14:00:00', end: '2024-01-20T16:00:00', extendedProps: { isDejaInscrit: false } },
  ];

  return (
    <div className="Planning" style={{ height: '89vh', overflow: 'auto' }}>
      <Header />
      <body>
        
        <Calendrier data={data} />
        <DivFooter />
      </body>
      <Footer />
    </div>
  );
}
  
  export default Planning;
  