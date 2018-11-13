
  function MostrarAnimes(){
    $.ajax({
     method: 'GET',
     url: 'http://192.168.100.51/proyectos/reyner/react/anime-info/src/animes2.json',
     dataType: "json",
             success: function(respuesta) {
              var datos = respuesta;

            for(i = 0; i < datos.length; i++){
              if (datos[i].label == "Populares"){
                $('#Table').append('<tr>'+
                '<td align="center" style="dislay: none;" >' + '<div>' + '<img class="img-fluid" src="'  + datos[i].src + '">' + '</div>'  + '</td>' +
                '<td style="dislay: none;" >' + '<h6>' + datos[i].title + '</h6>' + datos[i].description + '</td>' + '</tr>')
            }
              else {
                $('#TableEstrenos').append('<tr>'+
                '<td align="center" style="dislay: none;" >' + '<div>' + '<img class="img-fluid" src="'  + datos[i].src + '">' + '</div>'  + '</td>' +
                '<td style="dislay: none;" >' + '<h6>' + datos[i].title + '</h6>' + datos[i].description + '</td>'+'</tr>')
            }
            };
            }
          })
  }
