import React, { Component } from 'react';
import { Carta } from './Carta';
import { Nuevos } from './Nuevos';
import { Populares } from './Populares';
import { Lista } from './Lista';
import $ from 'jquery';
import toastr from 'toastr';



export class ContenidoIndexAjax extends Component{
  constructor(props){
    super(props);
    this.state = {
    items: []
    };
  }

  componentWillMount(){
    $.ajax({
      method: "GET",
      url: "http://192.168.100.51/crmLionix/suitecrm/service/v4_1/rest.php?method=get_entries&input_type=JSON&response_type=JSON&rest_data={%20%22session%22:%226qnvhf7kdtds4rsri9svajb6t3%22,%20%22module_name%22:%22Opportunities%22,%20%22ids%22:{%220%22:%2248e432f1-a3fa-9a0f-647d-5bfda1ccd599%22,%20%221%22:%224dd3f9ec-b39e-187c-b7c5-5bfda4f81613%22,%222%22:%223226b856-7645-e0e9-136c-5bfda05202a7%22,%223%22:%22e2ae4113-5027-fa92-3fbc-5bfd9fabb302%22,%20%224%22:%223cb8761d-ac4e-0257-e8d8-5bfda4b309d8%22,%225%22:%22ccf2a680-f60d-4b0b-c04a-5bfd9f63010a%22,%226%22:%229712b574-bf7d-0762-9618-5bfda3ebb7db%22,%227%22:%22d7889651-5ccd-362c-55c7-5bfda29e370c%22},%20%22select_fields%22:{%22name%22:%22name%22,%20%22description%22:%22description%22,%22alt_c%22:%22alt_c%22,%20%22moreinfo_c%22:%22moreinfo_c%22,%20%22src_c%22:%22src_c%22,%20%22category_c%22:%22category_c%22},%20%22link_name_to_fields_array%22:{}%20}",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          items: respuesta.entry_list
        })
      }.bind(this)
    });

    $.ajax({
      method: "GET",
      url: "http://192.168.100.53/miCRM/SuiteCRM/service/v4_1/rest.php?method=get_entries&input_type=JSON&response_type=JSON&rest_data={%20%22session%22:%20%22gt25gvgtpfevfnc4qsctlfmjpm%22,%20%22module_name%22:%20%22Opportunities%22,%20%22ids%22:%20{%20%220%22:%20%221fa006f5-6755-4835-4c0e-5bfda3c92db2%22,%221%22:%20%2223a7adbc-b941-8634-1aef-5bfda4678b5b%22,%222%22:%20%2246530580-8e2f-093c-cb1f-5bfda118ffc3%22,%223%22:%20%2266c24dbd-34af-97b7-482d-5bfda1766021%22,%224%22:%20%228f71b9f6-336a-77ee-9e47-5bfda471e39a%22,%225%22:%20%22bbe4fab2-f787-108b-20cc-5bfda486c7c7%22,%226%22:%20%229712b574-bf7d-0762-9618-5bfda3ebb7db%22,%227%22:%20%22bbf21796-ee7c-c7ff-6437-5bfda38757b9%22%20},%20%22select_fields%22:%20{%20%22name%22:%20%22name%22,%20%22description%22:%20%22description%22,%20%22alt_c%22:%20%22alt_c%22,%20%22moreinfo_c%22:%20%22moreinfo_c%22,%20%22src_c%22:%20%22src_c%22,%20%22category_c%22:%20%22category_c%22%20},%20%22link_name_to_fields_array%22:%20{}%20}",
      dataType: "json",
      success: function(respuesta) {
        this.setState({
          items: respuesta
        })
      }.bind(this),
    });

  };

  render(){
    var animes = this.state.items

    animes.map((anime) => {
      anime.src = anime.name_value_list.src_c.value;
      anime.alt = anime.name_value_list.alt_c.value;
      anime.title = anime.name_value_list.name.value;
      anime.description = anime.name_value_list.description.value;
      anime.label = anime.name_value_list.category_c.value;
      anime.moreinfo = anime.name_value_list.moreinfo_c.value;
      anime.name_value_list;
      return anime;
    });

    console.log(animes)

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
