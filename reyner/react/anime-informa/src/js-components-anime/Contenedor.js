import React from 'react';
import { NavBar1 } from './NavBar1';
import { Lista } from './Lista';
import { Populares } from './Populares'
import { ContenidoInfo } from './ContenidoInfo';

export const Contenedor = () =>{
  return (
    <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
      <NavBar1 />
      <ContenidoInfo />
    </div>
  );
}
