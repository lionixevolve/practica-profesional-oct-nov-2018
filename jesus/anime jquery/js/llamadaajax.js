
  function MostrarAnimes(){
    $.ajax({
     method: 'GET',
     url: 'http://localhost/anime%20jquery/listaDeAnimes.json',
     dataType: "json",
             success: function(respuesta) {
              var datos = respuesta;

            for(i = 0; i < datos.length; i++){
              if (datos[i].label == "Animes"){
                $('#Table').append('<tr><td width="500"></td>'+
                 '<td align="center"><h4>Descripción</h4></td>');
                $('#Table').append('<tr>'+
                '<td align="center" style="dislay: none;" >' + '<div>' + '<img class="img-fluid" src="'  + datos[i].src + '">' + '</div>'  + '</td>' +
                '<td style="dislay: none;" >' + datos[i].description + '</td>'+'</tr>')
            }
              else {
                $('#TableEstrenos').append('<tr><td width="500"></td>'+
                 '<td align="center"><h4>Descripción</h4></td>');
                $('#TableEstrenos').append('<tr>'+
                '<td align="center" style="dislay: none;" >' + '<div>' + '<img class="img-fluid" src="'  + datos[i].src + '">' + '</div>'  + '</td>' +
                '<td style="dislay: none;" >' + datos[i].description + '</td>'+'</tr>')
            }
            };
            }
          })
  }
