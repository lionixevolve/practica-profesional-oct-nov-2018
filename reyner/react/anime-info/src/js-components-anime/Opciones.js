import React from 'react';

export const Opciones = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.href}>{props.title}</a>
    </li>
  );
}
