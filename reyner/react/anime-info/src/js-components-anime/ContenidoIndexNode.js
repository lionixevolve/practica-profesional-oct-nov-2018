import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';

var anime = [];
var getJSON = require("get-json");
request();
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

function request(){
  getJSON('http://192.168.100.58/anime%20jquery/listaDeAnimes.json', function(error, response){
    console.log(response);
  });
}
