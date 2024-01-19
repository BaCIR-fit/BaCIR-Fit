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
  let user = JSON.parse(sessionStorage.getItem("user_data"))

  React.useEffect(() => {
    fetch(`https://apibacir.fly.dev/user/getProfile/` + user._id, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json())
      .then(data => {
        setIsSubscribed(data.data.isActive);
        console.log(data.data.isActive)
      })
      .catch(error => {
        console.error('Error fetching subscription status:', error);
      });
  }, []); 

  const handleDeconnexion = () => {
    // Logique de déconnexion ici
    console.log('Déconnexion effectuée');
    fetch('https://apibacir.fly.dev/auth/logout',{
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

  let user = JSON.parse(sessionStorage.getItem("user_data"))
  const handleResiliation = () => {
  console.log('Résiliation effectuée');
  fetch('https://apibacir.fly.dev/user/isNotActive/' + user._id,{
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

  let user = JSON.parse(sessionStorage.getItem("user_data"))

  const handleAbonnement = () => {
  console.log('abonnement effectuée');
  fetch('https://apibacir.fly.dev/user/isActive/' + user._id,{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }}).then((data) => {
      console.log(data)
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
