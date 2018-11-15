import React from 'react';
import { NavBar } from './NavBar';
import { ContenidoIndexNode } from './ContenidoIndexNode';
import { ContenidoIndexAjax } from './ContenidoIndexAjax';
import { ContenidoIndexHOF } from './ContenidoIndexHOF';
import { ContenidoIndexAjaxHOF} from './ContenidoIndexAjaxHOF';

export const Indice = () =>{
  return (
    <div>
      <NavBar estado="Indice"/>
      <ContenidoIndexAjax />
    </div>
  );
}
