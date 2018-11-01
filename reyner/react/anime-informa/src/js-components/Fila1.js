import React from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';

export const Fila1 = () => {
  return (
    <div>
      <div className="row">

        <Carta
        src="imagenes/naruto-shippuden-split-i30936.jpg"
        alt="Imagen Naruto"
        title="Naruto Shippuden"
        info="Naruto ha pasado éstos últimos 3 años adiestrando al lado de Jiraiya..."
        masinfo="Mas informacion acerca de Naruto" />

        <Carta
        src="imagenes/one-piece_0.jpg"
        alt="Imagen One piece"
        title="One piece"
        info="Riqueza, fama, poder... un hombre había obtenido todo en este mundo, era el Rey de los Piratas Gold Roger..."
        masinfo="Mas informacion acerca de One piece" />

        <Carta
        src="imagenes/1526420779-dragon-ball.jpg"
        alt="Imagen DBZ"
        title="Dragon Ball Z"
        info="La historia de Dragon Ball Z se divide en cuatro ramas centrales, repartidas en un total de 291 episodios..."
        masinfo="Mas informacion acerca de DBZ" />

      </div>
      <Nuevos />
      <div className="row">
        <Carta
        src="imagenes/986749-zatch-bell-wallpaper-3840x2160-phone.jpg"
        alt="Imagen Zatch Bell"
        title="Zatch Bell"
        info="Cada mil años, cien niños mamodo se dirigen al mundo humano, en donde se realiza una batalla para decidir el rey del mundo mamodo..."
        masinfo="Mas informacion acerca de Zatch Bell" />

        <Carta
        src="imagenes/5b4a508f4a395.jpeg"
        alt="Imagen SNK"
        title="Shingeki no Kyojin"
        info="Hace varios años, los humanos fueron casi exterminados por los titanes. Los titanes son increíblemente altos, parece que no tienen inteligencia..."
        masinfo="Mas informacion acerca de Shingeki" />

        <Carta
        src="imagenes/Culturageek.com_.ar-Boku-No-Hero-Academia-S3.jpg"
        alt="Imagen Boku no Hero"
        title="Boku no Hero"
        info="Las personas no nacen iguales, hecho que Midoriya Izuku corroboró cuando sus compañeros de clase se metían con él..."
        masinfo="Mas informacion acerca de Boku no Hero" />
      </div>
    </div>
  );
}
