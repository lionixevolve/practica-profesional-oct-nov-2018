import React from 'react';
import { NavBar } from './NavBar';
import { ContenidoInfo } from './ContenidoInfo';

export const Naruto = () =>{
  return (
    <div>
      <NavBar estado="Naruto"/>
      <ContenidoInfo />
    </div>
  );
}
