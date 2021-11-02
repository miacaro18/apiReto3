function registrar() {
    let datos={
        name:$("#name").val(),
        description:$("#description").val() 
    }

    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);

    if (validar()){
        $.ajax({
            url: "http://localhost:8081/api/Category/save",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",
            dataType: 'json',
            
            success: function (respuesta) {
                console.log("Insertado");
                $("#mensajes").show(2000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(2000);
                listar();
                estadoInicial();
                $("#nameCate").val(""),
                $("#descriptionCate").val("")
            },

            error: function (xhr, status) {
                $("#mensajes").show(2000);
                $("#mensajes").html("Error peticion POST..." + status );
                //$("#mensajes").hide(1000);
            }
        });
    }
}

function activaNuevo(){
    $("#nuevo").show(1000);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(1000)
    $("#listado").hide(1000);
}