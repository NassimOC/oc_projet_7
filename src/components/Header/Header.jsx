import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/LOGO.svg';

const selected = ({ isActive }) => (isActive ? 'active_link' : '');

function Header() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" className="main-logo" />
      <nav className="navbar">
        <NavLink to="/" className={selected}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={selected}>
          A propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
