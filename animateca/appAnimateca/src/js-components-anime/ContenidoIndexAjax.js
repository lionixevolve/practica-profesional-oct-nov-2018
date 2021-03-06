import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';




export class ContenidoIndexAjax extends Component{
  constructor(props){
    super(props);
    this.state = {
    itemsReyner: [],
    itemsJesus: [],
    itemsJaycob: []
    };
  }

  componentWillMount(){
    $.ajax({
      method: "GET",
      url: "http://192.168.100.53/miCRM/SuiteCRM/service/v4_1/rest.php?method=get_entry_list&input_type=JSON&response_type=JSON&rest_data={%20%22session%22:%20%22gt25gvgtpfevfnc4qsctlfmjpm%22,%20%22module_name%22:%20%22Opportunities%22,%20%22query%22:%20%22%22,%20%22order_by%22:%20%22%22,%20%22offset%22:%200,%20%22select_fields%22:%20{%22name%22:%22name%22,%20%22description%22:%22description%22,%22alt_c%22:%22alt_c%22,%20%22moreinfo_c%22:%22moreinfo_c%22,%20%22src_c%22:%22src_c%22,%20%22category_c%22:%22category_c%22},%20%22link_name_to_fields_array%22:%20{},%20%22max_results%22:%2050,%20%22deleted%22:%200%20}",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          itemsJesus: respuesta.entry_list
        })
      }.bind(this),
    });

    $.ajax({
      method: "GET",
      url: "http://192.168.100.51/crmLionix/suitecrm/service/v4_1/rest.php/?method=get_entry_list&input_type=JSON&response_type=JSON&rest_data={%20%22session%22:%20%226qnvhf7kdtds4rsri9svajb6t3%22,%20%22module_name%22:%20%22Opportunities%22,%20%22query%22:%20%22%22,%20%22order_by%22:%20%22%22,%20%22offset%22:%200,%20%22select_fields%22:%20{%22name%22:%22name%22,%20%22description%22:%22description%22,%22alt_c%22:%22alt_c%22,%20%22moreinfo_c%22:%22moreinfo_c%22,%20%22src_c%22:%22src_c%22,%20%22category_c%22:%22category_c%22},%20%22link_name_to_fields_array%22:%20{},%20%22max_results%22:%2050,%20%22deleted%22:%200%20}",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          itemsReyner: respuesta.entry_list
        })
      }.bind(this)
    });

    $.ajax({
      method: "GET",
      url: "http://192.168.100.55/AutoPag/php/jsongenerator.php",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          itemsJaycob: respuesta
        })
      }.bind(this)
    });
  };

  render(){
    var animesReyner = this.state.itemsReyner
    var animesJesus = this.state.itemsJesus
    var animesJaycob = this.state.itemsJaycob
    var animes = animesJesus.concat(animesReyner)

    animes.map((anime) => {
      anime.src = anime.name_value_list.src_c.value
      anime.alt = anime.name_value_list.alt_c.value
      anime.title = anime.name_value_list.name.value
      anime.description = anime.name_value_list.description.value
      anime.label = anime.name_value_list.category_c.value
      anime.moreinfo = anime.name_value_list.moreinfo_c.value
      delete anime.id
      delete anime.module_names
      return anime;
    });

    animes = animes.concat(animesJaycob)

    var cantidad = animes.length;
    var listaNuevos = [];
    var listaPopulares = [];

    for (let i=0; i<cantidad; i++){
      let key = "key-"+i;
      if (animes[i].label === "Populares"){
        listaPopulares.push(
          <Carta
          key={key}
          src={animes[i].src}
          alt={animes[i].alt}
          title={animes[i].title}
          description={animes[i].description}
          moreinfo={animes[i].moreinfo}/>
        );
      } else {
        listaNuevos.push(
          <Carta
          key={key}
          src={animes[i].src}
          alt={animes[i].alt}
          title={animes[i].title}
          description={animes[i].description}
          moreinfo={animes[i].moreinfo}/>
        );
      }
    }

    return (
      <div>
        <Lista />
        <Populares />
        <div id="listaP" className="row">
          {listaPopulares}
        </div>
        <Nuevos />
        <div id="listaN" className="row">
          {listaNuevos}
        </div>
      </div>
    );
  };
}
