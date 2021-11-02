$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://localhost:8081/api/Reservation/all",
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
                  <th>Start Date</th>
                  <th>Devolution Date</th>
                  <th>Computer</th>
                  <th>Id Client</th>
                  <th>Name Client</th>
                  <th>Email Client</th>
                  <th>Score</th>
                  <th>Status</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;
                  
    for (var i=0; i < respu.length; i++) {
        tabla +=`<tr>
                    <td>${respu[i].startDate}</td> 
                    <td>${respu[i].devolutionDate}</td> 
                    <td>${respu[i].computer.name}</td> 
                    <td>${respu[i].client.idClient}</td>
                    <td>${respu[i].client.name}</td>
                    <td>${respu[i].client.email}</td>
                    <td>${respu[i].score.valor}</td>
                    <td>${respu[i].status}</td> 
                   <td><button onclick="editarRegistro(${respu[i].idReservation})">Editar</button></td>
                   <td><button onclick="borrarRegistro(${respu[i].idReservation})">Borrar</button></td>
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
    $("#startDate").val(""),
    $("#devolutionDate").val(""),
    $("#client").val(""),
    $("#computer").val(""),
    $("#score").val(""),
    $("#status").val("")
}