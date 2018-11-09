import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Indice } from './Indice';
import { Naruto } from './Naruto';

export const Contenedor = () => {
  return (
    <Router>
      <div className="container" data-spy="scroll" data-target="#navbarAnimeInforma" data-offset="0">
        <Route exact path="/" component={Indice}/>
        <Route exact path="/naruto" component={Naruto}/>
      </div>
    </Router>
  );
}
