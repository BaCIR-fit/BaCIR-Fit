import React from 'react';
import ApexChart from '../components/ApexChart.jsx';
import BulleGPT from '../components/BulleGPT.jsx';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import InfoCompte from "../components/InfoCompte.jsx";
import { useState } from 'react';
import { Route, Router, redirect } from "react-router-dom";

import { Login } from '@mui/icons-material';
import { useEffect } from 'react';
// const userData = {
//   surname: sessionStorage.getItem("user_data").first_name,
//   name: sessionStorage.getItem("user_data").last_name,
//   birth: sessionStorage.getItem("user_data").birth_date,
//   gender: "Male",
//   mail: "john.doe@example.com",
//   active: "Actif",
// };

function Profil() {
  const [userData,setUserData] = useState({})

  if(sessionStorage.getItem("user_data") === null){
    window.location.pathname = "/login"
    return
  }

  setUserData(JSON.parse(sessionStorage.getItem("user_data")))

  const user_data = {
    surname: userData.last_name,
    name: userData.first_name,
    birth: userData.birth_date.slice(0, 10),
    gender: userData.gender,
    mail: userData.email,
    active: userData.isActive,
  }

  return (
    <div className="Profil" style={{ height : "89vh", overflow : "auto"}}>
      <Header />

      <InfoCompte user={user_data} />

      <BulleGPT />

      <div id="ChartDiv">
        <ApexChart />
      </div>
      
      <Footer />
    </div>
  );
}

export default Profil;
