import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Contenedor } from './js-components-anime/Contenedor';


class AnimeContainer extends Component {
  render() {
    return <Contenedor />
  }
}

ReactDOM.render(<AnimeContainer />, document.getElementById('app'));
