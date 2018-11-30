<?php
$link = mysqli_connect("localhost", "Jay", "12345678", "animes");

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
$name = mysqli_real_escape_string($link, $_REQUEST['name']);
$image = mysqli_real_escape_string($link, $_REQUEST['image']);
$description = mysqli_real_escape_string($link, $_REQUEST['descripcion']);
$moreinfo = mysqli_real_escape_string($link, $_REQUEST['moreinfo']);
$label = mysqli_real_escape_string($link, $_REQUEST['label']);

// Attempt insert query execution
$sql = "INSERT INTO lista (Image, Alt, Title, Description, Moreinfo, Label) VALUES ( '$image', '$name' ,'$name','$description', '$moreinfo', '$label')";
if(mysqli_query($link, $sql)){
    echo "Anime added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
?>
