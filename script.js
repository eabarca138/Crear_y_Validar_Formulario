function validar(){
    var nombre, apellidos, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre no puede superar los 30 caracteres");
        return false;
    }

    else if (apellidos.length>80){
        alert("El campo apellidos no puede supera los 80 caracteres");
        return false;
    }

    else if (correo.length>100){
        alert("El campo correo no puede superar los supera los 100 caracteres");
        return false;
    }

    else if (!expresion.test(correo)){
        alert("correo invalido")
        return false;
    }

    else if (usuario.length>20){
        alert("El campo correo no puede superar los 20 caracteres");
        return false;
    }

    else if (clave.length>15){
        alert("La clave no puede superar los 15 caracteres");
        return false;
    }

    else if (isNaN(telefono)){
        alert("Número de teléfono inválido")
        return false;
    }

    alert("Bienvenido!" + " " + nombre + " " + apellidos + "\n" + "Tu nombre de usuario es:" + " " + usuario + "\n" + "Tu contraseña es:" +" " + clave)
    }