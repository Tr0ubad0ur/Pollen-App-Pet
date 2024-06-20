// About.js
import React from 'react';
import './pages.css';
import Navigation from '../components/nav';
function About() {
  return (
    <div className='container'>
        <div className='About-Text'>
          <h1>Pollen-App-Pet (PAP)</h1>
          <p>PAP - веб-приложение в Telegram Mini Apps для доступа к информации о цветении по всему миру с помощью Google Pollen API. </p>
          <p>Стек технологий: Фронтенд: React, Бэкенд: Go (Golang), БД: PostreSQL и т.д…</p>
        </div>
        <div className='footer'>
          <Navigation />
        </div>

    </div>
    
  );
}

export default About;