import React from 'react';
import { Link } from 'react-router-dom';

export const Titulo = (props) => {
  return (
    <div>
      <div id="lista" className="relleno"></div><hr id="informacion"/>
      <div className="row">
        <div className="col-1">
          <h5><Link to="/" id="atras" className="badge badge-dark mt-2 text-white" data-toggle="tooltip" data-placement="top" title="Volver a la pagina anterior"><span className="fi-arrow-left" aria-hidden="true"></span></Link></h5>
        </div>
        <div className="col-10">
          <h3 className="text-center"><img id="IconoNaruto" alt="Logo konoha" name="Konoha" src="https://vignette.wikia.nocookie.net/shinobito/images/9/98/Naruto-konoha-symbol-i7.png/revision/latest?cb=20120602011750"/> Naruto Shippuden</h3>
        </div>
      </div>
      <hr/>
    </div>
  );
}
