function formulario(){
  var elem = document.getElementById("info")
  var infoForm = ""
  infoForm += "<h1>Formulario</h1>"
  infoForm += "<form id='formulario' class='flex-form'>"
  infoForm +=  "<input type='text' placeholder='codigo' name='codigo'>"
  infoForm +=  "<input class='btn-ss' type='button' onclick='conexion_a()' value='Buscar'>"
  infoForm += "</form>"
  infoForm += " <h3 id='msjerror'></h3>"
  elem.innerHTML = infoForm
}
formulario()