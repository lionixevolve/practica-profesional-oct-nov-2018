import React, {Component} from 'react';
import { NavBar } from './NavBar';
import { NavBar2 } from './NavBar2';
import { ContenidoIndexNode } from './ContenidoIndexNode';
import { ContenidoIndexAjax } from './ContenidoIndexAjax';
import { ContenidoInfo } from './ContenidoInfo';

export class Contenedor extends Component{

  constructor(props){
    super(props)
    this.state = { info: 'index' }
    this.ClickMasInfo = this.ClickMasInfo.bind(this);
    this.BotonAtras = this.BotonAtras.bind(this);
  }

  ClickMasInfo(){
    this.setState({ info: 'info' });
  }

  BotonAtras(){
    this.setState({ info: 'index' })
  }

  render(){
    if (this.state.info === 'index') {
      return (
        <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
          <NavBar estado={this.state.info}/>
          <ContenidoIndexAjax onClick={this.ClickMasInfo}/>
        </div>
      );
    }
    if(this.state.info === 'info') {
      return (
        <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
          <NavBar estado={this.state.info}/>
          <ContenidoInfo onClick={this.BotonAtras}/>
        </div>
      );
    }
  }
}
