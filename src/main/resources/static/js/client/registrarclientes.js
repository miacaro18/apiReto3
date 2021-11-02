function registrar() {
    let datos={
        name: $("#name").val(),
        password: $("#password").val(),
        email: $("#email").val(),
        age: $("#age").val()
    }
    
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            url: "http://localhost:8081/api/Client/save",
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

function activaNuevo(){
    $("#nuevo").show(500);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}