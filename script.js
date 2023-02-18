const switchButton = document.getElementById("switch");
switchButton.addEventListener("click", switchToDarkmode)

function switchToDarkmode (){
    document.body.classList.toggle("dark");
    switchButton.classList.toggle("active")
}

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});