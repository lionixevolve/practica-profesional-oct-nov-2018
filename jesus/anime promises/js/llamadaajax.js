
// Reyner  http://192.168.100.51/proyectos/reyner/react/anime-info/src/animes2.json
//jaycob   http://192.168.100.62/AutoPag/php/animes.json
// jesus   http://192.168.100.58/anime%20jquery/listaDeAnimes.json
toastr.options.positionClass = 'toast-bottom-right',
toastr.options.timeOut = '2000';

function CargarAnimeJesus() {
  return new Promise((resolve, reject) => {
    $.ajax({
        type: "GET",
        url: "http://192.168.100.51/anime%20jquery/listaDeAnimes.json",
        datatype: "json",
        success: function(response) {

          resolve(response);
        },
        error: function(error) {
            reject();
        }
    });
  });
}

function CargarAnimeReyner() {
  return new Promise((resolve, reject) => {
    $.ajax({
        type: "GET",
        url: "http://192.168.100.53/proyectos/reyner/react/anime-info/src/animes2.json",
        datatype: "json",
        success: function(response) {
          resolve(response);
        },
        error: function() {
            reject();
        }
    });
  });
}


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
            reject();
        }
    });
  });
}



//Agrega los animes

function AgregarAnimeJesus(response){
   var datos=response;
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
}
}

function AgregarAnimeReyner(response){
   var datos=response;
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
}
}


function AgregarAnimeJaycob(response){
   var datos=response;
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
}
}
