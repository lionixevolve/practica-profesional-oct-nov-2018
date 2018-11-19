import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

toastr.options.timeOut = "3000";

export class ContenidoIndexAjax extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount(){
    new Promise((resolve, reject) => {
      $.ajax({
        method: "GET",
        url: "http://192.168.100.53/proyectos/animateca/appAnimateca/src/animes.json",
        dataType: "json",
        success: function(respuesta) {
          setTimeout( function(){ toastr["info"]("Cargando") }, 0)
          setTimeout( function(){
            toastr["success"]("Cargando con exito");
            resolve(this.setState({
              items: respuesta
            }))}, 3000)
        }.bind(this),
        error: function(){
          reject(toastr["error"]("Error 404 Not Found"))
        }
      });
    })
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
