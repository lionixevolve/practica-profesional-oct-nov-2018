<?php
$link = mysqli_connect("http://192.168.100.56/AutoPag/php/animes.json", "Jay", "12345678", "animes");

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
$title = mysqli_real_escape_string($link, $_REQUEST['Title']);
$image = mysqli_real_escape_string($link, $_REQUEST['Image']);
$description = mysqli_real_escape_string($link, $_REQUEST['descripcion']);
$moreinfo = mysqli_real_escape_string($link, $_REQUEST['Moreinfo']);
$label = mysqli_real_escape_string($link, $_REQUEST['label']);

// Attempt insert query execution
$sql = "INSERT INTO lista (Image, Alt, Title, Description, Moreinfo, Label) VALUES ( '$image', '$title' ,'$title','$description', '$moreinfo', '$label')";
if(mysqli_query($link, $sql)){
    echo "Anime added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
?>
