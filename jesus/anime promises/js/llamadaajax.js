
// Reyner  http://192.168.100. /proyectos/reyner/react/anime-info/src/animes2.json
//jaycob   http://192.168.100. /AutoPag/php/animes.json
// jesus   http://192.168.100. /anime%20jquery/listaDeAnimes.json
toastr.options.positionClass = 'toast-bottom-right',
toastr.options.timeOut = '2500';

function CargarTodos(){
  return new Promise((resolve, reject) => {
    $.ajax({
        type: "GET",
        url: "http://192.168.100.51/anime%20promises/listaDeAnimes.json",
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
               else if (datos[i].label == "Nuevos") {
                 $('#TableallNuevos').append('<tr>'+
                 '<td align="center" style="dislay: none;" >' +
                 '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                  datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
             }
           }
           toastr["success"]("Se logró cargar correctamente!", "Cargado JSON Jesus")
         resolve(response);
        }, //debe cerrar el succes
        error: function(error) {
          toastr["error"]("No se logró cargar JSON Jesus", "Error!")
            reject();
        }
    }); //ajax jesus

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
             else if (datos[i].label == "Nuevos") {
               $('#TableallNuevos').append('<tr>'+
               '<td align="center" style="dislay: none;" >' +
               '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' +
                datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
           }
           }
           toastr["success"]("Se logró cargar correctamente!", "Cargado JSON Reyner")
          resolve(response);
        }, //debe cerrar el succes
        error: function(error) {
          toastr["error"]("No se logró cargar JSON Reyner", "Error!")
            reject();
        }
    });//ajax reyner

    $.ajax({
        type: "GET",
        url: "http://192.168.100.54/AutoPag/php/animes.json",
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
           toastr["success"]("Se logró cargar correctamente!", "Cargado JSON Jaycob!")
          resolve(response);
        },
        error: function(error) {
          toastr["error"]("No se logró cargar JSON Jaycob!", "Error!")
            reject();
        }
    });


  });

}











//Separados
function CargarAnimeJesus() {
  return new Promise((resolve, reject) => {
    $.ajax({
        type: "GET",
        url: "http://192.168.100.51/anime%20promises/listaDeAnimes.json",
        datatype: "json",
        success: function(response) {
          var datos=response;
          for(i = 0; i < datos.length; i++){
               if (datos[i].label == "Populares"){
                     $('#Tableall').append('<tr>'+
                     '<td align="center" style="dislay: none;" >' +
                     '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' + datos[i].description  +
                     '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>' + '</td>' + '</tr>' + '<br><br>')
                    }
               else if (datos[i].label == "Nuevos") {
                   $('#TableallNuevos').append('<tr>'+ '<td align="center" style="dislay: none;" >' + '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' + datos[i].description  +
                   '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
              } else {
                $('#animes').append('<div id="otros">' + '<section class="main row">' + '<article class="col-xs-12 col-sm-12 col-md-5 col-lg-5">' + '<h2 class="text-center">' + datos[i].label + ':</h2>' + '<br>' + '</article>' + '<article class="col-xs-12 col-sm-12 col-md-5 col-lg-5">' + '<br>' + '</article>' + '</section>' + '<div id="otroslista"  class="table-responsive">' + '<table id="TableOtros" cellspacing="20" cellpadding="30">' + '</table>' + '</div>' + '</div>');
                $('#TableOtros').append('<tr>'+ '<td align="center" style="dislay: none;" >' +
                '<img class=" imgAjax img-fluid" src="'  + datos[i].src + '">' + '<h6>' + datos[i].title + '</h6>' + datos[i].description  + '<br><br>' + ' <button type="button" class="btn btn-primary bg-info">Ver más</button>'  + '</td>' + '</tr>' + '<br><br>')
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
}


$('#animes').append('<div id="otros">'+ '<section class="main row>"' + '<article class="col-xs-12 col-sm-12 col-md-5 col-lg-5">' +
'<h2 class="text-center">' + datos[i].label + '</h2>' + '</article>' + '<article class=class="col-xs-12 col-sm-12 col-md-5 col-lg-5">' +
'</article>' + '</article>' + '<div id="otros" class="table-responsive">' + '<table id="TableOtros" cellspacing="20" cellpadding="30">' +
'</table>' + '</div>' + '</div>')

$('#animes').append('<div id="otros">'+
'<section class="main row>"' +
'<article class="col-xs-12 col-sm-12 col-md-5 col-lg-5">' +
'<h2 class="text-center">' + datos[i].label + '</h2>' +
'</article>' +
'<article class="col-xs-12 col-sm-12 col-md-5 col-lg-5">' +
'</article>' +
'</section>' +
'<div id="otros" class="table-responsive">' +
'<table id="TableOtros" cellspacing="20" cellpadding="30">' +
'</table>' +
'</div>' +
'</div>')


*/
