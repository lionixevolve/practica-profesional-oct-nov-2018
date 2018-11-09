import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';

var animes = require("../animes.json");

export const ContenidoIndexHOF = (props) => {

  function carta(cartaInfo) {
    return (
      <Carta
      src={cartaInfo.src}
      alt={cartaInfo.alt}
      title={cartaInfo.title}
      info={cartaInfo.info}
      masinfo={cartaInfo.masinfo}/>
    );
  }

  function etiqueta(array, test) {
    var listaAnimes = [];

    for (let element of array) {
      if (test(element)) {
        listaAnimes.push(carta(element));
      }
    }
    return listaAnimes;
  }

  return (
    <div>
      <Lista />
      <Populares />
      <div className="row">
        {etiqueta(animes, animes[].etiqueta === "Populares")}
      </div>
      <Nuevos/>
      <div className="row">

      </div>
    </div>
  );
}
