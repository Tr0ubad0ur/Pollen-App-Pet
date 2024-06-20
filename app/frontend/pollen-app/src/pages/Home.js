// Home.js
import React from 'react';
import './pages.css';
import Navigation from '../components/nav';
function Home() {
  return (
    <div className='container'>
      <h1>Главная страница</h1>

      <div className='footer'>
      <Navigation />
    </div>
    
    </div>
  );
}

export default Home;