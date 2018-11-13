
  function MostrarAnimes(){
    $.ajax({
     method: 'GET',
     url: 'http://192.168.100.62/AutoPag/php/animes.json',
     dataType: "json",
             success: function(respuesta) {
              var datos = respuesta;

            for(i = 0; i < datos.length; i++){
              if (datos[i].label == "Populares"){
                $('#Table').append('<tr>'+
                '<td align="center" style="dislay: none;" >' +
                '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                 datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
            }
              else {
                $('#TableEstrenos').append('<tr>'+
                '<td align="center" style="dislay: none;" >' +
                '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                 datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
            }
            };
            }
          })
  }
