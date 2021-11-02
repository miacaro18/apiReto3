function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    //obtiene valores
    let name = $("#name").val();
    let password = $("#password").val();
    let email = $("#email").val();
    let age = $("#age").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="name vacio<br>";
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
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#email").focus();
        return false;
    }else if( validaesVacio(age)) {  
        errores="age vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#age").focus();
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
    let age = $("#ageEdit").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
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
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#emailEdit").focus();
        return false;
    }else if( validaesVacio(age)) {  
        errores="age vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#ageEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}