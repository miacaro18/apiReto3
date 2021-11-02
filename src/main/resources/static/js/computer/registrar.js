function registrar() {
    let datos={
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),
        category:({"id":$("#category").val()})
    }

    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            url: "http://localhost:8081/api/Computer/save",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",
            
            success: function (respuesta) {
                console.log("Insertado");
                $("#mensajes").show(2000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(2000);
                listar();
                estadoInicial();
                $("#name").val(""),
                $("#brand").val(""),
                $("#year").val(""),
                $("#description").val(""),
                $("#category").val("")
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