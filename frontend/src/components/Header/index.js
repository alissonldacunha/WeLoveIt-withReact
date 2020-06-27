import React from 'react';

import logo from '../../assets/weloveitlogo.svg';
import './styles.css'

const Header = () => (
  <header className="container_header">
    <nav className="nav">
      <a href="#">
        <img src={logo} alt="Logo image" className="img_logo" />
      </a>
      <ul className="list_navegation">
        <a href=""><li>Lançamentos</li></a>
        <a href=""><li>Críticas</li></a>
        <a href=""><li>Em cartaz</li></a>
      </ul>
      <div className="profile">
        <p>
          Nome do felizardo
          </p>
      </div>
    </nav>
    <div className="container_infos">
      <h2 className="infos-title">Star Wars: A Ascensão Skywalker</h2>
      <p className="infos-genero">
        <a>Aventura</a>
        <a>Sci-fi</a>
        <a>Terror</a>
      </p>
      <a className="button-trailer">
        Assistir trailer
          <i className="fa fa-play-circle-o"></i>
      </a>
      <div className="infos-lancamento">
        <p>Nos cinemas</p>
        <p>15 de Dezembro 2033</p>
      </div>
    </div>
  </header>
);

export default Header;