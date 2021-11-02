function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let name = $("#name").val();
    let password = $("#password").val();
    let email = $("#email").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(name)) {
        errores="Name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(password)) {
        errores="Contraseña vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#password").focus();
        return false;
    }else if( validaesVacio(email)) {
        errores="Email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#email").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validarEditar(){
    let id = $("#idEdit").val();
    let name = $("#nameEdit").val();
    let password = $("#passwordEdit").val();
    let email = $("#emailEdit").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="Name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(password)) {
        errores="Contraseña vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#passwordEdit").focus();
        return false;
    }else if( validaesVacio(email)) {
        errores="Email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#emailEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}