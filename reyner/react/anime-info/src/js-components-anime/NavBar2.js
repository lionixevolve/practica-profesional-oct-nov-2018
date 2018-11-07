import React from 'react';
import { Opciones } from './Opciones';

export const NavBar2 = (props) => {
  if(props.estado === 'index'){
    return (
      <ul className="nav nav-pills">
        <Opciones href="#populares" title="Populares"/>
        <Opciones href="#nuevos" title="Nuevos"/>
      </ul>
    );
  }
  if(props.estado === 'info'){
    return (
      <ul className="nav nav-pills">
        <Opciones href="#informacion" title="Informacion"/>
      </ul>
    );
  }
}
