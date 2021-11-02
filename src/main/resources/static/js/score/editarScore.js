function editarRegistro(numId) {

    $("#idEdit").prop('disabled',true);
    $("#valorEdit").focus();

    let datos = {
        id: numId
    }
    
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8081/api/Score/" + numId,
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
    $("#valorEdit").val(respu.valor);
    $("#mensajeEdit").val(respu.mensaje);   
}

function actualizar() {
    let datos = {
        id: $("#idEdit").val(),
        valor: $("#valorEdit").val(),
        mensaje: $("#mensajeEdit").val(),
    }
    
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        $.ajax({
            url: "http://localhost:8081/api/Score/update",
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