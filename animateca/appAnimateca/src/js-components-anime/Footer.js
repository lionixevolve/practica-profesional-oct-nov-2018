import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="card footer">
      <div className="card-body">
      <h5>Desea agregar animes?</h5>
        <hr />
        <div class="dropdown">
          <button class="btn btn-info dropdown-toggle" type="button" id="opcionesAnimes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Opciones
          </button>
          <div class="dropdown-menu" aria-labelledby="opcionesAnimes">
            <Link to="/agregar" class="dropdown-item">Agregar Anime</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
