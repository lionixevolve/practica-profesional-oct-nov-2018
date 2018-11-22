import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

var key = "";
var i = 1;

export class ContenidoIndexAjaxHOF extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
    this.carta = this.carta.bind(this);
    this.etiqueta = this.etiqueta.bind(this);
    this.llave = this.llave.bind(this);
  }

  componentWillMount(){
    $.ajax({
      method: "GET",
      url: "http://192.168.100.56/AutoPag/php/animes.json",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          items: respuesta
        })
      }.bind(this)
    });
  };

  llave(){
    return key = "key-"+i;
  }

  carta(cartaInfo) {
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

  etiqueta(array, tag) {
    var listaAnimes = [];

    for (let element of array) {
      this.llave();
      if (tag === element.label) {
        listaAnimes.push(this.carta(element));
      }
      i++;
    }
    return listaAnimes;
  }

  render(){
    var animes = this.state.items;

    return (
      <div>
        <Lista />
        <Populares />
        <div className="row">
          {this.etiqueta(animes, "Populares")}
        </div>
        <Nuevos/>
        <div className="row">
          {this.etiqueta(animes, "Nuevos")}
        </div>
      </div>
    );
  };
}
