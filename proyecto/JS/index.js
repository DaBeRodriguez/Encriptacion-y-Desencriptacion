function ingresar() {
    var Passwordsistema = '12345678910'
    var Mensajeerror = 'Contraseña incorrecta'
    var password = document.getElementById("password").value;

    if (password == Passwordsistema) { 
        document.getElementById("error").innerHTML = " ";
        location.href ="sistema.html"


    } else {
        document.getElementById("error").innerHTML = Mensajeerror;
    }

}
function encriptar(){

    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);
    document.getElementById("msjEncript").innerHTML =  mensajeEncriptado

}

function desencriptar(){

    var mensajecodigo = document.getElementById("msgcodigo").value;
    var mensajedesencriptado = atob(mensajecodigo);

    document.getElementById("msjreal").innerHTML = mensajedesencriptado;


}

