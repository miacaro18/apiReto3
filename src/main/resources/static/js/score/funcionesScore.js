function validarVacio(dato){ //Valor
    num=dato.trim().length;
    console.log("Valor= ",dato);
    if (num>0 && num<2) {
        if (dato>=0 && dato<=5) {
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
    //console.log("!dato = ",!dato.trim().length);
    //return !dato.trim().length;
}

function validarOtro(dato){ //mensaje
    num=dato.trim().length;
    //console.log("Mensaje= ",num);
    if (num>=1 && num<=250) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validar(){
    let valor = $("#valor").val();
    let mensaje = $("#mensaje").val(); 
    let errores="";
    $("#mensajes").html("");

    if( validarVacio(valor)) {
        errores="ERROR. Valor fuera de los parametros (Min 0 y Max 5)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#valor").focus();
        return false;
    }else if( validarOtro(mensaje)) {
        errores="ERROR. Mensaje fuera de los parametros (Min 1 y Max 250)<br>";
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
    
    if( validarOtro(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validarVacio(valor)) {
        errores="ERROR. Valor fuera de los parametros (Min 0 y Max 5)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#valorEdit").focus();
        return false;
    }else if( validarOtro(mensaje)) {
        errores="ERROR. Mensaje fuera de los parametros (Min 1 y Max 250)<br>";
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