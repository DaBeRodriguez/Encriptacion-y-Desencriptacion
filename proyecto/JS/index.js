function ingresar() {
    var Passwordsistema = '12345678910'
    var Mensajeerror = 'Contraseña incorrecta'
    var password = document.getElementById("password").value;
    var nombreUsser =document.getElementById("nombre").value;

    if (password == Passwordsistema) { 
        document.getElementById("error").innerHTML = " ";
        location.href ="opciones.html";
        localStorage.setItem("nombre", nombreUsser);
      
    } else {
        document.getElementById("error").innerHTML = Mensajeerror;
    }
}

function muestra(){
    document.getElementById("saludo").innerHTML+=localStorage.getItem("nombre");
}
muestra();

function redireccion1 (){
    location.href ="encriptar.html";
}

function redireccion2 (){
    location.href = "desencriptar.html"
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
