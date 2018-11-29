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
