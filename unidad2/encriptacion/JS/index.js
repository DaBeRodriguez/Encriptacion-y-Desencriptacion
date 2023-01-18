function encriptar() {
    var PasswordSistema = '12345678910'
    var MensajeError = 'Contraseña INCORRECTA'

    var mensaje = document.getElementById("mensaje").value;
    var password = document.getElementById("password").value;

    //alert(mensaje + "" + password)

    if (password == PasswordSistema) {
        //alert("contraseña correcta : Ingrestaste");
        document.getElementById("error").innerHTML = " ";

        var mensajeEncriptado = btoa(mensaje);
        //alert(mensajeEncriptado);
        document.getElementById("msjEncript").innerHTML = mensajeEncriptado



    } else {
        //alert(MensajeError);
        document.getElementById("error").innerHTML = MensajeError;
        
        // document.getElementById("error").className = "alerta";
        
        document.getElementById("msjEncript").innerHTML = " " ;
    }

}

function desencriptar(){
    var mensajeCodificado = document.getElementById("msgcodigo").value;
    var mensajeReal =atob(mensajeCodificado);
    
    //alert("desencriptar");

    document.getElementById("msjreal").innerHTML = mensajeReal;


}
