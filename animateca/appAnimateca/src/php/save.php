<?php
 $message = '';
 $error = '';
 if(isset($_POST["submit"]))
 {
      if(empty($_POST["Image"]))
      {
           $error = "<label class='text-danger'>Enter the URL Image</label>";
      }
      else if(empty($_POST["Title"]))
      {
           $error = "<label class='text-danger'>Enter Title</label>";
      }
      else if(empty($_POST["description"]))
      {
           $error = "<label class='text-danger'>Enter description</label>";
      }
      else if(empty($_POST["Moreinfo"]))
      {
           $error = "<label class='text-danger'>Enter More info</label>";
      }
      else if(empty($_POST["label"]))
      {
           $error = "<label class='text-danger'>Enter label </label>";
      }
      else
      {
           if(file_exists('../animes.json'))
           {
                $current_data = file_get_contents('../animes.json');
                $array_data = json_decode($current_data, true);
                $extra = array(
                     'src'               =>     $_POST['Image'],
                     'alt'          =>     $_POST["Title"],
                     'title'     =>     $_POST["Title"],
                     'description'     =>     $_POST["descripcion"],
                     'moreinfo'     =>     $_POST["Moreinfo"],
                     'label'     =>     $_POST["label"],
                );
                $array_data[] = $extra;
                $final_data = json_encode($array_data);
                if(file_put_contents('../animes.json', $final_data))
                {
                     $message = "<label class='text-success'>File Appended Success fully</p>";
                }
           }
           else
           {
                $error = 'JSON File not exits';
           }
      }
 }
 ?>
 
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
