import React from 'react'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import QRCode from 'react-qr-code';
import "../components/Qrcode.css"
import DivFooter from "../components/DivFooter.jsx"
import { useState,useEffect } from 'react';
import { Button } from '@mui/base';


function Qrcode() {
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    localStorage.setItem('user_id', JSON.stringify(userId));
  }, [userId]);
  
  const handleRedirect = () => {
    window.location.pathname = "/login"
  }
  if(sessionStorage.getItem("user_data")){
  return (
    <div className="Qrcode" style={{height : Window.height}}>
      <Header />
      <body>
      
        <div className="qrcodeZone" >

          <div style={{ margin: "0 auto", maxWidth: Window.width }}>
            
            <QRCode style={{width : "80vw", height : "50vh", margin : "0 auto"}} value={sessionStorage.getItem("user_data")} />

          </div>
        </div>
        <DivFooter/>
      </body>

      <Footer />
    </div>
  );} else {
    return (
      <div className="Qrcode" style={{height : Window.height}}>
      <Header />
      <body>
      <Button variant="contained" onClick={handleRedirect} className="modalButton" style={{width: '40%', backgroundColor: '#635d9e'}} >
          Connexion
        </Button>
    <DivFooter/>
      </body>

      <Footer />
    </div>
    )
  }
}

export default Qrcode;
