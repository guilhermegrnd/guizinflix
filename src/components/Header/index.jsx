import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/guizinflixlogo.png';
import './Header.css';
import Dropdown from '../Dropdown';

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="Logo" src={Logo} alt="GuizinFlix" />
      </Link>

      <Dropdown />
    </nav>
  );
}

export default Header;
