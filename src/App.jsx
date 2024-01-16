import React from 'react'

import './App.css';
import Accueil from './pages/Accueil.jsx';
import Planning from "./pages/Planning.jsx";
import Carte from "./pages/Carte.jsx";
import Profil from "./pages/Profil.jsx";
import Qrcode from "./pages/Qrcode.jsx";
import Signin from './pages/Signin.jsx';
import Login from './pages/Login.jsx';

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
