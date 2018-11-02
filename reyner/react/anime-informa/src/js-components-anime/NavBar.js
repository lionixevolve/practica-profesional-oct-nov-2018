import React from 'react';
import { NavBar2 } from './NavBar2';

export const NavBar = () => {
  return (
    <div className="container-fluid fixed-top margen">
      <nav id="navbarAnimeInforma" className="navbar navbar-light bg-light">
        <a className="navbar-brand fantasia letra-grande" href="#lista">Anime Informa</a>
        <NavBar2 />
      </nav>
    </div>
  );
}
