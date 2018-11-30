<?php
 $message = '';
 $error = '';
 if(isset($_POST["submit"]))
 {
      if(empty($_POST["name"]))
      {
           $error = "<label class='text-danger'>Enter Name</label>";
      }
      else if(empty($_POST["image"]))
      {
           $error = "<label class='text-danger'>Enter Gender</label>";
      }
      else if(empty($_POST["descripcion"]))
      {
           $error = "<label class='text-danger'>Enter descripcion</label>";
      }
      else if(empty($_POST["moreinfo"]))
      {
           $error = "<label class='text-danger'>Enter more info</label>";
      }
      else if(empty($_POST["label"]))
      {
           $error = "<label class='text-danger'>Enter label</label>";
      }
      else
      {
           if(file_exists('animes.json'))
           {
                $current_data = file_get_contents('animes.json');
                $array_data = json_decode($current_data, true);
                $extra = array(
                     'title'               =>     $_POST['name'],
                     'alt'     =>     $_POST["name"],
                     'src'          =>     $_POST["image"],
                     'descripcion'     =>     $_POST["descripcion"],
                     'moreinfo'     =>     $_POST["moreinfo"],
                     'label'     =>     $_POST["label"]
                );
                $array_data[] = $extra;
                $final_data = json_encode($array_data);
                if(file_put_contents('animes.json', $final_data))
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
 <!DOCTYPE html>
 <html>
      <head>
           <title>Webslesson Tutorial | Append Data to JSON File using PHP</title>
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      </head>
      <body>
           <br />
           <div class="container" style="width:500px;">
                <h3 align="">Append Data to JSON File</h3><br />
                <form method="post">
                     <?php
                     if(isset($error))
                     {
                          echo $error;
                     }
                     ?>
                     <br />
                     <label>Name</label>
                     <input type="text" name="name" class="form-control" /><br />
                     <label>Image</label>
                     <input type="text" name="image" class="form-control" /><br />
                     <label>descripcion</label>
                     <input type="text" name="descripcion" class="form-control" /><br />
                     <label>More info</label>
                     <input type="text" name="moreinfo" class="form-control" /><br />
                     <label>Etiqueta</label>
                     <input type="text" name="label" class="form-control" /><br />
                     <input type="submit" name="submit" value="Append" class="btn btn-info" /><br />
                     <?php
                     if(isset($message))
                     {
                          echo $message;
                     }
                     ?>
                </form>
           </div>
           <br />
      </body>
 </html>
