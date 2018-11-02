import React from 'react';
import { NavBar } from './NavBar';
import { NavBar2 } from './NavBar2';
import { ContenidoInfo } from './ContenidoInfo';

export const Contenedor = () =>{
  return (
    <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
      <NavBar />
      <ContenidoInfo />
    </div>
  );
}
