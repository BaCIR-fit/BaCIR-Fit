// Parametres.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Parametres.css';


const Parametres = () => {

  const handleDeconnexion = () => {
    // Logique de déconnexion ici
    console.log('Déconnexion effectuée');
    fetch('http://localhost:3000/auth/logout',{
      method:'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }}).then(() => {
        sessionStorage.removeItem("user_data")
        localStorage.removeItem("qr_code")
        localStorage.removeItem("SessionID")
        window.location.pathname = "/"
      })
  };

  return (
    <div>
    <ul>
        <li><a>{Resiliation()}</a></li>
        <li><Link to="/historique"> Mes visites </Link></li>
    </ul>
    <button id="deco" onClick={handleDeconnexion}>Déconnexion</button>
      
    </div>
  );
};

function Resiliation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
      <div>
          <a href="#resiliation" onClick={handleOpen} className="custom-link"> Résilier mon abonnement </a>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
              <Box className="box">
              <Typography color="red" variant="h6" component="h2">
                  RESILIATION
              </Typography>
              <Typography>
                  Etes vous vraiment sur de vouloir résilier votre abonnement ?
              </Typography>
              <Button /*onClick = {  DESABONNER ICI } */ >
                { "CONFIRMER" }
              </Button>
              </Box>
          </Modal>
      </div>
  );
}


export default Parametres;
