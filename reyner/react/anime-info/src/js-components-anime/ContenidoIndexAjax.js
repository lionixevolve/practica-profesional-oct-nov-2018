import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';

var anime = [];
$.ajax({
  method: "GET",
  url: "http://localhost/proyectos/reyner/react/anime-informa/src/animes.json",
  dataType: "json"
});

export const ContenidoIndexAjax = (props) => {
  return (
    <div>
      <Lista />
      <Populares />
      <div className="row">

      </div>
      <Nuevos/>
      <div className="row">
        
      </div>
    </div>
  );
}
