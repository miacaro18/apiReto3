function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let startDate = $("#startDate").val();
    let devolutionDate = $("#devolutionDate").val();
    let computer = $("#computer").val();
    let client = $("#client").val();
    let score = $("#score").val();
    let status = $("#status").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(startDate)) {
        errores="Start Date vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    }else if( validaesVacio(devolutionDate)) {
        errores="Devolution Date vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#devolutionDate").focus();
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
    }else if( validaesVacio(score)) {
        errores="Score vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#score").focus();
        return false;
    }else if( validaesVacio(status)) {
        errores="Status vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#status").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validarEditar(){
    let idReservation = $("#idEdit").val();
    let startDate = $("#startDateEdit").val();
    let devolutionDate = $("#devolutionDateEdit").val();
    let computer = $("#computerEdit").val();
    let client = $("#clientEdit").val();
    let score = $("#scoreEdit").val();
    let status = $("#statusEdit").val();
    let errores="";
    $("#mensajes").html("");
    
    if( validaesVacio(idReservation)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idReservationEdit").focus();
        return false;
    }else if( validaesVacio(startDate)) {
        errores="Start Date vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDateEdit").focus();
        return false;
    }else if( validaesVacio(devolutionDate)) {
        errores="Devolution Date vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#devolutionDateEdit").focus();
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
    }else if( validaesVacio(score)) {
        errores="Score vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#scoreEdit").focus();
        return false;
    }else if( validaesVacio(status)) {
        errores="Status vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#statusEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}