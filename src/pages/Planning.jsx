import React from 'react'
import Header from "../components/Header.jsx"
import DivHeader from '../components/DivHeader.jsx'
import Footer from "../components/Footer.jsx"

import Calendrier from "../components/Calendrier.jsx"

function Planning() {
    return (
      <div className="Planning">
        <Header /> <DivHeader/>
        <Calendrier />
        <Footer />
      </div>
    );
  }
  
  export default Planning;
  