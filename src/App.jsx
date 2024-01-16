import React from 'react'

import './App.css';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <div className="App">
        <Accueil />
        <Routes>
          <Route paths="./pages/accueil" exact Component={Accueil} />
          <Route paths="./map" Component={Map} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
