import React from 'react';
import { NavBar } from './NavBar';
import { Lista } from './Lista';
import { Populares } from './Populares'
import { Fila } from './Fila';

export const Contenedor = () =>{
  return (
    <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
      <NavBar />
      <Lista />
      <Populares />
      <Fila />
    </div>
  );
}
