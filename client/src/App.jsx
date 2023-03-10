import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
      </Routes>
    </Router>
  )
}

export default App;