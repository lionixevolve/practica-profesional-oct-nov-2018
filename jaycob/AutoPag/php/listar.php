<?php

  include 'importer.php';
  $conexion = new Conexion();
  $cnn = $conexion->getConexion();
  $sql = "SELECT * FROM producto"
  $statement= $cnn->prepare($sql);


 ?>
