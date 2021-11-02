function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let name = $("#name").val();
    let brand = $("#brand").val();
    let year = $("#year").val();
    let description = $("#description").val();
    let category = $("#category").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brand").focus();
        return false;
    }else if( validaesVacio(year)) {  
        errores="year vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#year").focus();
        return false;
    }else if( validaesVacio(description)) {  
        errores="description vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="category vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
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
    let brand = $("#brandEdit").val();
    let year = $("#yearEdit").val();
    let description = $("#descriptionEdit").val();
    let category = $("#categoryEdit").val();
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
    }else if( validaesVacio(brand)) {
        errores="Brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(year)) {  
        errores="Year vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#yearEdit").focus();
        return false;
    }else if( validaesVacio(description)) {  
        errores="Description vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#descriptionEdit").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="category vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#categoryEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}