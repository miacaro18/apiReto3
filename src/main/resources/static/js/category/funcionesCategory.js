function validaesVacio(dato){ //name
    num=dato.trim().length;
    //console.log("name",num);
    if (num>=1 && num<=45) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validaOtro(dato){ //description
    num=dato.trim().length;
    //console.log("description",num);
    if (num>=1 && num<=250) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validar(){
    let name = $("#name").val();
    let description = $("#description").val(); 
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(name)) {
        errores="ERROR. Name fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaOtro(description)) {
        errores="ERROR. Descripcion fuera de los parametros (Min 1 y Max 250)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
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
    let description = $("#descriptionEdit").val(); 
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="ERROR. Name fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaOtro(description)) {
        errores="ERROR. Descripcion fuera de los parametros (Min 1 y Max 250)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#descriptionEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}