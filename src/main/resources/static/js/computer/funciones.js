function validaesName(dato){//name && brand
    num=dato.trim().length;
    //console.log("name || brand= ",num);
    if (num>=1 && num<=45) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validaYear(dato){ //year
    //console.log("Year= ",dato);
    if (dato>=2000 && dato<=2021) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validarOtro(dato){ //description
    num=dato.trim().length;
    //console.log("description= ",num);
    if (num>=1 && num<=250) {
        return false;
    }else{
        return true;
    }
    //return !dato.trim().length;
}

function validaesVacio(dato){//category
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

    if( validaesName(name)) {
        errores="ERROR. Name fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesName(brand)) {
        errores="ERROR. Brand fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brand").focus();
        return false;
    }else if( validaYear(year)) {  
        errores="ERROR. Year debe estar entre 2000 y 2021<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#year").focus();
        return false;
    }else if( validarOtro(description)) {  
        errores="ERROR. Description fuera de los parametros (Min 1 y Max 250)<br>";
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
    }else if( validaesName(name)) {
        errores="ERROR. Name fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesName(brand)) {
        errores="ERROR. Brand fuera de los parametros (Min 1 y Max 45)<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaYear(year)) {  
        errores="ERROR. Year debe estar entre 2000 y 2021<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#yearEdit").focus();
        return false;
    }else if( validarOtro(description)) {  
        errores="ERROR. Description fuera de los parametros (Min 1 y Max 250)<br>";
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