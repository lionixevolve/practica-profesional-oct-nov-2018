<?php include 'anime.php' ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>AnimePY</title>
    <meta name="viewport" content="width=device-witdth, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="estilos.css" >
    <script src="js/smooth-scroll.polyfills.min.js"></script>
    <script src="js/mirror.js"></script>
    <script>
        ar scroll = new SmoothScroll('a[href*="#"]', {

        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        offset: function (anchor, toggle) {
          if (toggle.classList.closest('.my-header-nav')) {
            return 25;
          } else {
            return 50;
          }

        },
        easing: 'easeInOutCubic',
        customEasing: function (time) {

          return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        },
        updateURL: true,
        popstate: true,
        emitEvents: true
        });
    </script>
  </head>
  <body data-spy="scroll" data-target=".navbar" data-offset="50">
    <div class="container-fluid navbar-fixed-top">
      <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a class="navbar-brand" href="index.html">AnimePY</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a data-scroll class="nav-link" href="#inicio">Inicio <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a data-scroll class="nav-link" href="#accion">Accíon</a>
              </li>
              <li class="nav-item">
                <a data-scroll class="nav-link" href="#misterio">Misterio</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    <div class="container">

        <div class=" col-xs-12 " id="inicio" >
            <br>
            <br>
            <div class="col-xs-12"style="margin-top:200px;">
              <h1 id="title">AnimePY</h1>
              <h2>Diviértete con nosotros</h2>
              <center>
                <img class="img-fluid" src="images/welcome.png" alt="200">
            </div>

            <div class="col-xs-12 col-md-12 col-lg-12">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100 img-fluid" src="https://i.pinimg.com/originals/d7/f2/32/d7f232a083dbe7ba8280be553b54d323.jpg" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="https://static.zerochan.net/Altair.%28Re%3ACreators%29.full.2120082.jpg" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="http://i.ytimg.com/vi/7eKr_em55Sw/maxresdefault.jpg" alt="Third slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>

            <h2 id="lista"> <center>Lista recomendada<center></h2><br><br>
          </div>

        <button type="submit" id="btnaccion" class="btn btn-light" onclick="changebtn" >Mostrar</button>
        <div class="row" id="accion">
          <div class="col-md-12">

            <h2 id="h2">Accíon</h2>
          </div>

        </div>
        <br>

        <div class="row" id="misterio">
          <br>
          <br>
          <div class="col-md-12">
            <h2 id="h2">Misterio</h2>

            </div>
          <div class="col-xs-12 col-md-6 col-lg-4" id="mono">
            <a href="index.html"><img class="img-fluid"  src="https://lh3.googleusercontent.com/-ymWf_6nfZZ0/WeMhA4jBWcI/AAAAAAAB2uc/FbbtO2BQcekLLWEMan7B0b8QzmbkIL8gwCJoC/w1920-h1080/Blank%252B_7997e28c1ef6c1f6eb66e64ff7186c9c.jpg"></a>
            <h3>Monogatari series</h3>
            <h4>Argumento</h4>
            <p><br>La serie de Monogatari se centra en Koyomi Araragi, un estudiante de tercer año de instituto que es ahora casi humano después de haber sido vampiro por un tiempo. </p>
            <a href="fate/"> <button type="button" class="btn btn-dark" disabled>Detalles</button></a>
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4" id="gosick">
            <a href="index.html">
            <img class="img-fluid" src="https://images.alphacoders.com/226/thumb-1920-226483.jpg"  >
            </a>
            <h3>Gosick</h3>
            <h4>Argumento</h4>
            <p><br> La serie se centra principalmente en Kazuya y Victorique que tratan de resolver diferentes casos misteriosos.</p>
            <br>
            <a href="fate/"> <button type="button" class="btn btn-dark" disabled>Detalles</button></a>
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4" id="gosick">
            <a href="index.html">
            <img class="img-fluid" src="http://getwallpapers.com/wallpaper/full/3/b/1/182671.jpg"  >
            </a>
            <h3>Durarara</h3>
            <h4>Argumento</h4>
            <br><p>Mikado es testigo de una leyenda urbana en su primer día en la ciudad: el "Jinete negro", quien supuestamente es el conductor sin cabeza de una motocicleta de color negro. </p>
            <a href="fate/"> <button type="button" class="btn btn-dark" disabled>Detalles</button></a>
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4" id="gosick">
            <a href="index.html">
            <img class="img-fluid" src="https://images.alphacoders.com/735/thumb-1920-735429.png"  >
            </a>
            <h3>Occultic;Nine</h3>
            <h4>Argumento</h4>
            <br><p>Occultic;Nine se centra más, como su propio nombre indica, en el mundo de lo oculto y lo paranormal, contándonos las historias de nueve personas a lo largo y ancho del mundo que experimentan este tipo de sucesos.
            </p>
            <a href="fate/"> <button type="button" class="btn btn-dark" disabled>Detalles</button></a>
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4" id="gosick">
            <a href="index.html">
            <img class="img-fluid" src="http://images6.fanpop.com/image/photos/33500000/Hyouka-hyouka-33509415-1920-1080.jpg"  >
            </a>
            <h3>Hyouka</h3>
            <h4>Argumento</h4>
            <br><p>Hōtarō Oreki es un estudiante de secundaria cuya vida se basa en la ley del mínimo esfuerzo. Pensaba que todo continuaría así, pero al unirse al Club de Literatura Clásica por petición de su hermana, su vida se verá alterada.</p>
            <a href="fate/"> <button type="button" class="btn btn-dark" disabled>Detalles</button></a>
            </div>

          <div class="col-xs-12 col-md-6 col-lg-4" id="gosick">
            <a href="index.html">
            <img class="img-fluid" src="https://i.pinimg.com/originals/4c/a8/3d/4ca83dc042478e40080775b36953a511.png"  >
            </a>
            <h3>Yamada kun to 7 nin no majo </h3>
            <h4>Argumento</h4>
            <br><p>yū Yamada es un estudiante de segundo año en la preparatoria Suzaku. Ryū es un estudiante problemático con una personalidad algo apática, él siempre llega tarde a la escuela</p>
            <a href="fate/"> <button type="button" class="btn btn-dark" disabled>Detalles</button></a>
          </div>
        </div>
    </div>
  </body>
  <br>

  <footer class="page-footer font-small teal pt-4">
    <div class="container-fluid text-center text-md-left">
      <div class="row">
        <div class="col-md-6 ">
          <h5 class="text-uppercase font-weight-bold">Próximamente</h5>
          <p>Manga, Anime y comics</p>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3">
        <div class="col-md-6">
          <h5 class="text-uppercase font-weight-bold">Página Anime</h5>
          <p>Los estamos esperando </p>

        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2018 Copyright:Jaycob Badilla
    </div>

  </footer>
  <script>
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "30px 10px";

      } else {
        document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
      }
    }
  </script>
  <script>var scroll = new SmoothScroll('a[href*="#"]');</script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script>
  $(document).ready(() =>{
    $('accion').on('hide');
    $('#btnaccion').on('click', () => {
      $('#accion').toggle();
    });
    $('#btnmisterio').on('click', () => {
      $('#misterio').toggle();
    });
  });
  </script>

</html>
