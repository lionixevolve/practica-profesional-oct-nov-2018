<?php
  $json = file_get_contenets('animes.json');
  print_r($json);

  $data = json_decode($json, true);
  print_r($json)

 ?>
