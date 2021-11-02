function editarRegistro(numId) {
    
    $("#idEdit").prop('disabled',true);
    $("#computerEdit").prop('disabled',true);
    $("#clientEdit").prop('disabled',true);
    $("#nameEdit").focus();
    
    let datos = {
        id: numId
    }
    
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8081/api/Reservation/" + numId,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',
        
        success: function (respuesta) {
            //console.log(respuesta);
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
    $("#idEdit").val(respu.idReservation);
    $("#startDateEdit").val(respu.startDate),
    $("#devolutionDateEdit").val(respu.devolutionDate),
    $("#computerEdit").val(respu.computer.id);
    $("#clientEdit").val(respu.client.idClient);
    $("#scoreEdit").val(respu.score.id);
    $("#statusEdit").val(respu.status);
}

function actualizar() {
    let datos = {
        idReservation: $("#idEdit").val(),
        startDate:$("#startDateEdit").val(),
        devolutionDate:$("#devolutionDateEdit").val(),
        client:({"idClient":$("#clientEdit").val()}),
        computer:({"id":$("#computerEdit").val()}),
        score:({"id":$("#scoreEdit").val()}),
        status: $("#statusEdit").val()
    }
    
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);

    if (validarEditar()) {
        $.ajax({
            url: "http://localhost:8081/api/Reservation/update",
            data: datosPeticion,
            type: 'PUT',
            contentType: "application/JSON",
            
            success: function (respuesta) {
                //console.log(respuesta);
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