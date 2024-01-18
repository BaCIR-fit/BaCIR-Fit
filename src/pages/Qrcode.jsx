import React from 'react'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import QRCode from 'react-qr-code';
import "../components/Qrcode.css"
import DivFooter from "../components/DivFooter.jsx"
import { useState,useEffect } from 'react';



function Qrcode() {
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    localStorage.setItem('user_id', JSON.stringify(userId));
  }, [userId]);
  

  return (
    <div className="Qrcode" style={{height : Window.height}}>
      <Header />
      <body>
      
        <div className="qrcodeZone" >

          <div style={{ margin: "0 auto", maxWidth: Window.width }}>
            
            <QRCode style={{width : "80vw", height : "50vh", margin : "0 auto"}} value={{userId}} />

          </div>

    
          <div className="idZone">
            <p> ID :</p>
            <p> {userId} </p>
          </div>

        </div>
        <DivFooter/>
      </body>

      <Footer />
    </div>
  );
}

export default Qrcode;
