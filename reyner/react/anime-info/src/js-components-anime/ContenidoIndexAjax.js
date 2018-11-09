import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

var anime = [];

export class ContenidoIndexAjax extends Component{
  render(){
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
}
