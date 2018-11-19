
// Reyner  http://192.168.100. /proyectos/reyner/react/anime-info/src/animes2.json
//jaycob   http://192.168.100. /AutoPag/php/animes.json
// jesus   http://192.168.100. /anime%20jquery/listaDeAnimes.json
toastr.options.positionClass = 'toast-bottom-right',
toastr.options.timeOut = '2000';

function CargarAnimeJesus() {
  return new Promise((resolve, reject) => {
    $.ajax({
        type: "GET",
        url: "http://192.168.100.51/anime%20jquery/listaDeAnimes.json",
        datatype: "json",
        success: function(response) {
          var datos=response;
          for(i = 0; i < datos.length; i++){
               if (datos[i].label == "Populares"){
                 $('#Tableall').append('<tr>'+
                 '<td align="center" style="dislay: none;" >' +
                 '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                  datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
             }
               else {
                 $('#TableallNuevos').append('<tr>'+
                 '<td align="center" style="dislay: none;" >' +
                 '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                  datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
             }
           }
           toastr["success"]("Se logró cargar correctamente!", "Cargado!")
          resolve(response);
        }, //debe cerrar el succes
        error: function(error) {
          toastr["error"]("No se logró cargar!", "Error!")
            reject();
        }
    });
  });
} //cierra funcion jesus


function CargarAnimeReyner() {
  return new Promise((resolve, reject) => {
    $.ajax({
        type: "GET",
        url: "http://192.168.100.53/proyectos/reyner/react/anime-info/src/animes2.json",
        datatype: "json",
        success: function(response) {
          var datos=response;
          for(i = 0; i < datos.length; i++){
               if (datos[i].label == "Populares"){
                 $('#Tableall').append('<tr>'+
                 '<td align="center" style="dislay: none;" >' +
                 '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                  datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
             }
               else {
                 $('#TableallNuevos').append('<tr>'+
                 '<td align="center" style="dislay: none;" >' +
                 '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                  datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
             }
           }
           toastr["success"]("Se logró cargar correctamente!", "Cargado!")
          resolve(response);
        }, //debe cerrar el succes
        error: function(error) {
          toastr["error"]("No se logró cargar!", "Error!")
            reject();
        }
    });
  });
} //cierra funcion reyner


function CargarAnimeJaycob() {
  return new Promise((resolve, reject) => {
    $.ajax({
        type: "GET",
        url: "http://192.168.100.54/AutoPag/php/animes.json",
        datatype: "json",
        success: function(response) {

          resolve(response);
        },
        error: function(error) {
          toastr["error"]("No se logró cargar!", "Error!")
            reject();
        }
    });
  });
}



/* for agrega animes
var datos=response;
for(i = 0; i < datos.length; i++){
     if (datos[i].label == "Populares"){
       $('#Tableall').append('<tr>'+
       '<td align="center" style="dislay: none;" >' +
       '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
        datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
   }
     else {
       $('#TableallNuevos').append('<tr>'+
       '<td align="center" style="dislay: none;" >' +
       '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
        datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
   } */
