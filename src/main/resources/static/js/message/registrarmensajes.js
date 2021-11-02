function registrar() {
    let datos={
        messageText:$("#messageText").val(),
        client:({"idClient":$("#client").val()}),
        computer:({"id":$("#computer").val()})
    }
    
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);

    if (validar()){
        $.ajax({
            url: "http://localhost:8081/api/Message/save",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",
            
            success: function (respuesta) {
                console.log("Insertado");
                //console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },
            
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion POST..." + status );
                //$("#mensajes").hide(1000);
            }
        });
    }
}

function activaNuevo(){
    $("#nuevo").show(500);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}