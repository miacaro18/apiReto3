$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://localhost:8081/api/Message/all",
        type: 'GET',
        dataType: 'json',
        
        success: function (respuesta) {
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuesta(respuesta);
        },
        
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },
        
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de mensajes...");
            $("#mensajes").hide(1000);
        }
    });
}

function listarRespuesta(respu) {
    $("#listado").html("");
    $("#listado").show(500);
    
    var tabla = `<table border="1">
                  <tr>
                    <th>Message</th>
                    <th>Computer</th>
                    <th>Client</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;
                  
    for (var i=0; i < respu.length; i++) {
        tabla +=`<tr>
                    <td>${respu[i].messageText}</td>
                    <td>${respu[i].computer.name}</td> 
                    <td>${respu[i].client.name}</td>
                   <td><button onclick="editarRegistro(${respu[i].idMessage})">Editar</button></td>
                   <td><button onclick="borrarRegistro(${respu[i].idMessage})">Borrar</button></td>
                   </tr>`;
    }
    tabla +=`</table>`;
    $("#listado").html(tabla);
}


function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)

    $("#id").val(""),
    $("#messageText").val(""),
    $("#client").val(""),
    $("#computer").val("")
}