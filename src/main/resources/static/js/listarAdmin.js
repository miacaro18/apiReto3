//$(document).ready(function(){
    //listarAdmin();
//})

function listarAdmin(){
    $.ajax({
        //url:"http://localhost:8081/api/Admin/all",
        url:"http://129.151.122.34:8081/api/Admin/all",
        type:'GET',
        dataType:'json',

        success:function(respuesta){
            console.log(respuesta);
            //console.log(respuesta.length);
            //console.log(respuesta.items);
            listarRespuestaAdmin(respuesta.length,respuesta);
        },

        error:function(xhr,status){
            console.log(status);
        }
    });
}

function listarRespuestaAdmin(num,respu){
    $("#listAdmin").html("");
    $("#listAdmin").show(500);

    var tabla=`<table border="1">
              <tr>
                <th>Nombre</th>
              </tr>`;
              
    for (var i=0; i < num; i++) {
        tabla +=`<tr>
                    <td>${respu[i].nombre}</td> 
                    </tr>
        `;
    }
    tabla+=`</table>`;
    $("#listAdmin").html(tabla);
}


