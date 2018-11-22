import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="card footer">
      <div className="card-body">
        <h5>Opciones</h5>
        <hr />
        <p>- Agregar nuevo anime <Link to="/agregar" id="agregarAnime" className="btn btn-info text-white" data-toggle="tooltip" data-placement="top" title="Agregar un nuevo anime"><span className="fi-cloud-upload" aria-hidden="true"></span></Link></p>
      </div>
    </div>
  );
}
