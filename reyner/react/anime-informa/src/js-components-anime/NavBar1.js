import React from 'react';

export const NavBar1 = () => {
  return (
    <div className="container-fluid fixed-top margen">
      <nav id="navbarAnimeInforma" className="navbar navbar-light bg-light">
        <a className="navbar-brand fantasia letra-grande" href="#lista">Anime Informa</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#populares">Populares</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nuevos">Nuevos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
