import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="card footer">
      <div className="card-body">
      <h5>Desea agregar animes?</h5>
        <hr />
        <div className="dropdown">
          <button className="btn btn-info dropdown-toggle" type="button" id="opcionesAnimes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Opciones
          </button>
          <div className="dropdown-menu" aria-labelledby="opcionesAnimes">
            <Link to="/agregar" className="dropdown-item">Agregar Anime</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
