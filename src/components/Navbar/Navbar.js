import React from 'react';


import logo from './assets/logo-league.png';
import share from './assets/share-icon.png';
import './style/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <a href="#">
          <img src={logo} alt="logo-league" id="logo-league" />    
        </a>

        <p> <a href="https://www.riotgames.com/pt-br"> Riot Games </a></p>

        <a href="">
          <img src={share} alt="share-site" id="share" />
        </a>
    </nav>
  )
}

export default Navbar