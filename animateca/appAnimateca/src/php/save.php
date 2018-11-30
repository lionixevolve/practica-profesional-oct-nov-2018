<?php

$server = "localhost";
$user = "Jay";
$pass = "12345678";
$bd = "animes";

//Creamos la conexión
$conexion = mysqli_connect($server, $user, $pass,$bd)
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

//generamos la consulta
$sql = "SELECT * FROM lista";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$lista = array(); //creamos un array

while($row = mysqli_fetch_array($result))
{
    $src=$row['Image'];
    $title=$row['Title'];
    $alt=$row['Alt'];
    $description=$row['Description'];
    $moreinfo=$row['Moreinfo'];
    $label=$row['label'];

    $lista[] = array('title'=> $title, 'src'=> $src, 'alt'=> $alt,
                        'description'=> $description, 'moreinfo'=> $moreinfo, 'label'=> $label);

}

//desconectamos la base de datos
$close = mysqli_close($conexion)
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");


//Creamos el JSON
$json_string = json_encode($clientes);
echo $json_string;

//Si queremos crear un archivo json, sería de esta forma:

$file = 'animes.json';
file_put_contents($file, $json_string);


?>
