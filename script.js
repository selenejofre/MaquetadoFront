const switchButton = document.getElementById("switch");
switchButton.addEventListener("click", switchToDarkmode)

function switchToDarkmode (){
    document.body.classList.toggle("dark");
    switchButton.classList.toggle("active")
}

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

//Seleccionar boton editar
const botonEditar = document.getElementById("botonEditar");
botonEditar.addEventListener("click", editarContenido)

//Editar Nombre y contenido de perfil
const nombre = document.getElementById("nombre")
const descripcionDePerfil = document.getElementById("descripcionDePerfil")
