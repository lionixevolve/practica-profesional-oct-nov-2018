import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

var anime = [];

$.ajax({
  method: "GET",
  url: "http://localhost:3000/src/animes.json",
  dataType: "json",
  beforeSend: function () {
    console.log("Espere porfavor");
  },
  success: function (response) {
    console.log("Los archivos han llegado con exito");
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
