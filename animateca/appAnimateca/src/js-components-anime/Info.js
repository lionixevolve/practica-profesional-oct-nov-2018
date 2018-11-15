import React from 'react';

export const Info = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <img className="img-fluid rounded" alt="Naruto Shippuden" src="https://steemitimages.com/DQmUnkJ7Qoub1kejcg4jRA5QoV9cJFAqK15W9VSLPuMxDF5/A3E.jpg"/>
      </div>
      <div className="bg-transparent col-md-6 col-sm-12" id="CartaTexto">
        <img className="card-img img-fluid" id="ImgFondo" src="https://i1.wp.com/ramenswag.com/wp-content/uploads/2016/05/tailed_beast_naruto_minimalist_wallpaper_by_zacharychua-d9u3mwd.png?ssl=1" alt="Bg imagen"/>
        <div className="card-img-overlay">
          <h5 className="card-title text-white"><strong>Sinopsis</strong></h5>
          <p className="card-text text-justify text-white">Naruto ha pasado éstos últimos 3 años adiestrando al lado de Jiraiya, el profesor pervertido, mientras que los demás han alcanzado ya rangos superiores, en su mayor parte chunin, naruto en su instante no lo consiguió por el ataque a Konoha a lo largo de los examenes, y después con su ausencia no pudo regresar a presentarse.</p>
        </div>
      </div>
    </div>
  );
}
