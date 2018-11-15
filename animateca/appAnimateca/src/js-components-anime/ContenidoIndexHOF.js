import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';

var animes = require("../animes2.json");
var key = "";
var i = 1;

export const ContenidoIndexHOF = (props) => {
  function llave(){
    key = "key-"+i;
  }

  function carta(cartaInfo) {
    return (
      <Carta
      key={key}
      src={cartaInfo.src}
      alt={cartaInfo.alt}
      title={cartaInfo.title}
      description={cartaInfo.description}
      moreinfo={cartaInfo.moreinfo}/>
    );
  }


  function etiqueta(array, tag) {
    var listaAnimes = [];
    for (let element of array) {
      llave()
      if (tag === element.label) {
        listaAnimes.push(carta(element));
      }
      i++;
    }
    return listaAnimes;
  }

  return (
    <div>
      <Lista />
      <Populares />
      <div className="row">
        {etiqueta(animes, "Populares")}
      </div>
      <Nuevos/>
      <div className="row">
        {etiqueta(animes, "Nuevos")}
      </div>
    </div>
  );
}
