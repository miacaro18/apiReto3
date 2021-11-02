function registrar() {
    let datos={
        name: $("#name").val(),
        password: $("#password").val(),
        email: $("#email").val()
    }
    
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            url: "http://localhost:8081/api/Admin/save",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",
            
            success: function (respuesta) {
                console.log(respuesta);
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

/**
 * Configura el aspecto de la página para ingresar un nuevo registro
 */
function activaNuevo(){
    $("#nuevo").show(1000);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(1000)
    $("#listado").hide(1000);
}