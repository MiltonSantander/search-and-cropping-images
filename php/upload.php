<?php

$namefile = $_FILES["croppedImage"]["name"];
$namefile = uniqid('', true);
move_uploaded_file($_FILES["croppedImage"]["tmp_name"], "C:/xampp/htdocs/search-api-project/downloaded-images/".$namefile.".png");
error_log (json_encode($namefile));




// $filename = $_POST['filename'];
// $img = $_POST['pngimageData'];
// $img = str_replace('data:image/png;base64,', '', $img);
// $img = str_replace(' ', '+', $img);
// $data = base64_decode($img);
// file_put_contents($filename, $data);

// if(isset($this->params['post']['productId'])){

    // $item = CoreProducts::find($this->params['post']['productId']); //se busca en la base de datos, y se guarda en un objeto el producto al cual se le va a vincular la imagen que se subio al servidor.
    // error_log("ingresa a upload.php", 0);
    // $file = $_FILES['croppedImage'];
    // error_log (implode(" ",$file));
    // // $productId = $_FILES['productId'];
    // // error_log (implode(" ", $productId));
    // // error_log("pasa $file", 0);

    // $fileName = $file['name'];
    // $fileTmpName = $file['tmp_name'];
    // $fileSize = $file['size'];
    // $fileError = $file['error'];
    // $fileType = $file['type'];

    // $fileExtSeparator = explode('.', $fileName);
    // $fileExtension = strtolower(end($fileExtSeparator));

    // $allowed = array('jpg', 'jpeg', 'png', 'raw', 'ico', 'webp'); //tipos de extensiones permitidas

    // if (in_array($fileExtension, $allowed)) {
    //     if ($fileError === 0) {
    //         if ($fileSize < 1000000) { //100MB max
    //             $fileNewName = uniqid('', true).".".$fileExtension; // nombre unico basado en milisegundos + la extension original del archivo
    //             $fileDestination = 'media/uploads/product_pictures/'.$fileNewName;

    //             //si no guarda tira un error y retorna sin hacer nada mas
    //             if(!move_uploaded_file($fileTmpName, $fileDestination)) {
    //                 echo "Error al subir el archivo";
    //                 return;
    //             }
                
    //             //aca se cambia el nombre al campo de la base de datos que se llama image
    //             $item->image		= $fileNewName;
    //             //si el cambio se guarda en la base de datos se recarga
    //             if($item->save()){
    //                 // header('Location: http://localhost/charly.amtpy.com/public/site');
    //                 // $this->items = CoreProducts::getNullPictures();
    //             } else {
    //                 echo "No se ha podido guardar el nombre de la imagen, intente nuevamente";
    //             }
                
                
    //         } 
    //         else {
    //             echo "Solo se permiten imagenes de hasta 10 MB";
    //         }
    //     } 
    //     else {
    //         echo "Ocurrio un error al subir el archivo";
    //     }
    // } 
    // else {
    //     echo "Error";
    // }
// }