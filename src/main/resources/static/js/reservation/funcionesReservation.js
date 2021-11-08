function validaesVacio(dato){//idEdit
    return !dato.trim().length;
}

function validarDev(startDate,devolutionDate){ //devolutionDate
    const hoy = String(new Date().toISOString()).substr(-29,10);
    //String(new Date().toISOString()).substr(-29,10)
    console.log("hoy= ", hoy);
    console.log("startDate= ",startDate, "devolutionDate= ",devolutionDate);
    if (devolutionDate >= startDate){
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validarStatus(dato){ //Status
    //console.log("status= ",dato);
    if (dato=="completed" || dato=="cancelled"){
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
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
    }else if( validarDev(startDate,devolutionDate)) {
        errores="Devolution Date debe ser igual o mayor a Start Date o esta vacio<br>";
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
    }else if( validarStatus(status)) {
        errores="ERROR. Status debe ser 'completed' o 'cancelled'<br>";
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
        errores="Start Date esta vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDateEdit").focus();
        return false;
    }else if( validarDev(startDate,devolutionDate)) {
        errores="Devolution Date debe ser igual o mayor a Start Date o esta vacio<br>";
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
    }else if( validarStatus(status)) {
        errores="ERROR. Status debe ser 'completed' o 'cancelled'<br>";
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