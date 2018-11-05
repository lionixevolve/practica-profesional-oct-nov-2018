import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';

var anime = require("../animes.json");

export const ContenidoIndex = (props) => {
  return (
    <div>
      <Lista />
      <Populares />
      <div className="row">
        <Carta
        src={anime[0].src}
        alt={anime[0].alt}
        title={anime[0].title}
        info={anime[0].info}
        masinfo={anime[0].masinfo}
        boton={props.onClick}/>

        <Carta
        src={anime[1].src}
        alt={anime[1].alt}
        title={anime[1].title}
        info={anime[1].info}
        masinfo={anime[1].masinfo}
        boton={props.onClick}/>

        <Carta
        src={anime[2].src}
        alt={anime[2].alt}
        title={anime[2].title}
        info={anime[2].info}
        masinfo={anime[2].masinfo}
        boton={props.onClick}/>

      </div>
      <Nuevos />
      <div className="row">

        <Carta
        src={anime[3].src}
        alt={anime[3].alt}
        title={anime[3].title}
        info={anime[3].info}
        masinfo={anime[3].masinfo}
        boton={props.onClick}/>

        <Carta
        src={anime[4].src}
        alt={anime[4].alt}
        title={anime[4].title}
        info={anime[4].info}
        masinfo={anime[4].masinfo}
        boton={props.onClick}/>

        <Carta
        src={anime[5].src}
        alt={anime[5].alt}
        title={anime[5].title}
        info={anime[5].info}
        masinfo={anime[5].masinfo}
        boton={props.onClick}/>

      </div>
    </div>
  );
}
