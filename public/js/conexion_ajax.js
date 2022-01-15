function conexion_a(){
  const formu= document.getElementById("formulario")
  const error = document.getElementById("msjerror")
  const res = document.getElementById("info")
  const datos = new FormData(formu)
  const codigo = datos.get("codigo")
  if(codigo == ""){
    error.innerHTML = "<p>ingrese un codigo</p>"
  }else if(isNaN(codigo)){
    error.innerHTML = "<p>solo se aceptan numeros</p>"
  }else{
    fetch('../priv/datos.php',{
     method : 'POST',
      body : datos
    })
    .then(res => res.json())
    .then(data =>{
      const msj = data
      if(msj == "error"){
        error.innerHTML = "<p>no se encuentra el usuario en la base de datos<p>"
      }else{
        error.innerHTML = ""
        res.innerHTML = ""
        for (i in msj){
          res.innerHTML += "<p>"+msj[i]+"</p>"
        }
        res.innerHTML += "<button class='btn-ss' onclick='formulario()' >Regresar</button>"  
      }
    })
  }
}
  