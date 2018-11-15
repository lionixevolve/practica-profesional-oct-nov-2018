import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

export class ContenidoIndexAjax extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount(){
    $.ajax({
      method: "GET",
      url: "http://192.168.100.53/proyectos/reyner/react/anime-info/src/animes2.json",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          items: respuesta
        })
      }.bind(this)
    });
  };

  render(){
    var animes = this.state.items;
    var cantidad = animes.length;
    var listaNuevos = [];
    var listaPopulares = [];

    for (let i=0; i<cantidad; i++){
      let key = "key-"+i;
      if (animes[i].label === "Populares"){
        listaPopulares.push(
          <Carta
          key={key}
          src={animes[i].src}
          alt={animes[i].alt}
          title={animes[i].title}
          description={animes[i].description}
          moreinfo={animes[i].moreinfo}/>
        );
      } else {
        listaNuevos.push(
          <Carta
          key={key}
          src={animes[i].src}
          alt={animes[i].alt}
          title={animes[i].title}
          description={animes[i].description}
          moreinfo={animes[i].moreinfo}/>
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
        <Nuevos />
        <div className="row">
          {listaNuevos}
        </div>
      </div>
    );
  };
}
