import React from 'react';

export const ListaViews = (props) => {
  return (
    <div className="col-md-6 col-sm-12 card mb-4 border-secondary text-secondary">
      <h6 className="mt-2">Si han visto Naruto Shippuden</h6>
      <ul className="card-text">
        <li> Jesus </li>
        <li> Jaycob </li>
        {props.choose === 'si' ? <li> Reyner </li> : <div/>}
      </ul>
      <hr className="border-secondary"/>
      <h6>No han visto Naruto Shippuden</h6>
      <ul className="card-text mb-2">
        <li> Diana </li>
        {props.choose === 'no' ? <li> Reyner </li> : <div/>}
      </ul>
    </div>
  );
}
