import React from 'react'
import Header from "../components/Header.jsx"
import Infos from "../components/Infos.jsx"
import Footer from "../components/Footer.jsx"
import QRCode from 'react-qr-code';
import "../components/Qrcode.css"



function Qrcode() {

  return (
    <div className="Qrcode" style={{height : Window.height}}>
      <Header /> 
      
      <div className="qrcodeZone" style={{marginTop : "20vh"}}>

        <div style={{ margin: "0 auto", maxWidth: Window.width }}>
          
          <QRCode style={{width : "80vw", height : "50vh", margin : "0 auto"}} value="COUCOU ZEBI" />

        </div>

  
        <div className="idZone">
          <p> ID :  </p>
          <p>  8ugb4782fvb </p>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}

export default Qrcode;
