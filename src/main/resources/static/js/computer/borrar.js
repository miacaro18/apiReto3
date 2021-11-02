function borrarRegistro(numId) {
    console.log(numId);
    let datos={
        id: numId
    }
    
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);

    $.ajax({
        url: "http://localhost:8081/api/Computer/" + numId,
        data : datosPeticion,
        type: 'DELETE',
        contentType:"application/JSON",
        dataType: 'json',
        
        success: function (respuesta) {
            console.log("Borrado");
            //console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro eliminado...");
            $("#mensajes").hide(1000);
            listar();
        },
        
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            $("#mensajes").hide(1000);
            console.log(status);
        }
    });
}