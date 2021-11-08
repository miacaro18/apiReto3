function validaesVacio(dato){ //name
    num=dato.trim().length;
    //console.log("name",num);
    if (num>=1 && num<=250) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validarOtro(dato){ //password && email
    num=dato.trim().length;
    //console.log("password || email",num);
    if (num>=1 && num<=45) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validarAge(dato){ //age
    //console.log("Age",dato);
    if (dato>=18 && dato<=120) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
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
        errores="ERROR. Name fuera de los parametros (Min 1 y Max 250)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validarOtro(password)) {
        errores="ERROR. Contraseña fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#password").focus();
        return false;
    }else if( validarOtro(email)) {
        errores="ERROR. Email fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#email").focus();
        return false;
    }else if( validarAge(age)) {  
        errores="ERROR. Age fuera de los parametros (Min 18 y Max 120 Años)<br>";
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
        errores="ERROR. Name fuera de los parametros (Min 1 y Max 250)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validarOtro(password)) {
        errores="ERROR. Contraseña fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#passwordEdit").focus();
        return false;
    }else if( validarOtro(email)) {
        errores="ERROR. Email fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#emailEdit").focus();
        return false;
    }else if( validarAge(age)) {  
        errores="ERROR. Age fuera de los parametros (Min 18 y Max 120 Años)<br>";
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