import React from 'react';

export const Titulo = () => {
  return (
    <div>
      <div id="lista" className="relleno"></div><hr id="informacion"/>
      <div className="row">
        <div className="col-1">
          <h5><a href=".." className="badge badge-dark mt-2" data-toggle="tooltip" data-placement="top" title="Volver a la pagina anterior"><span className="fi-arrow-left" aria-hidden="true"></span></a></h5>
        </div>
        <div className="col-10">
          <h3 className="text-center"><img id="IconoNaruto" name="Konoha" src="../imagenes/Naruto-konoha-symbol-i7.png"/> Naruto Shippuden</h3>
        </div>
      </div>
      <hr/>
    </div>
  );
}
