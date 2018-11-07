function mostrar(){
  document.getElementById("accion").style.display = "none";

}

function ocultar(){
  document.getElementById("accion").style.display = "none";

}

function changebtn(){
  var caja = document.getElementById("accion");
  if (caja.style.display == "none"){
    mostrar();
    document.getElementById("cdboton").value + "mostrar"
  }
  else {
    ocultar();
    document.getElementById("cdboton").value + "ocultar"
  }
}


function mostrar(){
  document.getElementById("misterio").style.display = "none";

}

function ocultar(){
  document.getElementById("misterio").style.display = "none";

}

function changebtn(){
  var caja = document.getElementById("misterio");
  if (caja.style.display == "none"){
    mostrar();
    document.getElementById("cboton").value + "mostrar";
  }
  else {
    ocultar();
    document.getElementById("cboton").value + "ocultar";
  }
}
