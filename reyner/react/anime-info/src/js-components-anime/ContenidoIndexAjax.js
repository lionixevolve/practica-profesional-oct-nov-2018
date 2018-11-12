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
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost/proyectos/reyner/react/anime-info/src/animes.json", {mode: 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log("Holaaaaaaaaaaaaa");
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: "Error"
          });
          console.log(this.state.error);
        }
      )
  }

  render(){
    var animes = this.state.items;
    var listaNuevos = [];
    var listaPopulares = [];
    var cantidad = animes.length;

    for (let i=0; i<cantidad; i++){
      if (animes.etiqueta === "Populares"){
        listaPopulares.push(
          <Carta
          src={animes[i].src}
          alt={animes[i].alt}
          title={animes[i].title}
          info={animes[i].info}
          masinfo={animes[i].masinfo}/>
        );
      } else {
        listaNuevos.push(
          <Carta
          src={animes[i].src}
          alt={animes[i].alt}
          title={animes[i].title}
          info={animes[i].info}
          masinfo={animes[i].masinfo}/>
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
  }
}
