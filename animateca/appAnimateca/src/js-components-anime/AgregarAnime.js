import React from 'react';

export const AgregarAnime = () => {
  return (
    <div id="agregar">
      <div id="lista" className="relleno"></div>
      <body>

                  <div className="container">
                  <h1>A grega un nuvo anime</h1>

                  <form className="" action="../php/guardar.php" method="POST">
                    <div className="form-group row">
                      <label for="name" className="col-sm-2 col-form-label">Nombre del anime</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="Title" placeholder="Anime" required/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="inputAlt" className="col-sm-2 col-form-label">Alt</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Anime" disabled/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="inputimagen" className="col-sm-2 col-form-label" >Enlace de la imagen</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="Image" placeholder="https://imagen.jpg" required/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="inputD" className="col-sm-2 col-form-label">Descripción</label>
                      <div className="col-sm-10">
                        <input type="text" name="descripcion" className="form-control" placeholder="Argumento"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="input" className="col-sm-2 col-form-label">Info</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="Moreinfo"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="intype" className="col-sm-2 col-form-label">Tipo</label>
                      <div className="col-sm-10">
                        <input type="text" name="label" className="form-control" placeholder="Argumento"/>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </form>
                </div>

    </body>
    </div>
  );
}
