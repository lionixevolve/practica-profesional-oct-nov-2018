import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

var anime = [];

/*$.ajax({
  method: "POST",
  url: "http://localhost/proyectos/reyner/react/anime-info/src/animes.json",
  dataType: "jsonp",
  beforeSend: function () {
    console.log("Espere porfavor");
  },
  success: function (reponse) {
    console.log("Siiiiiiiiiiiiiiii!!!!!!!!!!!!!!!!!!!");
  }
});*/
$.ajax({
  method: "GET",
  url: "http://localhost/proyectos/reyner/react/anime-info/src/animes.json",
  dataType: "jsonp",
  success: function(anime){
    console.log("Holaaaaaaaaaaaaa");
  }
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
