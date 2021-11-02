$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://localhost:8081/api/Admin/all",
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
            console.log(status);
        },
        
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de clientes");
            $("#mensajes").hide(1000);
        }
    });
}

function listarRespuesta(respu) {
    $("#listado").html("");
    $("#listado").show(500);
    
    var tabla = `<table border="1">
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;
                  
    for (var i=0; i < respu.length; i++) {
        tabla +=`<tr>
                   <td>${respu[i].name}</td>
                   <td>${respu[i].email}</td>
                   <td><button onclick="editarRegistro(${respu[i].id})">Editar</button></td>
                   <td><button onclick="borrarRegistro(${respu[i].id})">Borrar</button></td>
                   </tr>`;
    }
    tabla +=`</table>`;
    $("#listado").html(tabla);
}

function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(1000);
    $("#nuevoRegistro").show(1000)

    $("#id").val(""),
    $("#password").val(""),
    $("#email").val(""),
    $("#name").val("")
}