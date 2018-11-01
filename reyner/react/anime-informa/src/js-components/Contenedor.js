import React from 'react';
import { NavBar } from './NavBar';
import { Lista } from './Lista';
import { Populares } from './Populares'
import { Fila1 } from './Fila1';

export const Contenedor = () =>{
  return (
    <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
      <NavBar />
      <Lista />
      <Populares />
      <Fila1 />
    </div>
  );
}
