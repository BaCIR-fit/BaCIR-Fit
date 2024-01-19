// Parametres.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Parametres.css';


const Parametres = () => {

  const [isSubscribed, setIsSubscribed] = React.useState(false);

  // Fetch user subscription status when the component mounts
  React.useEffect(() => {
    fetch('http://localhost:3000/user/getProfile', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json())
      .then(data => {
        setIsSubscribed(data.isActive);
      })
      .catch(error => {
        console.error('Error fetching subscription status:', error);
      });
  }, []); 

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
    <li><a>{isSubscribed ? Resiliation() : Abonnement()}</a></li>
        <li><Link to="/historique"> Mes visites </Link></li>
    </ul>
    <button id="deco" onClick={handleDeconnexion}>Déconnexion</button>
      
    </div>
  );
};

function Resiliation() {

  const handleResiliation = () => {
  console.log('Résiliation effectuée');
  fetch('http://localhost:3000/user/isNotActive',{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }}).then(() => {
      window.location.pathname = "/"
    })
  };
  
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
                  Résiliation
              </Typography>
              <Typography>
                  Êtes vous vraiment sûr de vouloir résilier votre abonnement ?
              </Typography>
              <Button onClick={handleResiliation} >
                { "CONFIRMER" }
              </Button>
              </Box>
          </Modal>
      </div>
  );
}

function Abonnement() {

  const handleAbonnement = () => {
  console.log('abonnement effectuée');
  fetch('http://localhost:3000/user/isActive',{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }}).then(() => {
      window.location.pathname = "/"
    })
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
      <div>
          <a href="#abonnement" onClick={handleOpen} className="custom-link"> Acheter mon abonnement </a>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
              <Box className="box">
              <Typography color="red" variant="h6" component="h2">
                  Acheter
              </Typography>
              <Typography>
                  Êtes vous vraiment sûr de vouloir acheter votre abonnement ?
              </Typography>
              <Button onClick={handleAbonnement} >
                { "CONFIRMER" }
              </Button>
              </Box>
          </Modal>
      </div>
  );
}


export default Parametres;
