function validaesVacio(dato){ 
    return !dato.trim().length;
}

function validarMessa(dato){ //messageText
    num=dato.trim().length;
    //console.log("messageText= ",num);
    if (num>=1 && num<=250) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validar(){
    let messageText = $("#messageText").val();
    let computer = $("#computer").val();
    let client = $("#client").val();
    let errores="";
    $("#mensajes").html("");

    if( validarMessa(messageText)) {
        errores="ERROR. Message fuera de los parametros (Min 1 y Max 250)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#messageText").focus();
        return false;
    }else if( validaesVacio(computer)) {
        errores="Computer vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#computer").focus();
        return false;
    }else if( validaesVacio(client)) {
        errores="Client vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#client").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validarEditar(){
    let idMessage = $("#idEdit").val();
    let messageText = $("#messageTextEdit").val();
    let computer = $("#computerEdit").val();
    let client = $("#clientEdit").val();
    let errores="";
    $("#mensajes").html("");
    
    if( validaesVacio(idMessage)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validarMessa(messageText)) {
        errores="ERROR. Message fuera de los parametros (Min 1 y Max 250)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#messageTextEdit").focus();
        return false;
    }else if(validaesVacio(computer)) {
        errores="Computer vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#computerEdit").focus();
        return false;
    }else if(validaesVacio(client)) {
        errores="Client vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#clientEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}