import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';

var anime = require("../animes2.json");

var cantidad = anime.length;

export const ContenidoIndexNode = (props) => {
  var listaNuevos = [];
  var listaPopulares = [];
  for (let i=0; i<cantidad; i++){
    let key = "key-"+i;
    if(anime[i].label === "Nuevos"){
      listaNuevos.push(
        <Carta
        key={key}
        src={anime[i].src}
        alt={anime[i].alt}
        title={anime[i].title}
        description={anime[i].description}
        moreinfo={anime[i].moreinfo}/>
      );
    } else {
      listaPopulares.push(
        <Carta
        key={key}
        src={anime[i].src}
        alt={anime[i].alt}
        title={anime[i].title}
        description={anime[i].description}
        moreinfo={anime[i].moreinfo}/>
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
