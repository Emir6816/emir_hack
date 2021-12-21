import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Header/NavBar/NavBar';
import Home from './Components/Header/Home/Home';
import Ticket from './Components/Content/Ticket/Ticket';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Ticket />
      


  
    
    </div>
  );
};

export default App;