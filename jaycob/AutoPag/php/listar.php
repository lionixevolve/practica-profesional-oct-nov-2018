<?php

  include 'importer.php';
  $conexion = new Conexion();
  $cnn = $conexion->getConexion();
  $sql = "SELECT * FROM producto"
  $statement= $cnn->prepare($sql);
  $valor = $statement->execute();

  if ($valor) {
    while ($resultado = $statement->fetch(PDO::FETCH_ASOC)) {
      $data["data"][]= $resultado;
    }
  }else {
    echo "error";
  }
  $statement->closeCursor();
  $conexion = NULL;
 ?>
