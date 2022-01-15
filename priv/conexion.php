<?php
$host = "localhost";
$usuario = "root";
$password = "";
$BD = "prueba";

$con = mysqli_connect($host,$usuario,$password,$BD);

if(mysqli_connect_errno()){
  echo json_encode('error');
}
?>
