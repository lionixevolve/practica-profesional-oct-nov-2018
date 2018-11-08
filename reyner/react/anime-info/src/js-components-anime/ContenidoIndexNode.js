import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';

var anime = require("../animes.json");

var cantidad = anime.length;

export const ContenidoIndexNode = (props) => {
  var listaNuevos = [];
  var listaPopulares = [];
  for (let i=0; i<cantidad; i++){
    if(anime[i].etiqueta === "Nuevos"){
      listaNuevos.push(
        <Carta 
        src={anime[i].src}
        alt={anime[i].alt}
        title={anime[i].title}
        info={anime[i].info}
        masinfo={anime[i].masinfo}/>
      );
    } else {
      listaPopulares.push(
        <Carta
        src={anime[i].src}
        alt={anime[i].alt}
        title={anime[i].title}
        info={anime[i].info}
        masinfo={anime[i].masinfo}/>
      );
    }
  }
  return (
    <div>
      <Lista />
      <Populares />
      <div className="row">
        {listaPopulares}
      </div>
      <Nuevos/>
      <div className="row">
        {listaNuevos}
      </div>
    </div>
  );
}
