import React, {Component} from 'react';
import { NavBar } from './NavBar';
import { NavBar2 } from './NavBar2';
import { ContenidoIndex } from './ContenidoIndex';
import { ContenidoInfo } from './ContenidoInfo';

export class Contenedor extends Component{

  constructor(props){
    super(props)
    this.state = { info: 'index' }
  }

  render(){
    if (this.state.info === 'index') {
      return (
        <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
          <NavBar />
          <ContenidoIndex />
        </div>
      );
    } else {
      return (
        <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
          <NavBar />
          <ContenidoInfo />
        </div>
      );
    }
  }
}
