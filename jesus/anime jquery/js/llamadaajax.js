
  function MostrarAnimes(){
    $.ajax({
     method: 'GET',
     url: 'http://localhost/anime%20jquery/listaDeAnimes.json',
     dataType: "json",
             success: function(respuesta) {
              var datos = respuesta;
               $('#Table').append('<tr><td width="500"></td>'+
                '<td align="center"><h4>Descripción</h4></td>');
            for(i = 0; i < datos.length; i++){
              $('#Table').append('<tr>'+
              '<td align="center" style="dislay: none;" >' + '<div>' +'<img class="img-fluid" src="'  + datos[0].Animes[0].src + '">' + '</div>'  + '</td>'+
              '<td style="dislay: none;" >' + datos[0].Animes[0].Descripción + '<br><br>' + '<a href="' + datos[0].Animes[0].Link + '"><button class="form-control bg-info text-white">Ver </button> </a>' + '</td>'+'</tr>' +

              '<td align="center" style="dislay: none;" >' + '<div>' +'<img class="img-fluid" src="'  + datos[0].Animes[1].src + '">' + '</div>'  + '</td>'+
              '<td style="dislay: none;" >' + datos[0].Animes[1].Descripción + '<br><br>' + '<a href="' + datos[0].Animes[1].Link + '"><button class="form-control bg-info text-white">Ver </button> </a>' + '</td>'+'</tr>' +

              '<td align="center" style="dislay: none;" >' + '<div>' +'<img class="img-fluid" src="'  + datos[0].Animes[2].src + '">' + '</div>'  + '</td>'+
              '<td style="dislay: none;" >' + datos[0].Animes[2].Descripción + '<br><br>' + '<a href="' + datos[0].Animes[2].Link + '"><button class="form-control bg-info text-white">Ver </button> </a>' + '</td>'+'</tr>' +

              '<td align="center" style="dislay: none;" >' + '<div>' +'<img class="img-fluid" src="'  + datos[0].Animes[3].src + '">' + '</div>'  + '</td>'+
              '<td style="dislay: none;" >' + datos[0].Animes[3].Descripción + '<br><br>' + '<a href="' + datos[0].Animes[3].Link + '"><button class="form-control bg-info text-white">Ver </button> </a>' + '</td>'+'</tr>'
            )};
            }
          })
  }
