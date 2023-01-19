function Ingresar() {
    var Passwordsistema = localStorage.getItem("_password")
    var usuario = localStorage.getItem("_usuario")

    var password = document.getElementById("password").value;
    var nombreUsser = document.getElementById("nombre").value;
    var Mensajeerror = 'Contraseña incorrecta';


    if (password == Passwordsistema && nombreUsser == usuario) {
        document.getElementById("error").innerHTML = "";

        location.href = "opciones.html";

    } else {
        document.getElementById("error").innerHTML = Mensajeerror;
    }
}

function muestra() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("_usuario");
}
muestra();


function guardarDatos() {

    var error2 = 'Llene los recuadros';
    var vacio = '';

    var datosNombre = document.getElementById("usuario").value;
    var datosPassword = document.getElementById("password").value;

    // Cambios de prueba
    if (datosNombre || datosPassword != vacio) {

        localStorage.setItem("_usuario", datosNombre);
        localStorage.setItem("_password", datosPassword);

        location.href = "index.html";
    } else {
        document.getElementById("error2").innerHTML = error2;
        location.href = "crearcuenta.html";
    }



    //if (datosNombre && datosPassword != vacio) 

    //cambios de prueba
}




function redireccion1() {
    location.href = "encriptar.html";
}

function redireccion2() {
    location.href = "desencriptar.html"
}
function ir_Inicio() {
    location.href = "index.html"
}

function opciones() {
    location.href = "opciones.html"
}

function encriptar() {

    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);
    document.getElementById("msjEncript").innerHTML = mensajeEncriptado

}

function desencriptar() {

    var mensajecodigo = document.getElementById("msgcodigo").value;
    var mensajedesencriptado = atob(mensajecodigo);

    document.getElementById("msjreal").innerHTML = mensajedesencriptado;


}