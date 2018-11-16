
// Reyner  http://192.168.100.51/proyectos/reyner/react/anime-info/src/animes2.json
//jaycob   http://192.168.100.62/AutoPag/php/animes.json
// jesus   http://192.168.100.58/anime%20jquery/listaDeAnimes.json



new Promise((resolve,reject) => {
    $.ajax({
         method: 'GET',
         url: 'http://192.168.1.8/anime%20jquery/listaDeAnimes.json',
         dataType: "json",
          success: function(datos) {
                  toastr.success('Cargo Correctamente')
                  for(i = 0; i < datos.length; i++){
                    if (datos[i].label == "Populares"){
                      $('#TableJesus').append('<tr>'+
                      '<td align="center" style="dislay: none;" >' +
                      '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                       datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
                  }
                    else {
                      $('#TableJesusNuevos').append('<tr>'+
                      '<td align="center" style="dislay: none;" >' +
                      '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                       datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
                  }
                  };
                },
                error: function(){
                  toastr.error('Error')
                }
    });
  });





/*    $.ajax({
     method: 'GET',
     url: 'http://192.168.100.51/anime%20jquery/listaDeAnimes.json',
     dataType: "json",
      success: function(respuesta) {
              var datos = respuesta;
            for(i = 0; i < datos.length; i++){
              if (datos[i].label == "Populares"){
                $('#TableJesus').append('<tr>'+
                '<td align="center" style="dislay: none;" >' +
                '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                 datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
            }
              else {
                $('#TableJesusNuevos').append('<tr>'+
                '<td align="center" style="dislay: none;" >' +
                '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                 datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
            }
            };
            }
          })
  }


    function MostrarAnimesReyner(){
      $.ajax({
       method: 'GET',
       url: 'http://192.168.100.53/proyectos/reyner/react/anime-info/src/animes2.json',
       dataType: "json",
               success: function(respuesta) {
                var datos = respuesta;
              for(i = 0; i < datos.length; i++){
                if (datos[i].label == "Populares"){
                  $('#TableReyner').append('<tr>'+
                  '<td align="center" style="dislay: none;" >' +
                  '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                   datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
              }
                else {
                  $('#TableReynerNuevos').append('<tr>'+
                  '<td align="center" style="dislay: none;" >' +
                  '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                   datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
              }
              };
              }
            })
    }


    function MostrarAnimesJaycob(){
        $.ajax({
         method: 'GET',
         url: 'http://192.168.100.54/AutoPag/php/animes.json',
         dataType: "json",
                 success: function(respuesta) {
                  var datos = respuesta;
                for(i = 0; i < datos.length; i++){
                  if (datos[i].label == "Populares"){
                    $('#TableJaycob').append('<tr>'+
                    '<td align="center" style="dislay: none;" >' +
                    '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                     datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
                }
                  else {
                    $('#TableJaycobNuevos').append('<tr>'+
                    '<td align="center" style="dislay: none;" >' +
                    '<img class=" imgAjax" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                     datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
                }
                };
                }
              })
      } */
