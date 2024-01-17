import React from 'react';
import ApexChart from '../components/ApexChart.jsx';
import BulleGPT from '../components/BulleGPT.jsx';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import InfoCompte from "../components/InfoCompte.jsx";

const userData = {
  surname: "Doe",
  name: "John",
  birth: "01/01/1990",
  gender: "Male",
  mail: "john.doe@example.com"
};

function Profil() {
  return (
    <div className="Profil">
      <Header />
      <InfoCompte user={userData} />
      <BulleGPT />
      <div id="ChartDiv">
        <ApexChart />
      </div>
      <Footer />
    </div>
  );
}

export default Profil;
