import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

export class ContenidoIndexAjaxHOF extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
    this.carta = this.carta.bind(this);
    this.etiqueta = this.etiqueta.bind(this);
  }

  componentWillMount(){
    $.ajax({
      method: "GET",
      url: "http://192.168.100.62/AutoPag/php/animes.json",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          items: respuesta
        })
      }.bind(this)
    });
  };

  carta(cartaInfo) {
    return (
      <Carta
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
      if (tag === element.label) {
        listaAnimes.push(this.carta(element));
      }
    }
    return listaAnimes;
  }

  render(){
    var animes = this.state.items;
    var cantidad = animes.length;
    var listaPopulares = [];
    var listaNuevos = [];

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
