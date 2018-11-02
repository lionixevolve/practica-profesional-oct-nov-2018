import React from 'react';
import { Opciones } from './Opciones';

export const NavBar2 = () => {
  return (
    <ul className="nav nav-pills">
      <Opciones href="#populares" title="Populares"/>
      <Opciones href="#nuevos" title="Nuevos"/>
    </ul>
  );
}
