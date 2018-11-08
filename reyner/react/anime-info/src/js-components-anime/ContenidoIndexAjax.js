import React, {Component} from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';

export class ContenidoIndexAjax extends Component{
  constructor(props) {
    super(props);
    this.state = {
      animes: []
    }
  }

  componentWillMount() {
    fetch('http://localhost/proyectos/reyner/react/anime-info/src/animes.json')
      .then((response) => {
        console.log(response.json)
        return response.json
      })
      .then((anime) => {
        console.log(anime)
        this.setState({ animes: anime })
      })
  }

  render(){
    return (
      <div>
        <Lista />
        <Populares />
        <div className="row">
          {this.state.animes.map(anime => {
            return (
              <Carta
              src={anime.src}
              alt={anime.alt}
              title={anime.title}
              info={anime.info}
              masinfo={anime.masinfo}
              />
            );
          })}
        </div>
        <Nuevos/>
        <div className="row">

        </div>
      </div>
    );
  }
}
