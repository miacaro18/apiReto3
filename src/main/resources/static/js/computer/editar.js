function editarRegistro(numId) {

    $("#idEdit").prop('disabled',true);
    $("#categoryEdit").prop('disabled',true);
    $("#nameEdit").focus();

    let datos = {
        id: numId
    }
    
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8081/api/Computer/" + numId,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',
        
        success: function (respuesta) {
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Información recuperada...");
            $("#mensajes").hide(1000);
            editarRespuesta(respuesta);
            activaEditar();
        },
        
        error: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Error peticion PUT..." + status);
            //$("#mensajes").hide(1000);
        }
    });
}

function editarRespuesta(respu) {
    $("#idEdit").val(respu.id);
    $("#nameEdit").val(respu.name);
    $("#brandEdit").val(respu.brand);
    $("#yearEdit").val(respu.year);
    $("#descriptionEdit").val(respu.description);
    $("#categoryEdit").val(respu.category.id);    
}

function actualizar() {
    let datos = {
        id: $("#idEdit").val(),
        name: $("#nameEdit").val(),
        brand: $("#brandEdit").val(),
        year: $("#yearEdit").val(),
        description: $("#descriptionEdit").val(),
        //category: $("#categoryEdit").val()
        category: ({"id":$("#categoryEdit").val()})
    }
    
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        $.ajax({
            url: "http://localhost:8081/api/Computer/update",
            data: datosPeticion,
            type: 'PUT',
            contentType: "application/JSON",
            
            success: function (respuesta) {
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro actualizado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },
            
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion Post..." + status);
                //$("#mensajes").hide(1000);
            }
        });
    }
}

function activaEditar() {
    $("#idEdit").hide();
    $("#editar").show(500);
    $("#idEdit").focus();
    $("#nuevo").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}