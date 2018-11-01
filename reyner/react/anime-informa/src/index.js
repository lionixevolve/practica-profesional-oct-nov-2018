import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar } from './js-components/NavBar';

class AnimeContainer extends Component {
  render() {
    return <NavBar />
  }
}

ReactDOM.render(<AnimeContainer />, document.getElementById('app'));
