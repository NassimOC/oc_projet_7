import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.svg';

function Banner() {
  return (
      <header>
        <img src={logo} alt="logo Kasa" />
        <ul className='navbar'>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </header>
  );
}

export default Banner;
