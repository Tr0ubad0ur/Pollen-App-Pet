import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Maps from './Maps';
import Profile from './Profile';
import Button from './components/Button';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
        <Button label="Home"></Button>
        </Link> 

        <Link to="/Maps">
        <Button label="Maps"></Button>
        </Link> 

        <Link to="/Profile">
        <Button label="Profile"></Button>
        </Link> 

        <Link to="/About">
        <Button label="About"></Button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;