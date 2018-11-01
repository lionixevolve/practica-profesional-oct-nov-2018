import React from 'react';

export const Lista = () => {
  return (
    <div>
      <div id="lista" className="relleno"></div>
      <div className="row">
        <div  className="col-lg-6 col-md-6 col-sm-8">
          <h5><span className="fi-list" title="list" aria-hidden="true"/> <strong>Lista de animes</strong></h5>
        </div>
      </div>
      <hr id="populares" className="border-secondary"/>
    </div>
  );
}
