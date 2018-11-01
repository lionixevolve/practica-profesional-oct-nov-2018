import React from 'react';

export const Carta = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="card rounded shadow">
        <img className="card-img-top img-fluid" src={props.src} alt={props.alt}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-justify">{props.info}</p>
        </div>
        <div className="card-footer">
          <a className="btn btn-info" href="naruto" data-toggle="tooltip" data-placement="top" title={props.masinfo}>Mas info <span className="fi-info" title="info" aria-hidden="true"></span></a>
        </div>
      </div>
    </div>
  );
}
