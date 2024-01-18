import React from 'react'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import Calendrier from "../components/Calendrier.jsx"
import DivFooter from '../components/DivFooter.jsx';


function Planning() {
    return (
      <div className="Planning" style={{ height : "89vh", overflow : "auto"}}>
        <Header />
        <body>
          <Calendrier />
          <DivFooter/>
        </body>
        <Footer />
      </div>
    );
  }
  
  export default Planning;
  