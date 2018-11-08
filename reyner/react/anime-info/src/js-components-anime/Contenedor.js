import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Naruto } from './Naruto';
import { Indice } from './Indice';

export class Contenedor extends Component{
  render(){
    return (
      <div>
        <Router>
          <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
            <Route exact path="/" component={Indice}/>
            <Route path="/naruto" component={Naruto}/>
          </div>
        </Router>
      </div>
    )
  }
}
