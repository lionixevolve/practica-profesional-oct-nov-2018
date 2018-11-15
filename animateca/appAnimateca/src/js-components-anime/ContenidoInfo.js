import React from 'react';
import { Titulo } from './Titulo';
import { Info } from './Info';
import { Visto } from './Visto';

export const ContenidoInfo = (props) => {
  return (
    <div>
      <Titulo />
      <Info />
      <Visto />
    </div>
  );
}
