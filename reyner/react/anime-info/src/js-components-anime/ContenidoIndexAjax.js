import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

export class ContenidoIndexAjax extends Component {
  constructor(props) {
   super(props);
   this.state = {
     animes: []
   }
 }

  componentWillMount() {
    fetch('http://localhost/proyectos/reyner/react/anime-info/src/animes.json', {mode: 'no-cors'})
      .then((response) => {
        return response.json()
      })
      .then((anime) => {
        this.setState({ animes: anime })
        console.log(this.state.animes)
      })
  }

  render(){
    var listaNuevos = [];
    var listaPopulares = [];

    this.state.animes.map(anime => {
      if (anime.etiqueta === "Populares"){
        listaPopulares.push(
          <Carta
          src={anime.src}
          alt={anime.alt}
          title={anime.title}
          info={anime.info}
          masinfo={anime.masinfo}/>
        );
      } else {
        listaNuevos.push(
          <Carta
          src={anime.src}
          alt={anime.alt}
          title={anime.title}
          info={anime.info}
          masinfo={anime.masinfo}/>
        );
      }
    })

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
