import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Load from './pages/Load';
import About from './pages/About';
import Maps from './pages/Maps';
import Profile from './pages/Profile';

function App() {

  const apiKey = '';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Load" element={<Load />} />
        <Route path="/Maps" element={<Maps apiKey={apiKey} async/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;