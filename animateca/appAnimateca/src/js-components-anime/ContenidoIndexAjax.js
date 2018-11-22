import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';
import toastr from 'toastr';

toastr.options.timeOut = '1250';
toastr.options.positionClass = 'toast-bottom-left';

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
        url: "http://192.168.100.54/proyectos/animateca/appAnimateca/src/animes.json",
        dataType: "json",
        success: function(respuesta) {
          setTimeout( function(){ toastr["info"]("Cargando") }, 0)
          setTimeout( function(){ toastr["success"]("Cargado con éxito"); }, 1750)
          resolve(this.setState({
            items: respuesta
          }))
        }.bind(this),
        error: function(){
          toastr.options.timeOut = '2500';
          reject(toastr["error"]("Error 404 Not Found"))
        }
      });
    })
  };

  componentDidMount(){
    $('#listaP').hide()
    $('#listaN').hide()

    setTimeout(function(){
      $('#listaP').show()
      $('#listaN').show()
    }, 1750)
  }

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
        <div id="listaP" className="row">
          {listaPopulares}
        </div>
        <Nuevos />
        <div id="listaN" className="row">
          {listaNuevos}
        </div>
      </div>
    );
  };
}
