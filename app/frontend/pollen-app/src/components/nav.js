import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './nav.css';
function Navigation(props) {
    const location = useLocation();
  return (
    
      <nav className='navigation'>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <Button label="Главная"></Button>
        </Link> 

        <Link to="/Maps" className={location.pathname === '/Maps' ? 'active' : ''}>
        <Button label="Карта"></Button>
        </Link> 

        <Link to="/Profile" className={location.pathname === '/Profile' ? 'active' : ''}>
        <Button label="Профиль"></Button>
        </Link> 

        <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>
        <Button label="О проекте"></Button>
        </Link>
      </nav>
  );
}

export default Navigation;