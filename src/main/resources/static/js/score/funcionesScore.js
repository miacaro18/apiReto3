function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let valor = $("#valor").val();
    let mensaje = $("#mensaje").val(); 
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(valor)) {
        errores="Valor vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#valor").focus();
        return false;
    }else if( validaesVacio(mensaje)) {
        errores="Mensaje vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensaje").focus();
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
    let valor = $("#valorEdit").val();
    let mensaje = $("#mensajeEdit").val(); 
    let errores="";
    $("#mensajes").html("");
    
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(valor)) {
        errores="Valor vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#valorEdit").focus();
        return false;
    }else if( validaesVacio(mensaje)) {
        errores="Mensaje vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajeEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}