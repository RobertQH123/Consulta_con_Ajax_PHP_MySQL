<?php
require "conexion.php";

$codigo = $_POST['codigo'] ;
$codigo = (int)$codigo;
$sesultado = mysqli_query($con, "SELECT * FROM `usuarios` WHERE ID = $codigo");
if(mysqli_num_rows($sesultado)>0){ 
  while($fila = mysqli_fetch_assoc($sesultado))
  {
   echo json_encode(array($fila['NOMBRE'],$fila['CORREO']));
  }
}else{
  echo json_encode('error');
}
mysqli_close($con);
?>